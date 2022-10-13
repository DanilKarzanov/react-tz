import React from "react"
import "../STYLES/Orderedpizza.css"
import { useDispatch, useSelector } from "react-redux";
import { incrementAmount, decrementAmount, removeItem } from "../REDUX/cartSlice";

const Orderedpizza = ({name, imageUrl, price, id, amount=0, type='Традиционное', size=25}) => {
    const dispatch = useDispatch()
    //const [counter, setCounter] = useState(1)
    
    //const subtotal = price*counter
    /*const handleIncrement = () => {
        setCounter(counter + 1);
    }*/

    const handleIncrement = () => {
        dispatch(incrementAmount(id))
    }
    
    /*const handleDecrement = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }*/

    const handleDecrement = () => {
        dispatch(decrementAmount(id))
    }

    /*const handleDeleteClick = () => {
        localStorage.removeItem(id)
    }*/

    const handleDeleteClick = () => {
        dispatch(removeItem(id))
    }

    const state = useSelector(state => state)

    return (
        <div className="orderedpizza__container">
            <img src={ imageUrl } alt="Пицца" className="orderedpizza__img" />
            <div className="orderedpizza__content">
                <div className="orderedpizza__name">{ name }</div>
                <div className="orderedpizza__type">{ state.options.pizzasArray[0][id].pickedtype }</div>
                <div className="orderedpizza__size">{ state.options.pizzasArray[0][id].pickedsize } см</div>
            </div>
            <div className="orderedpizza__counter">
                <button onClick={handleIncrement} className="counter_operation">+</button>
                <div className="orderedpizza__items">{ amount }</div>
                <button onClick={handleDecrement}className="counter_operation">-</button>
            </div>
            <div className="orderedpizza__sum">{ price*amount }</div>
            <button onClick={handleDeleteClick} className="orderedpizza__deleteitem">Удалить</button>
        </div>
    )
}

export default Orderedpizza