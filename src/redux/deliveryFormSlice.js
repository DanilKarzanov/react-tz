import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    condition: true
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        switchform: state => {
            state.condition = !state.condition
        }
    }
})

export const { switchform } = formSlice.actions

export const deliveryFormReducer =  formSlice.reducer
