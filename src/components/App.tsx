import { useState } from 'react'
import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemLinst, { TItem } from './ItemLinst'
import Sidebar from './Sidebar'
import { initialItems } from '../lib/constants'

export default function App() {
  const [items, setItems] = useState<TItem[]>(initialItems)


  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemLinst items = {items}/>
        <Sidebar setItems= {setItems} />
      </main>

      <Footer />
    </>
  )
}