import BackgroundHeading from './BackgroundHeading'
import Footer from './Footer'
import Header from './Header'
import ItemLinst from './ItemLinst'
import Sidebar from './Sidebar'

export default function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
          <Header />
          <ItemLinst />
          <Sidebar />
      </main>
      <Footer />
    </>
  )
}