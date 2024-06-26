import { create } from "zustand";
import { initialItems } from "../../lib/constants";
import { TItem } from "../ItemLinst";

interface ItemState {
  items: TItem[];
  removeAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsInComplete: () => void;
  handleToggleItem: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  handleAddItem: (itemText: string) => void;
}

export const useItemsStore = create<ItemState>((set) => ({
  items: initialItems,
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  handleResetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
  handleMarkAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });
      return { items: newItems };
    });
  },
  handleMarkAllAsInComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });
      return { items: newItems };
    });
  },
  handleToggleItem: (id: number) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return { items: newItems };
    });
  },
  handleDeleteItem: (id: number) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  },
  handleAddItem: (itemText: string) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
}));
