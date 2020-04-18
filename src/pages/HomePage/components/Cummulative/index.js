import React from 'react';
import LineChart from './LineChart';

function Cummulative(props) {
  const {logChecked, data} = props;
  return <LineChart data={data} logScale={logChecked} />;
}
export default Cummulative;
