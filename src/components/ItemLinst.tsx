
export type TItem = {
  id: number;
  name: string;
  packed: boolean;
}



export default function ItemLinst({items, handleDeleteItem, handleToggleItem}: {
  items: TItem[]
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  
  return (
    <ul>
      {items.map(item => (
        <Item handleToggleItem={handleToggleItem} handleDeleteItem={handleDeleteItem} key={item.id} item={item} />
      ))}
    </ul>
  )
}

function Item({ item, handleDeleteItem, handleToggleItem }: {
  item: TItem
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input onChange={() => handleToggleItem(item.id)} type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  )
}