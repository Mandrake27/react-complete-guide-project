import { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');


  const titleChangeHandler = ({ target }) => setEnteredTitle(target.value);
  const amountChangeHandler = ({ target }) => setEnteredAmount(target.value);
  const dateChangeHandler = ({ target }) => setEnteredDate(target.value);
  const submitHandler = (evt) => {
    evt.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(newExpense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={ submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" value={ enteredTitle } onChange={ titleChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input name="amount" type="number" value={ enteredAmount } min="0.01" step="0.01"
                 onChange={ amountChangeHandler }/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            value={ enteredDate }
            min="2022-04-05"
            max="2025-12-31"
            onChange={ dateChangeHandler }/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={ props.onCancel }>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
};

export default NewExpenseForm;
