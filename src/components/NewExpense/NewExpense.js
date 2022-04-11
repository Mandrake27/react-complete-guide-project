import { useState } from 'react';

import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (newExpenseData) => {
    props.onAddNewExpense({
      id: Math.random().toString(),
      ...newExpenseData,
    });
    setIsEditing(false);
  }

  const startEditingHandler = () => setIsEditing(true);

  const cancelEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      { !isEditing && <button onClick={ startEditingHandler }>Add New Expense</button> }
      { isEditing && <NewExpenseForm onCancel={ cancelEditingHandler } onSaveExpenseData={ saveExpenseDataHandler }/> }
    </div>
  );
};

export default NewExpense;
