import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addOrder, OrderStatus, ChecklistItem } from '@/lib/store';
import { getSelectedCategory } from '@/lib/shopCategories';
import { t, tCat } from '@/lib/i18n';
import PageHeader from '@/components/PageHeader';
import { toast } from 'sonner';

const statusKeys: { status: OrderStatus; key: string }[] = [
  { status: 'Received', key: 'received' },
  { status: 'In Progress', key: 'inProgress' },
  { status: 'Ready', key: 'ready' },
  { status: 'Delivered', key: 'delivered' },
];

const AddOrder = () => {
  const navigate = useNavigate();
  const category = getSelectedCategory();
  const catId = category?.id;
  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    item: '',
    deliveryDate: '',
    advancePaid: '',
    totalAmount: '',
    status: 'Received' as OrderStatus,
    reminderDate: '',
  });
  const [customFields, setCustomFields] = useState<Record<string, string>>({});

  const set = (key: string, value: string) => setForm(f => ({ ...f, [key]: value }));
  const setCF = (key: string, value: string) => setCustomFields(f => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.customerName || !form.item || !form.deliveryDate) {
      toast.error(t('fillRequired'));
      return;
    }

    // Build default checklist from category
    const checklist: ChecklistItem[] = (category?.defaultChecklist || []).map(key => ({
      id: crypto.randomUUID(),
      label: key,
      done: false,
    }));

    addOrder({
      customerName: form.customerName,
      phone: form.phone,
      item: form.item,
      deliveryDate: form.deliveryDate,
      advancePaid: Number(form.advancePaid) || 0,
      totalAmount: Number(form.totalAmount) || 0,
      status: form.status,
      customFields: Object.keys(customFields).length > 0 ? customFields : undefined,
      checklist: checklist.length > 0 ? checklist : undefined,
      reminderDate: form.reminderDate || undefined,
    });
    toast.success(tCat('orderAdded', catId));
    navigate('/');
  };

  return (
    <div className="max-w-lg mx-auto pb-28">
      <PageHeader title={tCat('addNewOrder', catId)} showBack />
      <form onSubmit={handleSubmit} className="px-5 space-y-4">
        <Field label={tCat('customerName', catId)} value={form.customerName} onChange={v => set('customerName', v)} placeholder="e.g. Ramesh Kumar" autoFocus />
        <Field label={t('phoneNumber')} value={form.phone} onChange={v => set('phone', v)} placeholder="e.g. 9876543210" type="tel" />
        <Field label={catId ? t(`item.${catId}`) : t('item.other')} value={form.item} onChange={v => set('item', v)} placeholder={category?.itemPlaceholder || 'e.g. Blue shirt stitching'} />

        {/* Category-specific custom fields */}
        {category?.customFields.map(cf => (
          <Field
            key={cf.key}
            label={t(cf.labelKey)}
            value={customFields[cf.key] || ''}
            onChange={v => setCF(cf.key, v)}
            placeholder={cf.placeholder}
            type={cf.type === 'number' ? 'number' : 'text'}
          />
        ))}

        <Field label={tCat('deliveryDate', catId)} value={form.deliveryDate} onChange={v => set('deliveryDate', v)} type="date" />
        <Field label={t('reminderDate')} value={form.reminderDate} onChange={v => set('reminderDate', v)} type="date" />

        <div className="grid grid-cols-2 gap-3">
          <Field label={t('totalAmount')} value={form.totalAmount} onChange={v => set('totalAmount', v)} type="number" placeholder="0" />
          <Field label={t('advancePaid')} value={form.advancePaid} onChange={v => set('advancePaid', v)} type="number" placeholder="0" />
        </div>

        <div>
          <label className="block text-shop-sm font-bold text-foreground mb-2">{t('status')}</label>
          <div className="grid grid-cols-2 gap-2">
            {statusKeys.map(({ status, key }) => (
              <button
                key={status}
                type="button"
                onClick={() => set('status', status)}
                className={`py-3 px-4 rounded-xl text-shop-sm font-semibold border-2 transition-colors ${
                  form.status === status
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-card text-muted-foreground'
                }`}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground rounded-2xl p-5 text-shop-lg font-bold mt-4 hover:opacity-90 transition-opacity active:scale-[0.98]"
        >
          {tCat('saveOrder', catId)}
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
