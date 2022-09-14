import React from 'react'
import ItemDetailContainer from '../components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import MedirEInstalar from '../pages/MedirEInstalar';
import Tipos from '../pages/Tipos';
import Contacto from '../pages/Contacto';
import Layout from './Layout';
import CartWidget from '../components/cardwidget/CartWidget';

const Router = () => ( 
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/> 
                <Route path="/cortinas/" element={<Tipos/>}/>
                <Route path="/cortinas/:tiposId" element={<Tipos/>}/>
                <Route path="/medirEInstalar/" element={<MedirEInstalar/>}/>
                <Route path="/contacto/" element={<Contacto/>}/>
                <Route path="/detalleCortina/:id" element={<ItemDetailContainer/>}/>
                <Route path='/carrito/' element={<CartWidget/>} />
                <Route path="*" element={<div>Error 404</div> }/>
            </Route>
        </Routes>
    </BrowserRouter> 
)


export default Router