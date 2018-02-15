import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import CalculateBudget from './servicies/calculate-budget/CalculateBudget';

class Main extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/calc-budget' component={CalculateBudget} />
            </Switch>
        );
    }
}

export default Main;