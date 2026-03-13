import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrderById, updateOrder } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import { t } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { Check, Square, CheckSquare } from 'lucide-react';

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const order = id ? getOrderById(id) : undefined;
  const category = getSelectedCategory();

  if (!order) {
    return (
      <div className="max-w-lg mx-auto pb-28">
        <PageHeader title={t('orderDetails')} showBack />
        <p className="text-center text-muted-foreground py-16">Order not found</p>
      </div>
    );
  }

  const toggleChecklist = (checkId: string) => {
    if (!order.checklist) return;
    const updated = order.checklist.map(item =>
      item.id === checkId ? { ...item, done: !item.done } : item
    );
    updateOrder(order.id, { checklist: updated });
    setRefresh(r => r + 1);
  };

  const completedCount = order.checklist?.filter(i => i.done).length || 0;
  const totalCount = order.checklist?.length || 0;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const statusColor: Record<string, string> = {
    'Received': 'bg-muted text-muted-foreground',
    'In Progress': 'bg-accent/15 text-accent',
    'Ready': 'bg-primary/15 text-primary',
    'Delivered': 'bg-success/15 text-success',
  };

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title={t('orderDetails')} showBack />

      <div className="px-5 space-y-5">
        {/* Customer info */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-shop-xl font-extrabold text-foreground">{order.customerName}</p>
              {order.phone && <p className="text-shop-sm text-muted-foreground">{order.phone}</p>}
            </div>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${statusColor[order.status]}`}>
              {t(order.status === 'In Progress' ? 'inProgress' : order.status.toLowerCase())}
            </span>
          </div>
          <p className="text-shop-base font-semibold text-foreground mb-1">{order.item}</p>
          <div className="flex justify-between text-shop-sm text-muted-foreground">
            <span>₹{order.totalAmount - order.advancePaid} due</span>
            <span>{new Date(order.deliveryDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Custom fields */}
        {order.customFields && Object.keys(order.customFields).length > 0 && (
          <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
            <h3 className="text-shop-sm font-bold text-foreground mb-3 uppercase tracking-wide">{t('orderDetails')}</h3>
            <div className="space-y-2">
              {Object.entries(order.customFields).map(([key, value]) => {
                const cf = category?.customFields.find(f => f.key === key);
                return (
                  <div key={key} className="flex justify-between">
                    <span className="text-shop-sm text-muted-foreground">{cf ? t(cf.labelKey) : key}</span>
                    <span className="text-shop-sm font-semibold text-foreground">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Checklist */}
        {order.checklist && order.checklist.length > 0 && (
          <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-shop-sm font-bold text-foreground uppercase tracking-wide">{t('checklist')}</h3>
              <span className="text-shop-sm font-semibold text-muted-foreground">{completedCount}/{totalCount}</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-muted rounded-full h-2.5 mb-4">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="space-y-1">
              {order.checklist.map(item => (
                <button
                  key={item.id}
                  onClick={() => toggleChecklist(item.id)}
                  className="w-full flex items-center gap-3 py-3 px-3 rounded-xl hover:bg-secondary/50 transition-colors text-left"
                >
                  {item.done ? (
                    <CheckSquare size={24} className="text-primary shrink-0" />
                  ) : (
                    <Square size={24} className="text-muted-foreground/50 shrink-0" />
                  )}
                  <span className={`text-shop-base font-semibold ${item.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {t(item.label)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
