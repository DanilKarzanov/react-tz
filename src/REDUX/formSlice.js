import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        condition: 1
    },
    reducers: {
        switchform: (state, action) => {
            state.form.condition = action.payload
        }
    }
})

export const formReducer = formSlice.reducer
export const switchform = formSlice.actions