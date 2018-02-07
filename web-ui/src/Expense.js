import React, { Component } from 'react';

class Expense extends Component {

    state = {
        transaction: null,
        category: null,
        isMonthly: false
    };

    handleChangeInput = event => {
        this.setState({ [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
    };

    handleEnter = () => {
        const { onSubmit } = this.props;
        const { transaction, category, isMonthly } = this.state;
        onSubmit(-1 * Math.abs(parseFloat(transaction)), category, isMonthly);
        this.setState({ transaction: null, category: null, isMonthly:false });
    }

    render() {
        const { transaction, category, isMonthly } = this.state;
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
                             id="isMonthly"
                             name="isMonthly"
                             onChange={this.handleChangeInput}
                             checked={isMonthly} />
                            <label className="form-check-label" htmlFor="isMonthly">Обязательныйй платеж</label>
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