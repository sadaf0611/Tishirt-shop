import { useState } from 'react';
import './App.css';
import AddFrom from './components/Add/AddFrom';
import Header from './components/Head/Header'
import ShowList from './components/Show/ShowList';
function App() {
  const [tshirtList, setTshirtList]=useState([]);

  const addTshirtHandler=(tname,tdesc,tprice,tL,tM,tS)=>{
    setTshirtList((prev)=>{
      return[
        ...prev, 
        {name:tname,desc:tdesc,price:tprice,L:tL,M:tM,S:tS,id: Math.random().toString()},
      ];
    })
  }
  return (
    <>
    
    <Header/>
    <main>
      <AddFrom onAddTshirt={addTshirtHandler}/>
      <ShowList tshirts={tshirtList}/>
    </main>
    </>
      
  );
}

export default App;
