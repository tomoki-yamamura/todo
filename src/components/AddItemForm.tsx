import { useRef, useState } from "react";
import Button from "./Button";
import { TItem } from "./ItemLinst";

export default function AddItemForm({ handleAddItem }: {
  handleAddItem: (itemText: string) => void;
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

      handleAddItem(itemText)
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
