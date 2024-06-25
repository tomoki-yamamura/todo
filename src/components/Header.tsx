import Counter from "./Counter";
import { TItem } from "./ItemLinst";
import Logo from "./Logo";

export default function Header({totalNumberOfItems, numberOfItemsPacked}: {
  totalNumberOfItems: number
  numberOfItemsPacked: number
}) {
  return (
    <header>
      <Logo />
      <Counter totalNumberOfItems={totalNumberOfItems} numberOfItemsPacked={numberOfItemsPacked} />
    </header>
  )
}
