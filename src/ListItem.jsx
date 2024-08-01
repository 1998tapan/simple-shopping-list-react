import { useState } from "react"

export default function ListItem({ id, name, quantity, completed }) {

    const [isCompleted, setIsCompleted] = useState(completed);
    const handleTask = () => (setIsCompleted((currTask) => (!currTask)));

    const styles = {
        color: isCompleted ? "grey" : "red"
        , textDecoration: isCompleted ? "line-through" : "none"
        , cursor: "pointer"
    }
    return (
        <li id={id} onClick={handleTask} style={styles}>
            {name} - {quantity}
        </li>
    )
}