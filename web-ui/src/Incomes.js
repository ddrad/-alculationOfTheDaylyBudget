import React, { Component } from 'react';

class Incomes extends Component {

 state = {
        transaction: null,
        category: null,
    };

    handleChangeInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleEnter = () => {
        const { onSubmit } = this.props;
        const { transaction, category } = this.state;

        onSubmit(Math.abs(parseFloat(transaction)), category, false);
        this.setState({ transaction: null, category: null });
    }

    render() {
        const { transaction, category } = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="transaction">Внести доходы:</label>
                            <input type="number"
                                className="form-control input-sm"
                                onChange={this.handleChangeInput}
                                value={transaction || ''}
                                name="transaction" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Категория:</label>
                            <input type="text"
                                className="form-control input-sm"
                                onChange={this.handleChangeInput}
                                value={category || ''}
                                name="category" />
                        </div>
                        <button type="submit"
                            className="btn btn-default"
                            onClick={this.handleEnter}>Внести</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Incomes;