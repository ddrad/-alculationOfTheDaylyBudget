import React, { Component } from 'react';
import './App.sass';
import moment from 'moment';
import Incomes from './Incomes';
import Expense from './Expense';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      navSelected: 'expense',
      transactions: [],
    };
  }

  handleSubstractDay = () => {
    this.setState({ date: this.state.date.subtract(1, 'day') });
  };

  handleAddDay = () => {
    this.setState({ date: this.state.date.add(1, 'day') });
  };

  handleNavClick = event => {
    this.setState({ navSelected: event.target.getAttribute('name') });
  };

  handleSubmitTransaction = (sum, category, isMonthly) => {
    const { date: TodayDate, transactions } = this.state;

    const newTransaction = {
      date: TodayDate.format('DD.MM.YYYY'),
      category: category,
      sum: sum,
      isMonthly: isMonthly
    };
    console.log(newTransaction);
    const newTransactions = [...transactions, newTransaction];

    newTransactions.sort((a, b) => {
      const aDate = moment(a.date, 'DD.MM.YYYY');
      const bDate = moment(b.date, 'DD.MM.YYYY');
      return aDate.isAfter(bDate);
    });
    this.setState({ transactions: newTransactions });
  }

  onToday = () => {
    const {transactions, date} = this.state;

    const currentMonthTransactions = transactions.filter(
      ({date: transactionDate}) =>
        moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month'),
    );

    const dailyMoney =
      currentMonthTransactions.reduce(
        (acc, transaction) =>
          transaction.sum > 0  || transaction.isMonthly ? transaction.sum + acc : acc,
        0,
      ) / moment(date).daysInMonth();

    const transactionsBeforeThisDayAndInThisDay = currentMonthTransactions.filter(
      ({date: transactionDate}) =>
        moment(transactionDate, 'DD.MM.YYYY').isBefore(
          date,
          'date',
        ) ||
        moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'date'),
    ).filter(
      ({isMonthly:flag}) => flag === false
    );

    const expanseBeforeToday = transactionsBeforeThisDayAndInThisDay.reduce(
      (acc, {sum}) => (sum < 0 ? acc + sum : acc),
      0,
    );

    const incomeBeforeToday = date.date() * dailyMoney;

    console.log({dailyMoney, expanseBeforeToday, incomeBeforeToday});

    return incomeBeforeToday + expanseBeforeToday;
    // const { transactions, date } = this.state;
    // const transactionForDay = transactions.filter(
    //   ({ date: transactionDate }) =>
    //     moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'day'),
    // )
    // .filter(
    //   ({isMonthly: flag}) => 
    //     flag === false,
    // );

    // console.log('s  ', transactionForDay);
    // const sumExpenseForDay = transactionForDay.reduce(
    //   (acc, { sum }) => (sum < 0 ? acc + sum : acc),
    //   0,
    // );
    // console.log("потрачено сегодня ", sumExpenseForDay )
    // return this.onAverageAmount() + sumExpenseForDay;
  }

  /* calculate amount by amount of days till end month */
  onAverageAmount = () => {
    const { transactions, date } = this.state;
    const transactionsForMonth = this.getAllTransactionsForMonth(transactions, date);
    const sumTransactionsForMonth = transactionsForMonth.reduce(
      (acc, { sum }) => (acc + sum),
      0,
    );
    return sumTransactionsForMonth / (moment(date).daysInMonth() - date.date() + 1);
  };

  /* get all transactions for month*/
  getAllTransactionsForMonth = (transactions, date) => {
    return transactions.filter(
      ({ date: transactionDate }) =>
        moment(transactionDate, 'DD.MM.YYYY').isSame(date, 'month'),
    );
  };

  render() {
    const { date, navSelected, transactions } = this.state;

    const todayMoney = this.onToday();
    const averageAmount = this.onAverageAmount();

    return (
      <div className="container">
        <section>
          <header>
            <h1>Реактивный бюджет</h1>

            <h3>{date.format('DD-MM-YYYY')}</h3>

            <div className="btn-group mr-2">
              <button type="button" className="btn btn-default btn-circle align-baseline" onClick={this.handleSubstractDay}>-</button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-circle align-baseline" onClick={this.handleAddDay}>+</button>
            </div>
            <p>{averageAmount < 0 ? 0 : averageAmount.toFixed(2)} ₽ - Суммы расходов с {date.format('DD.MM.YYYY')} и до конца мечяца</p>
            <p>{todayMoney < 0 ? 0 : todayMoney.toFixed(2)} ₽ - Ежедневная сумма расходов на период целого месяца + остаток прошлого дня. </p>
          </header>
          <main>

            <nav className="app-nav">
              <span name="expense"
                className={navSelected === 'expense' ? 'selected' : ''}
                onClick={this.handleNavClick}>
                Расходы сегодня
           </span>
              <span name="incomes"
                className={navSelected === 'incomes' ? 'selected' : ''}
                onClick={this.handleNavClick}>
                Доходы
           </span>
            </nav>

            {navSelected === 'expense' ? <Expense onSubmit={this.handleSubmitTransaction} />
              : <Incomes onSubmit={this.handleSubmitTransaction} />}

            <div className="row mt-5 white-block">
              <table className="table table-hover">
                <thead className="thead-inverse">
                  <tr>
                    <td>Дата</td>
                    <td>Сумма ₽</td>
                    <td>Категория</td>
                    <td>Обязательный платеж</td>
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
                    .map(({ date, sum, category, isMontly }, index) => (
                      <tr key={index}>
                        <td>{date}</td>
                        <td>{sum} ₽</td>
                        <td>{category}</td>
                        <td>{isMontly === true ? 'Да' : 'Нет'}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

          </main>
        </section>
      </div>
    );
  }
}

export default App;
