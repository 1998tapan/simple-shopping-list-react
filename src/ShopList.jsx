import "./ShopList.css";
import ListItem from "./ListItem"

export default function ShopList({ items }) {
    return (
        <div className="shop-container">
            <h1>Shopping List React</h1>
            <small>Tap on items to toggle</small>
            <ul>
                {items.map(item => (
                    <ListItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        completed={item.completed}
                    />
                ))}
            </ul>
        </div>
    )
}


{/* <ListItem
    key={item.id}
    {...item}
/> */}