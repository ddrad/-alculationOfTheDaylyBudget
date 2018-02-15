import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollNavSelected: 'home',
            to: 'home'
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            //   console.log(window.scrollY);
            //if (isTop !== this.state.isTop) {
            this.setState({ isTop })
            //}
        });
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
        if (to === scrollNavSelected.toLowerCase()) {
            cl.push('active');
        }
        return cl.join(' ');
    }

    render() {
        const { scrollNavSelected } = this.state;
        return (
            <nav className="navbar fixed-top navbar-dark bg-faded">
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Scrollchor to="#greating"
                                ref={ref => (this._greating = ref)}
                                animate={{ offset: 0, duration: 800 }}
                                afterAnimate={() => this.updateState(this._greating)}
                                className={this.getClassName(this._greating)}>Home</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#contacts"
                                ref={ref => (this._contacts = ref)}
                                animate={{ offset: 7, duration: 800 }}
                                afterAnimate={() => this.updateState(this._contacts)}
                                className={this.getClassName(this._contacts)}>Contacts</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#experience"
                                ref={ref => (this._experience = ref)}
                                animate={{ offset: 7, duration: 800 }}
                                afterAnimate={() => this.updateState(this._contacts)}
                                className={this.getClassName(this._experience)}>Experience</Scrollchor>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/calc-budget">Calculate budget</a>
                                <a className="dropdown-item" href="#">Not exist 1</a>
                                <a className="dropdown-item" href="#">Not exist 2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;