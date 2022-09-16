import React, { useState } from 'react'
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemAgregado from './ItemAgregado';

const ItemDetail = ({id, imagen, tipoCortina, tipoTela, precio, descripcion, stock, ancho, alto}) => {
    const [cambiarComp, setCambiarComp] = useState(true)
    function onAdd(contador){
        setCambiarComp(false)
        toast(`Agregaste ${contador} cortina(s) al carrito`, {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    
    return (
    <div className=' divContenedorDetail' id={id}>
        <div className='contenerImgDetalle'>
            <img src={imagen} alt=" " />
        </div>
        <div className='contenedorDetalle'>
            <div className='detalle'>
                <h2><strong className='fs-2'>Cortina: {tipoCortina} {tipoTela}</strong></h2>
                <p className='fs-3'><strong >Precio:</strong> $ {precio}</p>
                <p><strong>DESCRIPCION:</strong> {descripcion} 
                    <p><strong>Dimensiones:</strong> {ancho}cm de ancho x {alto}cm de alto </p>
                </p>
                <p><strong>Disponibles:</strong> {stock} unidades</p>
            </div>
            <div className='contenedorContador'>
                {cambiarComp ? <ItemCount stock={stock} onAdd={onAdd}/> : <ItemAgregado/>}
                <ToastContainer/>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail