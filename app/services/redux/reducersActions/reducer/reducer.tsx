import { ADD_INGRIDIENT, DELETE_INGRIDIENT } from "./actions";

const initialState = {
    ingridient: ''
}

export const ingridient = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_INGRIDIENT:
            return {
                ...state,
                ingridient: payload
            }
        case DELETE_INGRIDIENT:
            return {
                ...state,
                ingridient: ''
            }
        default:
            return state
    }
}