import React from 'react';
import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  )
}


export default App