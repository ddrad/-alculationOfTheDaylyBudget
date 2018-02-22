import { applyMiddleware, combineReducers, createStore } from 'redux';

// actions.js
export const activateServiceMenu = () => ({
    type: 'SERVICE',
});

export const disactiveServiceMenu = () => ({
    type: 'HOME',
});

// reducers.js
export const navMenuReducer = (state = {service : false}, action) => {
    switch (action.type) {
        case 'SERVICE':
            return {service: true}
        case 'HOME':
            return {service: false}
        default:
            return state;
    }
};

export const reducers = combineReducers({
    navMenuReducer,
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();  