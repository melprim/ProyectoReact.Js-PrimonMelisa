import React from 'react';
import NavBar from './navBar/NavBar';
import '../components/App.css';
import ItemListContainer from './itemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer gretings={'Bienvenido'}/>
    </div>
  )
}


export default App