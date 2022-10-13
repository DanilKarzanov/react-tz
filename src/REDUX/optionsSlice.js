import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzasArray: [],
}

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzasArray.push(action.payload)
        },

        chosenType: (state, action) => {
            state.pizzasArray[0][action.payload.id]['pickedtype'] = action.payload.type
        },

        chosenSize: (state, action) => {
            state.pizzasArray[0][action.payload.id]['pickedsize'] = action.payload.size
        }
    }
})

export const { setPizzas, chosenSize, chosenType } = optionsSlice.actions

export const optionReducer =  optionsSlice.reducer