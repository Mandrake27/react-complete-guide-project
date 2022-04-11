import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const { expenses } = props;

  const CHART_DATA_POINTS = [
    { label: 'Jan', value: 0, },
    { label: 'Feb', value: 0, },
    { label: 'Mar', value: 0, },
    { label: 'Apr', value: 0, },
    { label: 'May', value: 0, },
    { label: 'Jun', value: 0, },
    { label: 'Jul', value: 0, },
    { label: 'Aug', value: 0, },
    { label: 'Sep', value: 0, },
    { label: 'Oct', value: 0, },
    { label: 'Nov', value: 0, },
    { label: 'Dec', value: 0, },
  ];

  for (const { date, amount } of expenses) {
    const expenseMonth = date.getMonth();
    CHART_DATA_POINTS[expenseMonth].value += amount;
  }

  return <Chart dataPoints={ CHART_DATA_POINTS }/>
};

export default ExpensesChart;
