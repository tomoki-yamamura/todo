import { useRef, useState } from "react";
import Button from "./Button";
import { TItem } from "./ItemLinst";

export default function AddItemForm({ setItems }: {
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>;
}) {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!itemText) {
        alert("Item can not be empty");
        inputRef.current?.focus();
        return;
      }
      const newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false
      }

      setItems(prev => [...prev, newItem])
      setItemText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        ref={inputRef}
        onChange={(e) => {
          setItemText(e.target.value)
        }}
        autoFocus={true}
      />

      <Button type="">Add to list</Button>
    </form>
  )
}
