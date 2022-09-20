import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';


function ItemDetail({id, name, price, stock, description, img}) {

    const styles = {marginTop : "20px", backgroundColor : "darkgray"};
    const { addToCart } = useContext(CartContext)
    const [quantityInCart, setQuantityInCart] = useState(0);

    function handleAdd(items) {
        const itemToCart = { id, name, price, stock};
        addToCart(itemToCart, items);
        setQuantityInCart(items)
    }

    return (
        <div style={styles} className="card">
            <div className="card-detail">
                <img style={{maxWidth : "100%"}} src={img} alt="" />
                <h1>{name}</h1>
                <h3>$ {price}</h3>
                <h5>Descripción: {description}</h5>
            </div>

            { quantityInCart === 0 ?
            <ItemCount initial={1} stock={stock} onAdd={handleAdd}
            text="finalizar"/>
            : <Link to="/cart"> ir a carrito</Link>
            }
        </div>
    )
}

export default ItemDetail;
