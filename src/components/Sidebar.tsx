import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleAddItem, handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsInComplete}: {
  handleAddItem: (itemText: string) => void;
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsInComplete: () => void;
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>
      <ButtonGroup handleRemoveAllItems={handleRemoveAllItems} handleResetToInitial={handleResetToInitial} handleMarkAllAsComplete={handleMarkAllAsComplete} handleMarkAllAsInComplete={handleMarkAllAsInComplete} />
    </div>
  )
}
