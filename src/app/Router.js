import React from 'react'
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import MedirEInstalar from '../pages/MedirEInstalar';
import Tipos from '../pages/Tipos';
import Contacto from '../pages/Contacto';
import Layout from './Layout';
import Carrito from '../components/carrito/Carrito';
import { CarritoProvider } from '../context/CarritoContext';

const Router = () => ( 
<CarritoProvider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/> 
                <Route path="/cortinas/" element={<Tipos/>}/>
                <Route path="/cortinas/:tiposId" element={<Tipos/>}/>
                <Route path="/medirEInstalar/" element={<MedirEInstalar/>}/>
                <Route path="/contacto/" element={<Contacto/>}/>
                <Route path="/detalleCortina/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito/' element={<Carrito/>} />
                <Route path="*" element={<div>Error 404</div> }/>
            </Route>
        </Routes>
    </BrowserRouter> 
</CarritoProvider>  
)


export default Router