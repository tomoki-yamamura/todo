import { useState } from "react";
import { initialItems } from "../lib/constants";

export type TItem = {
  id: number;
  name: string;
  packed: boolean;
}



export default function ItemLinst({items}: {
  items: TItem[]
}) {
  
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}

function Item({ item }: {
  item: TItem
}) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  )
}