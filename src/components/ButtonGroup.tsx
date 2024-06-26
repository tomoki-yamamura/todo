import Button from "./Button";
import { useItemsStore } from "./stores/itemsStore";

export default function ButtonGroup() {
  const handleMarkAllAsComplete = useItemsStore(state => state.handleMarkAllAsComplete);
  const handleMarkAllAsInComplete = useItemsStore(state => state.handleMarkAllAsInComplete);
  const handleResetToInitial = useItemsStore(state => state.handleResetToInitial);
  const handleRemoveAllItems = useItemsStore(state => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsInComplete
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems
    }
  ]

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick} buttonType="secondary">{text}</Button>
      ))}
    </section>
  )
}
