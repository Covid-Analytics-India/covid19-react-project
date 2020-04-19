import React from 'react';
import HeatMap from './components/HeatMap';
import BarGraph from './components/BarGraph';

function StateWise(props) {
  const {barChecked, data} = props;
  return barChecked ? <BarGraph data={data} /> : <HeatMap data={data} />;
}
export default StateWise;
