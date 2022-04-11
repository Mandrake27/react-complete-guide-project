import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ expenseItems }) => {
  if (expenseItems.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }

  return <ul className="expenses-list"> {
    expenseItems.map(({ id, title, date, amount }) =>
      <ExpenseItem key={ id } title={ title } date={ date } amount={ amount }/>
    )
  } </ul>
};

export default ExpensesList;
