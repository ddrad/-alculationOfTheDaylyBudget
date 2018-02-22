import React, { Component } from 'react';
import './App.sass';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

    constructor(props) {
        super(props);
        console.log(this);
       // this.props.serviceRedux.isService = true;
    }

    render() {
        return (
            <div>
                <Header isService={this.props.navReducer.service} />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;