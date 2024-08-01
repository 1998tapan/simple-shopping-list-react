import { useState } from "react"
import "./ShopList.css";
import ListItem from "./ListItem"
import ShopForm from "./ShopForm";

export default function ShopList() {

    const [items, setItems] = useState([]);
    const addItem = (i) => {
        setItems(item => [...item, i])
    };
    return (
        <div>
            <div className="shop-container">
                <h1>Shopping List React</h1>
                <small>Tap on items to toggle</small>
                <ul>
                    {items.map(item => (
                        <ListItem
                            key={item.id} {...item}
                        />
                    ))}
                </ul>
            </div>

            <ShopForm addItem={addItem} />
        </div>
    )
}


{/* <ListItem
    key={item.id}
    {...item}
/> */}