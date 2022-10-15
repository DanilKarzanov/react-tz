import { createSlice } from "@reduxjs/toolkit";

const pizzasSearchSlice = createSlice({
    name: 'search',
    initialState: {
        searchvalue: ''
    },
    reducers: {
        setSearchValue: (state, action) => {
            state.searchvalue = action.payload
        }
    }
})

export const { setSearchValue } = pizzasSearchSlice.actions

export const searchReducer = pizzasSearchSlice.reducer