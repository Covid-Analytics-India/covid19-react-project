import React, {useState} from 'react';
import HeatMap from './components/HeatMap';
import BarGraph from './components/BarGraph';
import {useStyles} from './styles';
import BinarySwitch from '../../../../modules/BinarySwitch';
function StateWise(props) {
  const {title, data, barData} = props;
  const classes = useStyles();
  const [barChecked, setBarChecked] = useState(false);
  return (
    <div className={classes.StateWise}>
      <div className={classes.Title}>{title}</div>
      <div className={classes.Content}>
        {barChecked ? <BarGraph data={barData} /> : <HeatMap geodata={data} />}
      </div>
      <BinarySwitch
        leftVal="Heat Map"
        rightVal="Bar Graph"
        handleChange={setBarChecked}
        rightChecked={barChecked}
      />
    </div>
  );
}
export default StateWise;
