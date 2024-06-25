import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

export type TItem = {
  id: number;
  name: string;
  packed: boolean;
}

const sortingOptions = [
  {
    label: "sort by default",
    value: "default"
  },
  {
    label: "sort by packed",
    value: "packed"
  },
  {
    label: "sort by unpacked",
    value: "unpacked"
  }
]


export default function ItemLinst({ items, handleDeleteItem, handleToggleItem }: {
  items: TItem[]
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  const [sortBy, setSortBy] = useState("default")

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "packed") {
      return (b.packed ? 1 : 0) - (a.packed ? 1 : 0)
    }
    if (sortBy == "unpacked") {
      return (a.packed ? 1 : 0) - (b.packed ? 1 : 0)
    }
    return 0
  })
  

  return (
    <ul className="item-list">

      {
        items.length === 0 && <EmptyView />
      }

      {
        items.length > 0 ? <section className="sorting">
          <Select onChange={option => setSortBy(option!.value)} defaultValue={sortingOptions[0]} options={sortingOptions} />
        </section> : null
      }

      {sortedItems.map(item => (
        <Item onToggleItem={handleToggleItem} onDeleteItem={handleDeleteItem} key={item.id} item={item} />
      ))}
    </ul>
  )
}

function Item({ item, onDeleteItem, onToggleItem }: {
  item: TItem
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input onChange={() => onToggleItem(item.id)} type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}