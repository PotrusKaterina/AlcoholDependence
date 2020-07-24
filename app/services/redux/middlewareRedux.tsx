
export const writeToStorage = store => next => async action => {
    let result = next(action);
    return result;
}