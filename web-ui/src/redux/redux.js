import { applyMiddleware, combineReducers, createStore } from 'redux';

// actions.js
export const activateService = geod => ({
    type: 'SERVICE',
    serviceRedux,
});

export const disactiveService = () => ({
    type: 'HOME',
});

// reducers.js
export const serviceRedux = (state = {}, action) => {
    switch (action.type) {
        case 'SERVICE':
            return action.serviceRedux;
        case 'HOME':
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
    serviceRedux,
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();  