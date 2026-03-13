export type OrderStatus = 'Received' | 'In Progress' | 'Ready' | 'Delivered';

export interface ChecklistItem {
  id: string;
  label: string;
  done: boolean;
}

export interface Reminder {
  id: string;
  orderId: string;
  date: string; // ISO date string
  message: string;
  sent: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  item: string;
  deliveryDate: string;
  advancePaid: number;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  paymentReceived: boolean;
  customFields?: Record<string, string>;
  checklist?: ChecklistItem[];
  reminderDate?: string;
}

const STORAGE_KEY = 'shop-memory-orders';
const REMINDERS_KEY = 'shop-memory-reminders';

export function getOrders(): Order[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveOrders(orders: Order[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export function addOrder(order: Omit<Order, 'id' | 'createdAt' | 'paymentReceived'>): Order {
  const orders = getOrders();
  const newOrder: Order = {
    ...order,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    paymentReceived: false,
  };
  orders.push(newOrder);
  saveOrders(orders);
  return newOrder;
}

export function updateOrder(id: string, updates: Partial<Order>) {
  const orders = getOrders();
  const idx = orders.findIndex(o => o.id === id);
  if (idx !== -1) {
    orders[idx] = { ...orders[idx], ...updates };
    saveOrders(orders);
  }
}

export function getOrderById(id: string): Order | undefined {
  return getOrders().find(o => o.id === id);
}

export function getTodaysOrders(): Order[] {
  const today = new Date().toISOString().split('T')[0];
  return getOrders().filter(o => o.createdAt.split('T')[0] === today);
}

export function getPendingPayments(): Order[] {
  return getOrders().filter(o => !o.paymentReceived && o.totalAmount - o.advancePaid > 0);
}

export function getOverdueDeliveries(): Order[] {
  const today = new Date().toISOString().split('T')[0];
  return getOrders().filter(o => o.deliveryDate < today && o.status !== 'Delivered');
}

export function getUpcomingReminders(): Order[] {
  const today = new Date().toISOString().split('T')[0];
  return getOrders().filter(o => o.reminderDate && o.reminderDate >= today && o.status !== 'Delivered');
}

export function getOverdueReminders(): Order[] {
  const today = new Date().toISOString().split('T')[0];
  return getOrders().filter(o => o.reminderDate && o.reminderDate < today && o.status !== 'Delivered');
}

export function searchCustomers(query: string): Order[] {
  const q = query.toLowerCase();
  return getOrders().filter(o =>
    o.customerName.toLowerCase().includes(q) || o.phone.includes(q)
  );
}
