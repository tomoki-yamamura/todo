import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsInComplete }: {
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsInComplete: () => void;
}) {


  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary" >Mark all as complete</Button>
      <Button onClick={handleMarkAllAsInComplete} buttonType="secondary" >Mark all as incomplete</Button>
      <Button onClick={handleResetToInitial} buttonType="secondary" >Reset to initial</Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary" >Remove all items</Button>
    </section>
  )
}
