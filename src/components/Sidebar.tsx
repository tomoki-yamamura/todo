import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { TItem } from "./ItemLinst";

export default function Sidebar({handleAddItem}: {
  handleAddItem: (itemText: string) => void;
}) {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem}/>
      <ButtonGroup />
    </div>
  )
}
