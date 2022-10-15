import React from "react";
import '../styles/Search.css'
import { setSearchValue } from "../redux/pizzasSearchSlice";
import { useSelector, useDispatch } from "react-redux";

export const Search = () => {
    const dispatch = useDispatch()
    const searchvalue = useSelector(state => state.searchvalue.searchvalue)

    return (
    <div className="search__wrapper">
        <input value={searchvalue} onChange={event => dispatch(setSearchValue(event.target.value))} className="search__input" placeholder="Поиск пиццы"></input>
    </div>
    )
}