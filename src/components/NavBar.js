import '../styles/NavBar.css'
import imgCart from "../images/cart.png"
import { Link } from "react-router-dom"
import CartWidget from './CartWidget';

function NavBar() {

    return(
        
        <ul className="navBar">
            
            <div  className="menuStyle">
                <li>
                    <Link to="/" className="menuItem">Home</Link>
                </li>
                <li>
                    <Link to="/category/Platos" className="menuItem">Platos</Link>
                </li>
                <li>
                    <Link to="/category/Postres" className="menuItem">Postres</Link>
                </li>
                <CartWidget></CartWidget>
                
            </div>
            
        </ul>
    )
}

export default NavBar;