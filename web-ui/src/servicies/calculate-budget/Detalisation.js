import React, { Component } from 'react';
import moment from 'moment';

class Detalisation extends Component {

    render() {
        const { transactions, date } = this.props
        return (
            <div className="row mt-5 white-block">
                <table className="table table-hover">
                    <thead className="thead-color">
                        <tr>
                            <th>Дата</th>
                            <th>Сумма ₽</th>
                            <th>Категория</th>
                            <th>Обязательный платеж</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions
                            .filter(({ date: transactionDate }) =>
                                moment(transactionDate, 'DD.MM.YYYY').isSame(
                                    date,
                                    'month',
                                ),
                        )
                            .map(({ date, sum, category, isDebenture }, index) => (
                                <tr key={index}>
                                    <td>{date}</td>
                                    <td>{sum} ₽</td>
                                    <td>{category}</td>
                                    <td>{isDebenture === true ? 'Да' : 'Нет'}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    };
}
export default Detalisation;