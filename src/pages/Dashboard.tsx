import { useNavigate } from 'react-router-dom';
import { Plus, ShoppingBag, CreditCard, AlertTriangle } from 'lucide-react';
import { getTodaysOrders, getPendingPayments, getOverdueDeliveries } from '@/lib/store';
import PageHeader from '@/components/PageHeader';
import { useMemo } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const todayCount = useMemo(() => getTodaysOrders().length, []);
  const pendingCount = useMemo(() => getPendingPayments().length, []);
  const overdueCount = useMemo(() => getOverdueDeliveries().length, []);

  const cards = [
    {
      label: "Today's Orders",
      count: todayCount,
      icon: ShoppingBag,
      color: 'bg-primary/10 text-primary',
      onClick: () => {},
    },
    {
      label: 'Pending Payments',
      count: pendingCount,
      icon: CreditCard,
      color: 'bg-accent/15 text-accent',
      onClick: () => navigate('/payments'),
    },
    {
      label: 'Overdue Deliveries',
      count: overdueCount,
      icon: AlertTriangle,
      color: 'bg-destructive/10 text-destructive',
      onClick: () => {},
    },
  ];

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title="Shop Memory" />

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
          Add New Order
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
