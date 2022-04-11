import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: Math.random().toString(),
    title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
  },
  {
    id: Math.random().toString(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (newExpense) => {
    setExpenses(((prevExpenses) => [newExpense, ...prevExpenses]));
  }

  return (
    <div>
      <NewExpense onAddNewExpense={ addNewExpenseHandler }/>
      <Expenses expenseItems={ expenses }/>
    </div>
  );
}

export default App;
