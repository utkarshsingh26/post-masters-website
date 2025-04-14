import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [2000, 2800, 3000, 3400, 4000, 4500, 5000];
const pData = [2000, 1398, 1800, 2000, 1800, 2200, 2105];
const xLabels = [
  'Year 1',
  'Year 2',
  'Year 3',
  'Year 4',
  'Year 5',
  'Year 6',
  'Year 7',
];

export default function SimpleLineChart() {
  return (
    <LineChart
      sx={{pt: -4}}
      width={800}
      height={500}
      series={[
        { data: uData, label: 'You hired me', color: 'green' },
        { data: pData, label: 'You did not hire me', color: 'red' }
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels, label: 'Time (Years)' }]}
     // yAxis= {[{label: 'Revenue ($)', labelStyle: { transform: 'rotate(-90deg) translate(-20%, -40%)', textAnchor: 'middle', dominantBaseline: 'middle'} }]}
    />
  );
}
