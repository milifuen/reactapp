import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/itemListContainer";
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartView from './components/CartView';
import { CartProvider } from "./components/CartContext";
import CartWidget from './components/CartWidget';

function App() {
  
  return (
    
      <div>
        {/*<ItemCount initial={1} stock={24}></ItemCount>*/}
        <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>

            <Routes>

              <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/category/:idcat" element={<ItemListContainer></ItemListContainer>}></Route>
              <Route path="/detalle/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
              <Route path="/cart" element={<CartView></CartView>}></Route>
              <Route path="/cart" element={<CartWidget></CartWidget>}></Route>
              <Route path="*" element={<h1>ERROR 404</h1>}></Route>
              
              

            </Routes>


        </CartProvider>
          
        </BrowserRouter>  
      </div>
    
    
  );
}

export default App;
