import React from 'react';
import PieChart from './PieChart';

function TravelHistory(props) {
  const {data} = props;
  return <PieChart data={data} />;
}
export default TravelHistory;
