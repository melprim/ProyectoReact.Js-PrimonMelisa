import React from 'react'
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import MedirEInstalar from '../pages/MedirEInstalar';
import Contacto from '../pages/Contacto';
import Layout from './Layout';
import Carrito from '../components/carrito/Carrito';
import { CarritoProvider } from '../context/CarritoContext';
import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import FormCompra from '../components/carritoCompra/FormCompra';

const Router = () => ( 
<CarritoProvider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/> 
                <Route path="/cortinas/" element={<ItemListContainer/>}/>
                <Route path="/cortinas/:tiposId" element={<ItemListContainer/>}/>
                <Route path="/medirEInstalar/" element={<MedirEInstalar/>}/>
                <Route path="/contacto/" element={<Contacto/>}/>
                <Route path="/detalleCortina/:detalleId" element={<ItemDetailContainer/>}/>
                <Route path='/carrito/' element={<Carrito/>} />
                <Route path='/carrito/compra' element={<FormCompra/>} />
                <Route path="*" element={<div>Error 404</div> }/>
            </Route>
        </Routes>
    </BrowserRouter> 
</CarritoProvider>  
)


export default Router