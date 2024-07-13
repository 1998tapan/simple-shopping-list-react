import './App.css'
import ShopList from '../ShopList'

const items = [
  { id: 1, name: "milk", quantity: 2, completed: true },
  { id: 2, name: "banana", quantity: 6, completed: false },
  { id: 3, name: "potato", quantity: 2, completed: true },
  { id: 4, name: "bread", quantity: 1, completed: false }
];
function App() {
  return (
    <>
      <ShopList items={items} />
    </>
  )
}

export default App
