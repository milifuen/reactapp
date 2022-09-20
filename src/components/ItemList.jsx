import React, { useEffect, useState } from "react"
import itemsData from "../data/data";
import Item from "./Item";
function getProductos() {
    return new Promise( (resolve) => {
        setTimeout(()=> resolve(itemsData), 2000)
    })
};

export default function ItemList() {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        getProductos().then((respuesta) => setDatos(respuesta));
    }, []);
  return (
        <div>
            {
                datos.map( (product) => {
                    return (
                        <Item key={product.id} name={product.name} price={product.price} data={product.data} stock={product.stock}></Item>
                    )
                }
            )}
        </div>

    )
}