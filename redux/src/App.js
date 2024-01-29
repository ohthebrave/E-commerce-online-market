import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import  ShopDisplay  from './pages/ShopDisplay';
import Cart from './pages/Cart'
import { useState } from 'react';
import ContactForm from './components/ContactForm';

import { ToastContainer } from 'react-toastify';


function App() {

  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
  
    if (exist) {
      setCartItems(cartItems.map(x => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1){
      setCartItems(cartItems.filter(x=> x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  }

  return (
    <>
      <Router>
        <ToastContainer/>
      <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>           
            <Route path="/shop" element={<ShopDisplay onAdd={onAdd}/>}/>           
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/cart" element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
