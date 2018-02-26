import React, { Component } from 'react';
import './App.sass';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
import { activateServiceMenu, disactiveServiceMenu } from '../redux/redux';

class App extends Component {

    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <div>
                <Header isService={this.props.nav.service} />
                <Main />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    nav: state.navMenuReducer,
});

const mapDispatchToProps = {
    activateServiceMenu,
    disactiveServiceMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(App); 