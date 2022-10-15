import React from 'react';
import './App.css';
import  Home from './PAGES/Home';
import  Cart from './PAGES/Cart'
import  Account from './PAGES/Account'
import { Route, Routes} from "react-router-dom"
import Header from './COMPONENTS/Header';
import { useDispatch, useSelector } from 'react-redux';
import  axios from "axios";
import { pizzasActionCreator } from "./REDUX/pizzasActionCreator";
import Registerform from './COMPONENTS/Registerform';
import Success from './COMPONENTS/Success'
import { setPizzas } from './REDUX/optionsSlice';

const App = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.pizzas.items)
  
  React.useEffect(() => {
    axios.get("http://localhost:4000/auth/pizzas").then(({ data }) => {
      dispatch(pizzasActionCreator(data[0].pizzas));
      dispatch(setPizzas(data[0].pizzas))
    })
  }, [])
  
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home items={items}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/success' element={<Success/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/account/register' element={<Registerform/>}/>
      </Routes>
    </div>
  );
}


export default App;
