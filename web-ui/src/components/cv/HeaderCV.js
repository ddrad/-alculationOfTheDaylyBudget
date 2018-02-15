import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class HeaderCV extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollNavSelected: 'home',
            to: 'home'
        }
    }

    updateState = elm => {
        if (!elm) {
            return;
        }
        const { to } = elm.props;
        console.log(to);
        this.setState({ scrollNavSelected: to });
    };

    getClassName = elm => {
        const cl = ['nav-link'];
        if (!elm) {
            return cl;
        }
        const { children, to, className } = elm.props;
        const { scrollNavSelected } = this.state;
        console.log(to, scrollNavSelected);
        if (to === scrollNavSelected.toLowerCase()) {
            cl.push('active');
        }
        return cl.join(' ');
    }

    render() {
        const { scrollNavSelected } = this.state;
        return (
            <div>
            <li className="nav-item">
                <Scrollchor to=""
                    ref={ref => (this._greating = ref)}
                    animate={{ offset: -150, duration: 800 }}
                    afterAnimate={() => this.updateState(this._greating)}
                    className={this.getClassName(this._greating)}>Home</Scrollchor>
            </li>
            <li className="nav-item">
                <Scrollchor to="#contacts"
                    ref={ref => (this._contacts = ref)}
                    animate={{ offset: -150, duration: 800 }}
                    afterAnimate={() => this.updateState(this._contacts)}
                    className={this.getClassName(this._contacts)}>Contacts</Scrollchor>
            </li>
            <li className="nav-item">
                <Scrollchor to="#experience"
                    ref={ref => (this._experience = ref)}
                    animate={{ offset: -150, duration: 800 }}
                    afterAnimate={() => this.updateState(this._experience)}
                    className={this.getClassName(this._experience)}>Experience</Scrollchor>
            </li>
            </div>
    
                                    );
    }
}

export default HeaderCV;