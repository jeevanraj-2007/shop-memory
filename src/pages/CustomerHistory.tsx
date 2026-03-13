import { useState, useMemo } from 'react';
import { searchCustomers, Order } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import PageHeader from '@/components/PageHeader';
import { Search } from 'lucide-react';

const CustomerHistory = () => {
  const cat = getSelectedCategory();
  const [query, setQuery] = useState('');
  const results = useMemo(() => (query.length >= 2 ? searchCustomers(query) : []), [query]);

  // Group by customer name
  const grouped = useMemo(() => {
    const map: Record<string, { orders: Order[]; total: number }> = {};
    results.forEach(o => {
      const key = o.customerName.toLowerCase();
      if (!map[key]) map[key] = { orders: [], total: 0 };
      map[key].orders.push(o);
      map[key].total += o.totalAmount;
    });
    return Object.values(map);
  }, [results]);

  const statusColor = (s: string) => {
    switch (s) {
      case 'Delivered': return 'bg-success/15 text-success';
      case 'Ready': return 'bg-primary/15 text-primary';
      case 'In Progress': return 'bg-accent/15 text-accent';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title="Customers" />

      <div className="px-5">
        <div className="relative mb-5">
          <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name or phone..."
            className="w-full bg-card border-2 border-border rounded-xl pl-12 pr-4 py-4 text-shop-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {query.length < 2 ? (
          <p className="text-center text-muted-foreground text-shop-base py-12">
            Type a name or phone number to search
          </p>
        ) : grouped.length === 0 ? (
          <p className="text-center text-muted-foreground text-shop-base py-12">No customers found</p>
        ) : (
          <div className="space-y-5">
            {grouped.map((group, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="p-5 border-b border-border flex justify-between items-center">
                  <div>
                    <p className="text-shop-lg font-bold text-foreground">{group.orders[0].customerName}</p>
                    <p className="text-shop-sm text-muted-foreground">{group.orders[0].phone}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-shop-sm text-muted-foreground">Total Business</p>
                    <p className="text-shop-lg font-extrabold text-foreground">₹{group.total}</p>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {group.orders.map(o => (
                    <div key={o.id} className="px-5 py-3 flex justify-between items-center">
                      <div>
                        <p className="text-shop-sm font-semibold text-foreground">{o.item}</p>
                        <p className="text-xs text-muted-foreground">{new Date(o.createdAt).toLocaleDateString()}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(o.status)}`}>
                        {o.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerHistory;
