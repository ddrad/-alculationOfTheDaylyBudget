import React, { Component } from 'react';
import HeaderCV from './cv/HeaderCV';

class Header extends Component {

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            this.setState({ isTop })
        });
    }

    componentWillUpdate() {
        //   document.addEventListener('scroll', () => {
        window.location.hash = '#';
        // });
    }

    render() {
        console.log(this);
        const {service} = this.props;
        return (
            <div>
                <nav className="navbar fixed-top navbar-light bg-faded white-block navbar-callapse-hide-top">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav pt-2">

                            {!service ? <HeaderCV /> :
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                            }

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href='/calc-budget'>Calculate budget</a>
                                    <a className="dropdown-item" href="#">Not exist 1</a>
                                    <a className="dropdown-item" href="#">Not exist 2</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className="navbar-toggler navbar-light navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        );
    }
}

export default Header;