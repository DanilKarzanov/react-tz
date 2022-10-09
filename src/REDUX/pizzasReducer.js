
const initialState = {
    blocks: []
}

export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PIZZAS":
            return {...state, blocks: action.payload}
        default:
            return state
    }
}

