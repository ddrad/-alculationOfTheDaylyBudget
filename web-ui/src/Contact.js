import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div className="container">
                <section id="experience">
                    <header>
                        <h1>Contacts</h1>
                        <div className="row mt-5">
                            <div className="col-md-3 pl-5">
                                <div className="row">
                                    <a href="#" class="fa fa-google"></a>
                                </div>
                                <div className="row">
                                    <a href="#" class="fa fa-linkedin"></a>
                                </div>
                                <div className="row">
                                    <a href="#" class="fa fa-skype"></a>
                                </div>
                                <div className="row">
                                    <a href="#" class="fa fa-instagram"></a>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <h3>Contact me:</h3>
                                <div className="form-group">
                                    <label htmlFor="customer">Your name:</label>
                                    <input type="text"
                                        className="form-control input-sm"
                                        name="customer" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your email:</label>
                                    <input type="email"
                                        className="form-control input-sm"
                                        name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your email:</label>
                                    <textarea className="form-control input-sm" name="message"></textarea>
                                </div>
                                <button type="submit"
                                    className="btn btn-success mt-2">Send</button>
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