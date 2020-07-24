export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT';


export function addIngridient(payload) {
    return { type: ADD_INGRIDIENT, payload }
}

export function deleteIngridient(payload) {
    return { type: DELETE_INGRIDIENT, payload }
}