import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "./stores/itemsStore";

export default function Sidebar() {
  const handleAddItem = useItemsStore(state => state.handleAddItem)

  console.log("sidebar rendering...");
  
  
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>
      <ButtonGroup />
    </div>
  )
}
