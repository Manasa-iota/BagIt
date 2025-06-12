import { create } from "zustand";
import { items as initialItems } from "../lib/constants";


export const useItemsStore = create((set) => ({
  items: localStorage.getItem("items") || initialItems,
  handleAddItem: (newItemText) => {
    const newItem = {
      name: newItemText,
      packed: false,
      id: Date.now(),
    };
    set((state) => ({
      items: [...state.items, newItem],
    }));
  },
  removeAllItems: () => set({ items: [] }),
  resetToIntial: () => set({ items: initialItems }),
  markAllAsIncomplete: () =>
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: false })),
    })),
  markAllAsComplete: () =>
    set((state) => ({
      items: state.items.map((item) => ({ ...item, packed: true })),
    })),
  toggleCheck: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ),
    }));
},
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));


export const handleClicks = {
  "Mark All as complete": () => useItemsStore.getState().markAllAsComplete(),
  "Mark All as incomplete": () => useItemsStore.getState().markAllAsIncomplete(),
  "Reset to Initial": () => useItemsStore.getState().resetToIntial(),
  "Remove all items": () => useItemsStore.getState().removeAllItems(),
};
