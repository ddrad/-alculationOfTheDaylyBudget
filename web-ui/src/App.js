import React, { Component } from 'react';
import './App.sass';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;