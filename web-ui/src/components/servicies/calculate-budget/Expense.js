import React, { Component } from 'react';

class Expense extends Component {

    state = {
        transaction: null,
        category: null,
        isDebenture: false
    };

    handleChangeInput = event => {
        this.setState({ [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
    };

    handleEnter = () => {
        const { onSubmit } = this.props;
        const { transaction, category, isDebenture } = this.state;
        onSubmit(-1 * Math.abs(parseFloat(transaction)), category, isDebenture);
        this.setState({ transaction: null, category: null, isDebenture:false });
    }

    render() {
        const { transaction, category, isDebenture } = this.state;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="transaction">Внести расход:</label>
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
                        <div className="form-check">
                            <input type="checkbox" 
                            className="form-check-input"
                             id="isDebenture"
                             name="isDebenture"
                             onChange={this.handleChangeInput}
                             checked={isDebenture} />
                            <label className="form-check-label" htmlFor="isDebenture">Обязательныйй платеж</label>
                        </div>
                        <button type="submit"
                            className="btn btn-default mt-2"
                            onClick={this.handleEnter}>Внести</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Expense;