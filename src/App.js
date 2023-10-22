import { useState } from 'react';
import './App.css';
import AddFrom from './components/Add/AddFrom';
import Header from './components/Head/Header'
import Cart from './components/Cart/Cart'
import ShowList from './components/Show/ShowList';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

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
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler}/>
    <main>
      <AddFrom onAddTshirt={addTshirtHandler}/>
      <ShowList tshirts={tshirtList}/>
    </main>
    </>
      
  );
}

export default App;
