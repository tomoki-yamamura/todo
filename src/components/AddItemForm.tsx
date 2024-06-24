import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }: {
  onAddItem: (itemText: string) => void;
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

      onAddItem(itemText)
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

      <Button onClick={() => {}} buttonType="">Add to list</Button>
    </form>
  )
}
