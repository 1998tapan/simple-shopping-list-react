import { useState } from "react"

export default function ListItem({ id, name, quantity, completed, deleteItem }) {

    const [isCompleted, setIsCompleted] = useState(completed);
    const handleTask = () => (setIsCompleted((currTask) => (!currTask)));

    const styles = {
        color: isCompleted ? "grey" : "red"
        , textDecoration: isCompleted ? "line-through" : "none"
        , cursor: "pointer"
    }
    return (
        <li id={id} >
            <span style={styles} onClick={handleTask} >{name} - {quantity}</span>
            <span onClick={() => deleteItem(id)} className="material-symbols-outlined">delete</span>
        </li>
    )
}