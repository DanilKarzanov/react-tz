
import React, { useState } from "react";
import "../styles/Pizzablock.css"
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { chosenSize, chosenType } from "../redux/optionsSlice";
import { typeNames, availableSizes } from "../constants/pizzas";

const Pizzablock = ({ name, imageUrl, price, id, description }) => {
    const dispatch = useDispatch()
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)
    
    const handleAddClick = () => {
        dispatch(addToCart({ name, imageUrl, price, id }))
    }
    
    const state = useSelector(state => state)
    
    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt=""/>
            <h4 className="pizza-block__title">{ name }</h4>
            <p className="pizza-block__description">{ description }</p>
            <div className="pizza-block__selector">
                <ul className="pizza-block__types">
                    {typeNames.map((type, index) => (
                        <li key={type} onClick={() => {setActiveType(index); dispatch(chosenType({type, id})); console.log(state.options.pizzasArray[0][id])}} className={classNames({ active: activeType === index })}>{type}</li>
                    ))}
                </ul>
                <ul className="pizza-block__sizes">
                    {availableSizes.map((size, index) => (
                        <li onClick={() => {setActiveSize(index); dispatch(chosenSize({size, id})); console.log(state.options.pizzasArray[0][id])}} className={classNames({ active: activeSize === index })} key={size}>{size} см</li>
                    ))}
                
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от { price } руб</div>
                <button onClick={handleAddClick} className="pizza-button__add">Добавить</button>
            </div>
        </div>
    )
}

export default Pizzablock
