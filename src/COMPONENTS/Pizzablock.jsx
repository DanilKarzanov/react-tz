
import React, { useState } from "react";
import "../STYLES/Pizzablock.css"
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addToCart } from "../REDUX/cartSlice";

const Pizzablock = ({ name, imageUrl, price, id, blocks, description }) => {
    const dispatch = useDispatch()
    const typeNames = ['традиционное', 'тонкое']
    const availableSizes = [25, 30, 35]
    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState(0)

    /*const handleAddClick = () => {
        localStorage.setItem(JSON.stringify(id), JSON.stringify(blocks[id]))
        console.log(blocks[id])
    }*/
    
    const handleAddClick = () => {
        dispatch(addToCart({name, imageUrl, price, id}))
    }

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt=""/>
            <h4 className="pizza-block__title">{ name }</h4>
            <p className="pizza-block__description">{ description }</p>
            <div className="pizza-block__selector">
                <ul className="pizza-block__types">
                    {typeNames.map((type, index) => (
                        <li key={type} onClick={() => setActiveType(index)} className={classNames({ active: activeType === index })}>{type}</li>
                    ))}
                </ul>
                <ul className="pizza-block__sizes">
                    {availableSizes.map((size, index) => (
                        <li onClick={() => setActiveSize(index)} className={classNames({ active: activeSize === index })} key={size}>{size} см</li>
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