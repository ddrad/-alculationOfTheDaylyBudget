import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  
import { store } from './redux/redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </ Provider>, document.getElementById('root'));
registerServiceWorker();
