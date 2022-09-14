import React from 'react'
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({id, imagen, tipoCortina, tipoTela, precio, descripcion, stock}) => {
    function onAdd(contador){
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
    
        //alert(`Agregaste ${contador} cortinas al carrito`)} 
    
    return (
    <div className='divContenedorDetail' id={id}>
        <div className='contenerImgDetalle'>
            <img src={imagen} alt=" " />
        </div>
        <div>
            <div className='detalle'>
                <h2>Cortina: {tipoCortina} {tipoTela}</h2>
                <p>Precio: $ {precio}</p>
                <p>Descripcion: {descripcion} </p>
                <p>Disponibles: {stock} unidades</p>
                <ItemCount stock={stock} onAdd={onAdd}/>
                <ToastContainer/>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail