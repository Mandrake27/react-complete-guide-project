import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;
  const dateLang = 'en-Us';
  const month = date.toLocaleString(dateLang, { month: 'long' });
  const day = date.toLocaleString(dateLang, { day: 'numeric' });
  const year = date.toLocaleString(dateLang, { year: 'numeric' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{ month }</div>
      <div className="expense-date__day">{ day }</div>
      <div className="expense-date__year">{ year }</div>
    </div>)
};

export default ExpenseDate;
