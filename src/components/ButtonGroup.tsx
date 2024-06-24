import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

export default function ButtonGroup() {

  
  return (
    <section className="button-group">
      {secondaryButtons.map((text, index) => (
        <Button key={index} type="secondary">{text}</Button>
      ))}
    </section>
  )
}
