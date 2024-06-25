import { ReactNode, createContext, useEffect, useState } from "react"
import { TItem } from "../components/ItemLinst"
import { initialItems } from "../lib/constants"

export interface ItemsContextType {
  items: TItem[];
  handleAddItem: (itemText: string) => void;
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsInComplete: () => void;
}

export const ItemsContext = createContext<ItemsContextType>({
  items: [],
  handleAddItem: () => {},
  handleDeleteItem: () => {},
  handleToggleItem: () => {},
  handleRemoveAllItems: () => {},
  handleResetToInitial: () => {},
  handleMarkAllAsComplete: () => {},
  handleMarkAllAsInComplete: () => {}
});

export default function ItemsContextProvider({children}: {
  children: ReactNode
}) {
  const [items, setItems] = useState<TItem[]>(
    () => JSON.parse(localStorage.getItem("items")!) || initialItems
  )

  const handleAddItem = (itemText: string) => {
    const newItem: TItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false
    }
    setItems(prev => [...prev, newItem])
  }

  const handleDeleteItem = (id: number) => {
    const newItems = items.filter(item => id !== item.id)
    setItems(newItems)
  }

  const handleToggleItem = (id: number) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }
  const handleResetToInitial = () => {
    setItems(initialItems);
  }
  const handleMarkAllAsComplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: true }
    })
    setItems(newItems)
  }
  const handleMarkAllAsInComplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: false }
    })
    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])


  return (
    <ItemsContext.Provider 
    value={{
      items,
      handleAddItem,
      handleDeleteItem,
      handleToggleItem,
      handleRemoveAllItems,
      handleResetToInitial,
      handleMarkAllAsComplete,
      handleMarkAllAsInComplete
    }}
    >
      {children}
    </ItemsContext.Provider>
  )
}
