import { useContext } from "react"
import { CartContext } from "./CartContext"
import "../styles/Item.css"

const CartItem = ({id, name, price, quantity, total}) => {

    const cartStyle = {height : "140px", width: "20%", border : "1px solid grey", padding : "10px"}
    const {deleteFromCart} = useContext(CartContext)

    return (
        <div className="card">
            <button onClick={() => { deleteFromCart(id) }}>x</button>
            <h3>{name}</h3>
            <p>cantidad: {quantity}</p>
            <p>{price}</p>
            <p>precio: $ {total}</p>
        </div>
    )
}

export default CartItem