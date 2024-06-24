import Button from "./Button";

export default function ButtonGroup({ handleRemoveAllItems, handleResetToInitial, handleMarkAllAsComplete, handleMarkAllAsInComplete }: {
  handleRemoveAllItems: () => void;
  handleResetToInitial: () => void;
  handleMarkAllAsComplete: () => void;
  handleMarkAllAsInComplete: () => void;
}) {

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
      {secondaryButtons.map(({text, onClick}) => (
        <Button key={text} onClick={onClick} buttonType="secondary">{text}</Button>
      ))}
    </section>
  )
}
