import { useState, useMemo } from 'react';
import { getPendingPayments, updateOrder, Order } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import PageHeader from '@/components/PageHeader';
import { toast } from 'sonner';
import { Check, MessageCircle } from 'lucide-react';

const PaymentTracking = () => {
  const [refresh, setRefresh] = useState(0);
  const pending = useMemo(() => getPendingPayments(), [refresh]);
  const cat = getSelectedCategory();

  const markPaid = (order: Order) => {
    updateOrder(order.id, { paymentReceived: true });
    toast.success(`Payment marked for ${order.customerName}`);
    setRefresh(r => r + 1);
  };

  const sendReminder = (order: Order) => {
    const due = order.totalAmount - order.advancePaid;
    const msg = encodeURIComponent(
      cat
        ? cat.reminderTemplate(order.customerName, due, order.item)
        : `Hello ${order.customerName}, this is a friendly reminder about your pending payment of ₹${due} for "${order.item}". Please visit us at your convenience. Thank you!`
    );
    const phone = order.phone.replace(/\D/g, '');
    window.open(`https://wa.me/${phone.length === 10 ? '91' + phone : phone}?text=${msg}`, '_blank');
  };

  const getDaysOverdue = (date: string) => {
    const diff = Math.floor((Date.now() - new Date(date).getTime()) / 86400000);
    return diff > 0 ? diff : 0;
  };

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title="Pending Payments" />

      <div className="px-5 space-y-3">
        {pending.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-shop-lg text-muted-foreground font-semibold">🎉 No pending payments!</p>
          </div>
        ) : (
          pending.map(order => {
            const due = order.totalAmount - order.advancePaid;
            const days = getDaysOverdue(order.deliveryDate);
            return (
              <div key={order.id} className="bg-card rounded-2xl p-5 border border-border shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-shop-lg font-bold text-foreground">{order.customerName}</p>
                    <p className="text-shop-sm text-muted-foreground">{order.item}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-shop-xl font-extrabold text-foreground">₹{due}</p>
                    {days > 0 && (
                      <p className="text-shop-sm font-semibold text-destructive">{days} days overdue</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => markPaid(order)}
                    className="flex-1 bg-primary text-primary-foreground rounded-xl py-3 font-bold text-shop-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98]"
                  >
                    <Check size={20} /> Paid
                  </button>
                  {order.phone && (
                    <button
                      onClick={() => sendReminder(order)}
                      className="bg-success text-success-foreground rounded-xl py-3 px-5 font-bold text-shop-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98]"
                    >
                      <MessageCircle size={20} /> Remind
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PaymentTracking;
