import { useNavigate } from 'react-router-dom';
import { Plus, ShoppingBag, CreditCard, AlertTriangle, Settings, Globe, Bell } from 'lucide-react';
import { getTodaysOrders, getPendingPayments, getOverdueDeliveries, getUpcomingReminders, getOverdueReminders } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import { t, tCat } from '@/lib/i18n';
import { useMemo } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const cat = getSelectedCategory();
  const catId = cat?.id;
  const todayCount = useMemo(() => getTodaysOrders().length, []);
  const pendingCount = useMemo(() => getPendingPayments().length, []);
  const overdueCount = useMemo(() => getOverdueDeliveries().length, []);
  const reminderCount = useMemo(() => getUpcomingReminders().length + getOverdueReminders().length, []);

  const cards = [
    {
      label: tCat('todaysOrders', catId),
      count: todayCount,
      icon: ShoppingBag,
      color: 'bg-primary/10 text-primary',
      onClick: () => {},
    },
    {
      label: t('pendingPayments'),
      count: pendingCount,
      icon: CreditCard,
      color: 'bg-accent/15 text-accent',
      onClick: () => navigate('/payments'),
    },
    {
      label: tCat('overdueDelivery', catId),
      count: overdueCount,
      icon: AlertTriangle,
      color: 'bg-destructive/10 text-destructive',
      onClick: () => {},
    },
    {
      label: t('reminders'),
      count: reminderCount,
      icon: Bell,
      color: 'bg-warning/10 text-warning',
      onClick: () => navigate('/reminders'),
    },
  ];

  return (
    <div className="max-w-lg mx-auto pb-28">
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <div>
          <h1 className="text-shop-xl font-extrabold text-foreground">{t('shopMemory')}</h1>
          {cat && (
            <p className="text-shop-sm text-muted-foreground font-semibold">{cat.emoji} {t(`cat.${cat.id}`)}</p>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => navigate('/language')}
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground"
            title={t('language')}
          >
            <Globe size={22} />
          </button>
          <button
            onClick={() => navigate('/select-shop')}
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground"
            title={t('changeShopType')}
          >
            <Settings size={22} />
          </button>
        </div>
      </div>

      <div className="px-5 space-y-4">
        {cards.map(({ label, count, icon: Icon, color, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className="w-full bg-card rounded-2xl p-6 shadow-sm border border-border flex items-center gap-5 text-left hover:shadow-md transition-shadow"
          >
            <div className={`p-4 rounded-2xl ${color}`}>
              <Icon size={30} />
            </div>
            <div>
              <p className="text-shop-2xl font-extrabold text-foreground">{count}</p>
              <p className="text-shop-base text-muted-foreground font-semibold">{label}</p>
            </div>
          </button>
        ))}

        <button
          onClick={() => navigate('/add-order')}
          className="w-full bg-primary text-primary-foreground rounded-2xl p-5 shadow-md flex items-center justify-center gap-3 text-shop-lg font-bold mt-6 hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          <Plus size={28} />
          {tCat('addNewOrder', catId)}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
