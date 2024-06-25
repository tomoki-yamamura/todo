
export default function Counter({totalNumberOfItems, numberOfItemsPacked}: {
  totalNumberOfItems: number
  numberOfItemsPacked: number
}) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  )
}
