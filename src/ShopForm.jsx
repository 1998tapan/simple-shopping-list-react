import { useState } from "react";
import "./ShopForm.css";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form"

export default function ShopForm({ addItem }) {
    const initialCart = () => ({ name: "", quantity: 0 })
    const [isEnabled, setIsEnabled] = useState(false);
    // const [formData, setFormData] = useState(initialCart); // no longer needed as using react-hook-form

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const handleChange = (e) => {
    //     setFormData(currData => ({ ...currData, [e.target.name]: e.target.value }))
    // } // no longer needed as using react-hook-form

    const submitForm = (formData) => {
        // e.preventDefault();
        addItem({ ...formData, completed: false, id: uuid() });
        // setFormData(initialCart); // no longer needed as using react-hook-form
    }

    const formValidations = { name: { required: true }, quantity: { required: true,min:1, max: 10 } }

    return (
        <div className="ShopForm">
            <button onClick={() => (setIsEnabled(isEnabled => !isEnabled))}>+</button>
            <div className={`add-item-form ${isEnabled ? "active" : ""}`}>
                <form>
                    <div className="mb-3">
                        <div className="input-container">
                            <label htmlFor="name">Item</label>
                            <input type="text" name="name" id="name"  {...register("name", formValidations.name)} />
                        </div>
                        <div className="error">
                            {/* errors will return when field validation fails  */}
                            {errors.name?.type === "required" && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="input-container">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" id="quantity" {...register("quantity", formValidations.quantity)} />
                        </div>
                        <div className="error">
                            {/* errors will return when field validation fails  */}
                            {errors.quantity?.type === "required" && <span>This field is required</span>}
                            {errors.quantity?.type === "max" && <span>Maximum Quantity per item is 10</span>}
                            {errors.quantity?.type === "min" && <span>Minimum Quantity per item is 1</span>}
                        </div>
                    </div>
                    <button type="submit" className="submit" onClick={handleSubmit(submitForm)}>Add</button>
                </form>
            </div >
        </div >

    )
}