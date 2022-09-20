import React, { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import firestoreDB from "../services/firebase";
import {collection, doc, getDoc} from "firebase/firestore"

export default function ItemDetailContainer(props) {
    const [datos, setDatos] = useState([])
    const {id} = useParams();

    function getProductosById(id) {
        return new Promise( (resolve, reject) => {
            const ProductsCollection =  collection(firestoreDB, "products");
            const docRef = doc(ProductsCollection, id);
            
            getDoc(docRef).then( snapshot => {
                resolve(
                    { ...snapshot.data(), id: snapshot.id}
                )
            });
        })
    }
    
    useEffect(() => {
        getProductosById(id).then((respuesta) => setDatos(respuesta));
    }, []);




  return (
            <div>
                <h2>Detalles del producto</h2>
                <ItemDetail stock={datos.stock} key={datos.id} id={datos.id} name={datos.name} price={datos.price} data={datos.data} category={datos.category} description={datos.description} img={datos.img}>
                </ItemDetail>
            </div>
            )
            }

