import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const { expenseItems } = props;
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);

  const filteredExpenses = filteredYear && filteredYear !== 'All' ? expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }) : expenseItems;

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={ filteredYear } onChangeFilter={ filterChangeHandler }/>
        <ExpensesList expenseItems={ filteredExpenses }/>
      </Card>
    </div>
  )
};

export default Expenses;
