import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrder, OrderStatus } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import PageHeader from '@/components/PageHeader';
import { toast } from 'sonner';

const statuses: OrderStatus[] = ['Received', 'In Progress', 'Ready', 'Delivered'];

const AddOrder = () => {
  const navigate = useNavigate();
  const category = getSelectedCategory();
  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    item: '',
    deliveryDate: '',
    advancePaid: '',
    totalAmount: '',
    status: 'Received' as OrderStatus,
  });

  const set = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName || !form.item || !form.deliveryDate) {
      toast.error('Please fill customer name, item, and delivery date');
      return;
    }
    addOrder({
      customerName: form.customerName,
      phone: form.phone,
      item: form.item,
      deliveryDate: form.deliveryDate,
      advancePaid: Number(form.advancePaid) || 0,
      totalAmount: Number(form.totalAmount) || 0,
      status: form.status,
    });
    toast.success(`${category?.orderLabel || 'Order'} added!`);
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title={category?.addButtonText || 'Add New Order'} showBack />
      <form onSubmit={handleSubmit} className="px-5 space-y-4">
        <Field label={`${category?.customerLabel || 'Customer'} Name`} value={form.customerName} onChange={v => set('customerName', v)} placeholder="e.g. Ramesh Kumar" autoFocus />
        <Field label="Phone Number" value={form.phone} onChange={v => set('phone', v)} placeholder="e.g. 9876543210" type="tel" />
        <Field label={category?.itemLabel || 'Item / Work'} value={form.item} onChange={v => set('item', v)} placeholder={category?.itemPlaceholder || 'e.g. Blue shirt stitching'} />
        <Field label={`${category?.deliveryLabel || 'Delivery'} Date`} value={form.deliveryDate} onChange={v => set('deliveryDate', v)} type="date" />
        <div className="grid grid-cols-2 gap-3">
          <Field label="Total Amount (₹)" value={form.totalAmount} onChange={v => set('totalAmount', v)} type="number" placeholder="0" />
          <Field label="Advance Paid (₹)" value={form.advancePaid} onChange={v => set('advancePaid', v)} type="number" placeholder="0" />
        </div>

        <div>
          <label className="block text-shop-sm font-bold text-foreground mb-2">Status</label>
          <div className="grid grid-cols-2 gap-2">
            {statuses.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => set('status', s)}
                className={`py-3 px-4 rounded-xl text-shop-sm font-semibold border-2 transition-colors ${
                  form.status === s
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground rounded-2xl p-5 text-shop-lg font-bold mt-4 hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          Save Order
        </button>
      </form>
    </div>
  );
};

function Field({ label, value, onChange, type = 'text', placeholder, autoFocus }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; autoFocus?: boolean;
}) {
  return (
    <div>
      <label className="block text-shop-sm font-bold text-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full bg-card border-2 border-border rounded-xl px-4 py-3.5 text-shop-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

export default AddOrder;
