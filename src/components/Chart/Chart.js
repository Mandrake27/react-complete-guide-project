import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const { dataPoints } = props;

  const totalMax = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      { dataPoints.map(({ value, label }) => (
        <ChartBar
          key={ label }
          value={ value }
          maxValue={ totalMax }
          label={ label }
        />
      )) }
    </div>
  );
};

export default Chart;
