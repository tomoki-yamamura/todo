import EmptyView from "./EmptyView";

export type TItem = {
  id: number;
  name: string;
  packed: boolean;
}



export default function ItemLinst({ items, handleDeleteItem, handleToggleItem }: {
  items: TItem[]
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  return (
    <ul className="item-list">

      {
        items.length === 0 && <EmptyView />
      }

      {items.map(item => (
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