export interface ShopCategory {
  id: string;
  label: string;
  emoji: string;
  itemLabel: string;
  itemPlaceholder: string;
  orderLabel: string;        // "Order", "Job", "Batch", etc.
  orderLabelPlural: string;  // "Orders", "Jobs", "Batches"
  deliveryLabel: string;     // "Delivery", "Pickup", "Session"
  customerLabel: string;     // "Customer", "Student", "Client"
  addButtonText: string;     // "Add New Order", "Add New Job", etc.
  reminderTemplate: (name: string, amount: number, item: string) => string;
}

export const shopCategories: ShopCategory[] = [
  {
    id: 'tailor', label: 'Tailor', emoji: '🧵',
    itemLabel: 'Stitching Work', itemPlaceholder: 'e.g. Blue shirt stitching',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your stitching work "${item}" is ready. Pending amount is ₹${amt}. Please collect at your convenience. Thank you! 🙏`,
  },
  {
    id: 'rice-mill', label: 'Rice Mill', emoji: '🌾',
    itemLabel: 'Grain / Work', itemPlaceholder: 'e.g. 50kg paddy milling',
    orderLabel: 'Batch', orderLabelPlural: 'Batches', deliveryLabel: 'Pickup', customerLabel: 'Customer',
    addButtonText: 'Add New Batch',
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your grain batch "${item}" is processed. Pending payment is ₹${amt}. Please visit the mill to collect. Thank you! 🌾`,
  },
  {
    id: 'potter', label: 'Potter', emoji: '🏺',
    itemLabel: 'Item / Vessel', itemPlaceholder: 'e.g. 10 clay pots',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your pottery order "${item}" is ready. Pending amount is ₹${amt}. Please visit us to collect. Thank you! 🏺`,
  },
  {
    id: 'shopkeeper', label: 'General Store', emoji: '🏪',
    itemLabel: 'Item Sold', itemPlaceholder: 'e.g. 5kg sugar, 2L oil',
    orderLabel: 'Sale', orderLabelPlural: 'Sales', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Sale',
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, you have a pending amount of ₹${amt} for "${item}" at our store. Please clear it at your convenience. Thank you! 🙏`,
  },
  {
    id: 'repair', label: 'Repair Shop', emoji: '🔧',
    itemLabel: 'Repair Work', itemPlaceholder: 'e.g. TV repair, fan motor',
    orderLabel: 'Job', orderLabelPlural: 'Jobs', deliveryLabel: 'Pickup', customerLabel: 'Customer',
    addButtonText: 'Add New Job',
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, your repair work "${item}" is done. Pending amount is ₹${amt}. Please pick up at your convenience. Thank you! 🔧`,
  },
  {
    id: 'tutor', label: 'Tutor / Coaching', emoji: '📚',
    itemLabel: 'Subject / Course', itemPlaceholder: 'e.g. Maths tuition - Class 10',
    orderLabel: 'Enrollment', orderLabelPlural: 'Enrollments', deliveryLabel: 'Session', customerLabel: 'Student',
    addButtonText: 'Add New Student',
    reminderTemplate: (name, amt, item) =>
      `Hello ${name}, this is a reminder about your pending tuition fee of ₹${amt} for "${item}". Please pay at your earliest convenience. Thank you! 📚`,
  },
  {
    id: 'hardware', label: 'Hardware Store', emoji: '🔩',
    itemLabel: 'Material / Item', itemPlaceholder: 'e.g. Cement 10 bags, paint',
    orderLabel: 'Sale', orderLabelPlural: 'Sales', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Sale',
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, you have a pending balance of ₹${amt} for "${item}" from our hardware store. Please clear it when possible. Thank you! 🙏`,
  },
  {
    id: 'other', label: 'Other', emoji: '🏢',
    itemLabel: 'Item / Work', itemPlaceholder: 'e.g. Describe the order',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    reminderTemplate: (name, amt, item) =>
      `Hello ${name}, this is a friendly reminder about your pending payment of ₹${amt} for "${item}". Please visit us at your convenience. Thank you!`,
  },
];

const CATEGORY_KEY = 'shop-memory-category';

export function getSelectedCategory(): ShopCategory | null {
  const id = localStorage.getItem(CATEGORY_KEY);
  if (!id) return null;
  return shopCategories.find(c => c.id === id) || null;
}

export function setSelectedCategory(id: string) {
  localStorage.setItem(CATEGORY_KEY, id);
}

export function clearSelectedCategory() {
  localStorage.removeItem(CATEGORY_KEY);
}
