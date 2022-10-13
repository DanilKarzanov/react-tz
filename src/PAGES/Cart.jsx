import React from "react"
import Orderedpizza from "../COMPONENTS/Orderedpizza"
import Deliveryform from "../COMPONENTS/Deliveryform"
import "../STYLES/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { clearCart } from "../REDUX/cartSlice";


const Cart = () => {
    window.onscroll = () => {
        if (window.scrollY > 300) {
          document.querySelector('.scrollup').classList.add('visible')
        }
      }
    
      const scrollToTop = () => {
        window.scrollTo(0, 0)
      }

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    /*const handleClearClick = () => {
        localStorage.clear()
    }*/

    const handleClearClick = () => {
        dispatch(clearCart())
    }

    const [visibleForm, setVisibleForm] = React.useState(false)

    const handleOrderClick = () => {
        setVisibleForm(true)
    }

    const getTotal = () => {
        let sum = 0
        cart.cart.forEach(item => sum += item.price*item.amount)
        return sum
    }

    
    return (
        <div className="cart__container">
            <h1 className="cart__title">Корзина</h1>
            <div className="cart__orderedlist">
                {cart.cart.map((item) =>(                 
                    <Orderedpizza key={item.id} {...item}/>
                ))}
                
            </div>
            <div className="cart__pricesummary">
                <h4>Итого: {getTotal()}</h4>
            </div>
            <div className="cart__bottom">
                <button onClick={handleClearClick} className="cart__clear">Очистить</button>
                <Link to='/'><button className="cart__return">Вернуться к выбору пицц</button></Link>
                <button onClick={handleOrderClick} className="cart__order">Заказать</button>
            </div>
            {visibleForm && <Deliveryform/>}
            <div className='scrollup' onClick={scrollToTop}>
                <span className='scrollup_arrow'>&#8593;</span>
            </div>

        </div>
    )
}


export default Cart