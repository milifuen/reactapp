import { useState } from "react";
import Button from "./Button";
import {getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore"
import firestoreDB from "../services/firebase";
import { useNavigate } from "react-router-dom";

function UserForm ({cart}) {
    const [usuarioData, setUsuarioData] = useState({
        name: '',
        email: '',
        telefono: ''
    })

    let navigate = useNavigate()
    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    })

    let total = 0;
    cart.forEach((item) =>{
        total += item.price * item.quantity
    })

    const ordenFinal = {
        buyer: {...usuarioData},
        items: [...cart],
        total: total,
        date: new Date(),
    }

    async function handleSubmit(evt) {
        evt.preventDefault()

        const collectionRef = collection(firestoreDB, 'orders')
        const order = await addDoc(collectionRef, ordenFinal)
        setOrderFirebase({id: order.id, complete: true})
    }

    function inputChangeHandler(evt) {
        const input = evt.target

        const value = input.value
        const inputName = input.name 

        let copyUsuarioData = {...usuarioData}

        copyUsuarioData[inputName] = value;
        setUsuarioData(copyUsuarioData)
    }

    function handleReset(evt){
        setUsuarioData({
            name: '',
            email: '',
            telefono: ''
        })
    }
if(orderFirebase.complete == true) {
        return (
            <div>
                <h1>gracias por su compra !</h1>
                <p>el ID de seguimiento de tu compra es: {orderFirebase.id}</p>
            </div>
        )
    }

    return (
        <div>
            <form onReset={handleReset} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input value={usuarioData.name} onChange={inputChangeHandler} name='name' type="text" placeholder="Nombre" required />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input value={usuarioData.email} onChange={inputChangeHandler} name="email" type="text" placeholder="Correo" required />
            </div>

            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input value={usuarioData.telefono} onChange={inputChangeHandler} name="telefono" type="text" placeholder="Telefono" required />
            </div>

            <div>
                <Button text="finalizar compra" type="submit" onTouch={handleSubmit}/>
                <Button text="vaciar carro" type="reset">Vaciar carrito</Button>
            </div>
            </form>
        </div>
    )
}

export default UserForm;