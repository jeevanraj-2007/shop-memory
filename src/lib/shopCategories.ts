import { ChecklistItem } from './store';

export interface CustomField {
  key: string;
  labelKey: string; // i18n key
  placeholder: string;
  type?: 'text' | 'number' | 'select';
  options?: string[]; // for select type
}

export interface ShopCategory {
  id: string;
  label: string;
  emoji: string;
  itemLabel: string;
  itemPlaceholder: string;
  orderLabel: string;
  orderLabelPlural: string;
  deliveryLabel: string;
  customerLabel: string;
  addButtonText: string;
  customFields: CustomField[];
  defaultChecklist: string[]; // default checklist item labels
  reminderTemplate: (name: string, amount: number, item: string) => string;
}

export const shopCategories: ShopCategory[] = [
  {
    id: 'tailor', label: 'Tailor', emoji: '🧵',
    itemLabel: 'Stitching Work', itemPlaceholder: 'e.g. Blue shirt stitching',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    customFields: [
      { key: 'measurements', labelKey: 'cf.measurements', placeholder: 'e.g. Chest 40, Length 28' },
      { key: 'fabricType', labelKey: 'cf.fabricType', placeholder: 'e.g. Cotton, Silk' },
      { key: 'designNotes', labelKey: 'cf.designNotes', placeholder: 'e.g. Collar style, pocket type' },
    ],
    defaultChecklist: ['cl.cutFabric', 'cl.stitch', 'cl.buttons', 'cl.iron', 'cl.qualityCheck'],
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your stitching work "${item}" is ready. Pending amount is ₹${amt}. Please collect at your convenience. Thank you! 🙏`,
  },
  {
    id: 'rice-mill', label: 'Rice Mill', emoji: '🌾',
    itemLabel: 'Grain / Work', itemPlaceholder: 'e.g. 50kg paddy milling',
    orderLabel: 'Batch', orderLabelPlural: 'Batches', deliveryLabel: 'Pickup', customerLabel: 'Customer',
    addButtonText: 'Add New Batch',
    customFields: [
      { key: 'grainType', labelKey: 'cf.grainType', placeholder: 'e.g. Paddy, Wheat, Dal' },
      { key: 'quantity', labelKey: 'cf.quantity', placeholder: 'e.g. 100 kg' },
      { key: 'millingType', labelKey: 'cf.millingType', placeholder: 'e.g. Single polish, Double polish' },
    ],
    defaultChecklist: ['cl.grainReceived', 'cl.cleaning', 'cl.milling', 'cl.packing', 'cl.readyPickup'],
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your grain batch "${item}" is processed. Pending payment is ₹${amt}. Please visit the mill to collect. Thank you! 🌾`,
  },
  {
    id: 'potter', label: 'Potter', emoji: '🏺',
    itemLabel: 'Item / Vessel', itemPlaceholder: 'e.g. 10 clay pots',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    customFields: [
      { key: 'clayType', labelKey: 'cf.clayType', placeholder: 'e.g. Red clay, White clay' },
      { key: 'quantity', labelKey: 'cf.quantity', placeholder: 'e.g. 10 pieces' },
      { key: 'size', labelKey: 'cf.size', placeholder: 'e.g. Small, Medium, Large' },
    ],
    defaultChecklist: ['cl.shaping', 'cl.drying', 'cl.firing', 'cl.painting', 'cl.readyDelivery'],
    reminderTemplate: (name, amt, item) =>
      `Namaste ${name} ji, your pottery order "${item}" is ready. Pending amount is ₹${amt}. Please visit us to collect. Thank you! 🏺`,
  },
  {
    id: 'shopkeeper', label: 'General Store', emoji: '🏪',
    itemLabel: 'Item Sold', itemPlaceholder: 'e.g. 5kg sugar, 2L oil',
    orderLabel: 'Sale', orderLabelPlural: 'Sales', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Sale',
    customFields: [
      { key: 'quantity', labelKey: 'cf.quantity', placeholder: 'e.g. 5 kg, 2 pieces' },
      { key: 'brand', labelKey: 'cf.brand', placeholder: 'e.g. Tata, Amul' },
    ],
    defaultChecklist: ['cl.itemPicked', 'cl.packed', 'cl.delivered'],
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, you have a pending amount of ₹${amt} for "${item}" at our store. Please clear it at your convenience. Thank you! 🙏`,
  },
  {
    id: 'repair', label: 'Repair Shop', emoji: '🔧',
    itemLabel: 'Repair Work', itemPlaceholder: 'e.g. TV repair, fan motor',
    orderLabel: 'Job', orderLabelPlural: 'Jobs', deliveryLabel: 'Pickup', customerLabel: 'Customer',
    addButtonText: 'Add New Job',
    customFields: [
      { key: 'deviceType', labelKey: 'cf.deviceType', placeholder: 'e.g. TV, Fan, Mobile' },
      { key: 'problemDesc', labelKey: 'cf.problemDesc', placeholder: 'e.g. Not turning on, broken screen' },
      { key: 'serialNumber', labelKey: 'cf.serialNumber', placeholder: 'e.g. SN123456' },
    ],
    defaultChecklist: ['cl.diagnosed', 'cl.partsOrdered', 'cl.repairDone', 'cl.testing', 'cl.readyPickup'],
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, your repair work "${item}" is done. Pending amount is ₹${amt}. Please pick up at your convenience. Thank you! 🔧`,
  },
  {
    id: 'tutor', label: 'Tutor / Coaching', emoji: '📚',
    itemLabel: 'Subject / Course', itemPlaceholder: 'e.g. Maths tuition - Class 10',
    orderLabel: 'Enrollment', orderLabelPlural: 'Enrollments', deliveryLabel: 'Session', customerLabel: 'Student',
    addButtonText: 'Add New Student',
    customFields: [
      { key: 'classGrade', labelKey: 'cf.classGrade', placeholder: 'e.g. Class 10, 12th' },
      { key: 'batchTime', labelKey: 'cf.batchTime', placeholder: 'e.g. 4 PM - 5 PM' },
      { key: 'parentName', labelKey: 'cf.parentName', placeholder: "e.g. Parent's name" },
    ],
    defaultChecklist: ['cl.enrolled', 'cl.booksGiven', 'cl.firstSession', 'cl.feeCollected'],
    reminderTemplate: (name, amt, item) =>
      `Hello ${name}, this is a reminder about your pending tuition fee of ₹${amt} for "${item}". Please pay at your earliest convenience. Thank you! 📚`,
  },
  {
    id: 'hardware', label: 'Hardware Store', emoji: '🔩',
    itemLabel: 'Material / Item', itemPlaceholder: 'e.g. Cement 10 bags, paint',
    orderLabel: 'Sale', orderLabelPlural: 'Sales', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Sale',
    customFields: [
      { key: 'quantity', labelKey: 'cf.quantity', placeholder: 'e.g. 10 bags, 5 pieces' },
      { key: 'brand', labelKey: 'cf.brand', placeholder: 'e.g. UltraTech, Asian Paints' },
      { key: 'deliveryAddress', labelKey: 'cf.deliveryAddress', placeholder: 'e.g. Site address' },
    ],
    defaultChecklist: ['cl.itemPicked', 'cl.loaded', 'cl.dispatched', 'cl.delivered'],
    reminderTemplate: (name, amt, item) =>
      `Hello ${name} ji, you have a pending balance of ₹${amt} for "${item}" from our hardware store. Please clear it when possible. Thank you! 🙏`,
  },
  {
    id: 'other', label: 'Other', emoji: '🏢',
    itemLabel: 'Item / Work', itemPlaceholder: 'e.g. Describe the order',
    orderLabel: 'Order', orderLabelPlural: 'Orders', deliveryLabel: 'Delivery', customerLabel: 'Customer',
    addButtonText: 'Add New Order',
    customFields: [
      { key: 'notes', labelKey: 'cf.notes', placeholder: 'e.g. Additional details' },
    ],
    defaultChecklist: ['cl.received', 'cl.inProgress', 'cl.completed', 'cl.delivered'],
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
