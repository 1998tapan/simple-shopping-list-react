import { useState } from "react"
import "./ShopList.css";
import ListItem from "./ListItem"
import ShopForm from "./ShopForm";

export default function ShopList() {

    const [items, setItems] = useState([]);
    const addItem = (i) => {
        setItems(items => [...items, i])
    };
    const deleteItem = (id) => {
        console.log("Deleting", id);
        setItems(items => (
            items.filter(i => i.id !== id)
        ))
    }
    return (
        <div>
            <div className="shop-container">
                <h1>Shopping List React</h1>
                <small>Tap on items to toggle</small>
                <ul>
                    {items.map(item => (
                        <ListItem
                            key={item.id} deleteItem={deleteItem} {...item}
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