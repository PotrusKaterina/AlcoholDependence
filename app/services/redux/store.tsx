import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { writeToStorage } from './middlewareRedux';

const middleware = [writeToStorage];
export const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
);

export type AppDispatch = typeof store.dispatch;

export interface RootState {
    ingridient: {
        ingridient: string
    },
};