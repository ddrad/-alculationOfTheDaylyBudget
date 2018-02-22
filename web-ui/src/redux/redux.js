import { applyMiddleware, combineReducers, createStore } from 'redux';

const initialState = {
  service: false
};

// actions.js
export const activateServiceMenu = () => ({
    type: 'SERVICE',
});

export const disactiveServiceMenu = () => ({
    type: 'HOME',
});

// reducers.js
export const navMenuReducer = (state = initialState, action) => {
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
export function configureStore() {
    const store = createStore(reducers);
    return store;
};

export const store = configureStore();  