import React, { Component } from 'react';

class Contact extends Component {

    state = {
        customerName: null,
        customerEmail: null,
        customerMessage: null
    };

    handleChangeInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="container">
                <section id="contacts">
                    <header>
                        <h1>Contacts:</h1>
                        <div className="row mt-5">
                            <div className="col-md-3 pl-5">
                                <div className="row mt-2">
                                    <a href={process.env.REACT_APP_MAIL} className="fa fa-google"></a>
                                </div>
                                <div className="row mt-2">
                                    <a href="https://www.linkedin.com/in/dmitry-azarov-47b9b8105" className="fa fa-linkedin"></a>
                                </div>
                                <div className="row mt-2">
                                    <a href={process.env.REACT_APP_SKYPE_ID} className="fa fa-skype"></a>
                                </div>
                                <div className="row mt-2">
                                    <a href="https://www.instagram.com/mr.azaroff/" className="fa fa-instagram"></a>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <h3>Contact me:</h3>
                                <form method="POST" action="https://formspree.io/mr.azaroff@gmail.com">
                                    <div className="form-group">
                                        <label htmlFor="customer">Your name:</label>
                                        <input type="text"
                                            className="form-control input-sm"
                                            onChange={this.handleChangeInput}
                                            name="customerName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your email:</label>
                                        <input type="email"
                                            className="form-control input-sm"
                                            onChange={this.handleChangeInput}
                                            name="customerEmail" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your email:</label>
                                        <textarea className="form-control input-sm"
                                            onChange={this.handleChangeInput}
                                            name="customerMessage"></textarea>
                                    </div>
                                    <input type="hidden" name="_next" value="http://localhost:3000/" />
                                    <input type="text" name="_gotcha" style={{display:'none'}} />
                                    <button type="submit"
                                        className="btn btn-success mt-2">Send</button>
                                </form>
                            </div>
                        </div>
                    </header>
                    <main>
                    </main>
                </section>
            </div>
        );
    }
}

export default Contact;