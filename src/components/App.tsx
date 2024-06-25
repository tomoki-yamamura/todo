import { useState } from 'react'
import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemLinst, { TItem } from './ItemLinst'
import Sidebar from './Sidebar'
import { initialItems } from '../lib/constants'

export default function App() {
  const [items, setItems] = useState<TItem[]>(initialItems)
  console.log(items);
  

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
        return { ...item, packed: !item.packed}
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
      return { ...item, packed: true}
    })
    setItems(newItems)
  }
  const handleMarkAllAsInComplete = () => {
    const newItems = items.map(item => {
      return { ...item, packed: false}
    })
    setItems(newItems)
  }

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemLinst 
        items = {items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        />
        <Sidebar handleAddItem= {handleAddItem}
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsInComplete={handleMarkAllAsInComplete}
         />
      </main>
      <Footer />
    </>
  )
}