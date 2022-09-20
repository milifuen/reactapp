
import { useContext } from "react"
import { CartContext } from "./CartContext"
import CartItem from "./CartItem"
import  { Link } from "react-router-dom"
import UserForm from "./UserForm"
export default function CartView() {

    const {cart, clearCart} = useContext(CartContext)

    const cartContainStyle = {display : "flex", justifyContent : "center"}

    let totalQuantity = 0
    cart.map(item => {
        totalQuantity += item.quantity
        return 0;
    })

    let totalPrice = 0 
    cart.map(item => {
        totalPrice += item.price*item.quantity
        return 0;
    })
    return (
        
    <div style={{textAlign: "center"}}>
    <h1>carrito</h1>
    {totalQuantity > 0 ?
    <div>
    <button onClick={clearCart}>Vaciar carrito</button>
    <p>Hay {totalQuantity} items en el carrito.</p>
    </div>
    : <p>El carrito está vacío.</p> }
    <br />
    <Link to="/">
        <button>Volver a inicio</button>
    </Link>
    
    <div style={cartContainStyle}>
    { cart.length > 0 ? (
    cart.map(cartProduct => {
        return(

        <div>
        <CartItem
        key={cartProduct.key}
        id={cartProduct.id}
        name={cartProduct.name}
        price={cartProduct.price}
        quantity={cartProduct.quantity}
        total={cartProduct.quantity*cartProduct.price}
        />

 
        </div>
        )
        })
        
        ) : (
            <p></p>
        )}

</div>
        { totalQuantity > 0 ?

            <div style={{margin : "20px"}}>
            <h3>Precio total: ${totalPrice}</h3>
            <UserForm cart={cart}/>
            </div>
            : <p></p>
            }
    
</div>
    )
}