export default function ShopList({ items }) {
    return (
        <div className="shop-container">
            <h1>Shopping List React</h1>
            <ul>
                {items.map(item => (<li>{item.name} - {item.quantity}</li>))}
            </ul>
        </div>
    )
}