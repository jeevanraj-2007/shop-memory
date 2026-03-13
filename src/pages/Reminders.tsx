import { useState, useMemo } from 'react';
import { getUpcomingReminders, getOverdueReminders, getOrders, Order } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import { t } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { Bell, MessageCircle } from 'lucide-react';

const Reminders = () => {
  const [refresh] = useState(0);
  const cat = getSelectedCategory();
  const overdue = useMemo(() => getOverdueReminders(), [refresh]);
  const upcoming = useMemo(() => getUpcomingReminders(), [refresh]);
  const today = new Date().toISOString().split('T')[0];

  const todayReminders = upcoming.filter(o => o.reminderDate === today);
  const futureReminders = upcoming.filter(o => o.reminderDate! > today);

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

  const getDaysUntil = (date: string) => {
    const diff = Math.ceil((new Date(date).getTime() - Date.now()) / 86400000);
    return diff;
  };

  const ReminderCard = ({ order, isOverdue }: { order: Order; isOverdue?: boolean }) => {
    const days = isOverdue
      ? Math.abs(Math.floor((Date.now() - new Date(order.reminderDate!).getTime()) / 86400000))
      : getDaysUntil(order.reminderDate!);

    return (
      <div className={`bg-card rounded-2xl p-5 border shadow-sm ${isOverdue ? 'border-destructive/30' : 'border-border'}`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-shop-lg font-bold text-foreground">{order.customerName}</p>
            <p className="text-shop-sm text-muted-foreground">{order.item}</p>
          </div>
          <div className="text-right">
            {isOverdue ? (
              <p className="text-shop-sm font-semibold text-destructive">{days} {t('daysOverdue')}</p>
            ) : order.reminderDate === today ? (
              <span className="text-shop-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t('dueToday')}</span>
            ) : (
              <p className="text-shop-sm text-muted-foreground">{new Date(order.reminderDate!).toLocaleDateString()}</p>
            )}
          </div>
        </div>
        {order.phone && (
          <button
            onClick={() => sendReminder(order)}
            className="w-full bg-success text-success-foreground rounded-xl py-3 font-bold text-shop-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98]"
          >
            <MessageCircle size={20} /> {t('remind')}
          </button>
        )}
      </div>
    );
  };

  const hasAny = overdue.length > 0 || todayReminders.length > 0 || futureReminders.length > 0;

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title={t('reminders')} />

      <div className="px-5 space-y-4">
        {!hasAny ? (
          <div className="text-center py-16">
            <Bell size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-shop-lg text-muted-foreground font-semibold">{t('noReminders')}</p>
          </div>
        ) : (
          <>
            {overdue.length > 0 && (
              <div>
                <h2 className="text-shop-sm font-bold text-destructive mb-3 uppercase tracking-wide">{t('overdueReminders')}</h2>
                <div className="space-y-3">
                  {overdue.map(o => <ReminderCard key={o.id} order={o} isOverdue />)}
                </div>
              </div>
            )}

            {todayReminders.length > 0 && (
              <div>
                <h2 className="text-shop-sm font-bold text-primary mb-3 uppercase tracking-wide">{t('dueToday')}</h2>
                <div className="space-y-3">
                  {todayReminders.map(o => <ReminderCard key={o.id} order={o} />)}
                </div>
              </div>
            )}

            {futureReminders.length > 0 && (
              <div>
                <h2 className="text-shop-sm font-bold text-muted-foreground mb-3 uppercase tracking-wide">{t('upcomingReminders')}</h2>
                <div className="space-y-3">
                  {futureReminders.map(o => <ReminderCard key={o.id} order={o} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Reminders;
