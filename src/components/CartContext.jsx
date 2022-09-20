import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {

    const [cart, setCart] = useState([]);

    function addToCart(item, quantity) {

        if (isInCart(item.id)){

        }else {
            let copyCart = [...cart];
            copyCart.push({...item, quantity: quantity})

            setCart(copyCart)
        }

        function isInCart(id){
            return (cart.some(itemInCart => itemInCart.id === id))
        }
    }

    const deleteFromCart = (id) => {
        setCart(cart.filter(itemInCart => itemInCart.id !== id))
    }

    function clearCart() {
        setCart([])
    }


    return (
        <CartContext.Provider value={ {cart, addToCart, deleteFromCart, clearCart} }>
            {children}
        </CartContext.Provider>
    )
}