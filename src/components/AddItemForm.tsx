import { useState } from "react";
import Button from "./Button";
import { TItem } from "./ItemLinst";

export default function AddItemForm({setItems}: {
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>;
}) {
  const [itemText, setItemText] = useState("")
   
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const newItem = {
        id: 4,
        name: itemText,
        packed: false
      }

      setItems(prev => [...prev, newItem])
    }}>
      <h2>Add an item</h2>
      <input value={itemText} onChange={(e) => setItemText(e.target.value)}/>
      <Button type="">Add to list</Button>
    </form>
  )
}
