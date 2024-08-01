import { useState } from "react"
import "./ShopForm.css";


export default function ShopForm({ addItem }) {
    const initialCart = () => ({ name: "", quantity: 0 })
    const [isEnabled, setIsEnabled] = useState(false);
    const [formData, setFormData] = useState(initialCart);

    const handleChange = (e) => {
        setFormData(currData => ({ ...currData, [e.target.name]: e.target.value }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        addItem({ ...formData, completed: false });
        setFormData(initialCart);
    }

    return (
        <div className="ShopForm">
            <button onClick={() => (setIsEnabled(isEnabled => !isEnabled))}>+</button>
            <div className={`add-item-form ${isEnabled ? "active" : ""}`}>
                <form>
                    <div className="input-container mb-3">
                        <label htmlFor="name">Item</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input-container mb-3">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} />
                    </div>
                    <button type="submit" className="submit" onClick={submitForm}>Add</button>
                </form>
            </div>
        </div >

    )
}