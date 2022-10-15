import React from "react"
import classNames from "classnames"
import { useSelector, useDispatch } from "react-redux"
import { setActiveCategory } from "../redux/pizzasFilterSlice"
import { filterCategories } from "../constants/filter.js"
import "../styles/Filter.css"

export const Filter = () => {
    const dispatch = useDispatch()
    const activeCategory = useSelector(state => state.activeCategory.activeCategory)
    
    return (
        <div>
            <ul className="filter__list">
                {filterCategories && filterCategories.map((category, index) => (
                    <li key={category} onClick={() => {
                        dispatch(setActiveCategory(index))}} className={classNames({ active: activeCategory === index})}>{ category }</li>
                ))}
            </ul>
        </div>
    )
} 
