import { Home, CreditCard, Users, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/add-order', icon: Plus, label: 'New Order' },
  { path: '/payments', icon: CreditCard, label: 'Payments' },
  { path: '/customers', icon: Users, label: 'Customers' },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="max-w-lg mx-auto flex justify-around py-2">
        {tabs.map(({ path, icon: Icon, label }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors min-w-[72px] ${
                active
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon size={26} strokeWidth={active ? 2.5 : 2} />
              <span className="text-xs font-semibold">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
