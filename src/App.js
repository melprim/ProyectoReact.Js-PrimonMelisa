import React from 'react';
import NavBar from './components/NavBar';
import './app/styles.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer gretings={'Bienvenido'} />
    </div>
  )
}

export default App
