export interface ShopCategory {
  id: string;
  label: string;
  emoji: string;
  itemLabel: string;       // What they call their "item" (e.g., "Order", "Vessel", "Bag")
  itemPlaceholder: string; // Placeholder for item field
}

export const shopCategories: ShopCategory[] = [
  { id: 'tailor', label: 'Tailor', emoji: '🧵', itemLabel: 'Stitching Work', itemPlaceholder: 'e.g. Blue shirt stitching' },
  { id: 'rice-mill', label: 'Rice Mill', emoji: '🌾', itemLabel: 'Grain / Work', itemPlaceholder: 'e.g. 50kg paddy milling' },
  { id: 'potter', label: 'Potter', emoji: '🏺', itemLabel: 'Item / Vessel', itemPlaceholder: 'e.g. 10 clay pots' },
  { id: 'shopkeeper', label: 'General Store', emoji: '🏪', itemLabel: 'Item Sold', itemPlaceholder: 'e.g. 5kg sugar, 2L oil' },
  { id: 'repair', label: 'Repair Shop', emoji: '🔧', itemLabel: 'Repair Work', itemPlaceholder: 'e.g. TV repair, fan motor' },
  { id: 'tutor', label: 'Tutor / Coaching', emoji: '📚', itemLabel: 'Subject / Course', itemPlaceholder: 'e.g. Maths tuition - Class 10' },
  { id: 'hardware', label: 'Hardware Store', emoji: '🔩', itemLabel: 'Material / Item', itemPlaceholder: 'e.g. Cement 10 bags, paint' },
  { id: 'other', label: 'Other', emoji: '🏢', itemLabel: 'Item / Work', itemPlaceholder: 'e.g. Describe the order' },
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
