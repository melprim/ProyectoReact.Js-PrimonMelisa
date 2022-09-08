import React from 'react';
import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer />
    </div>
  )
}


export default App