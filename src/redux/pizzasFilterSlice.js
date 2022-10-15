import { createSlice } from "@reduxjs/toolkit";

const pizzasFilterSlice = createSlice({
    name: 'filter',
    initialState: {
        activeCategory: 0
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    }
})

export const { setActiveCategory } = pizzasFilterSlice.actions

export const filterReducer = pizzasFilterSlice.reducer
