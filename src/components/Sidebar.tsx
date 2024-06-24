import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { TItem } from "./ItemLinst";

export default function Sidebar({setItems}: {
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>;
}) {
  return (
    <div className="sidebar">
      <AddItemForm setItems={setItems}/>
      <ButtonGroup />
    </div>
  )
}
