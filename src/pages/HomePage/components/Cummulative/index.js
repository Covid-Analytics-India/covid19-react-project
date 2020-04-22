import React, {useState} from 'react';
import LineChart from './LineChart';
import BinarySwitch from '../../../../modules/BinarySwitch';
import {useStyles} from './styles';

function Cummulative(props) {
  const {title, data} = props;
  const classes = useStyles();
  const [logChecked, setLogChecked] = useState(false);
  return (
    <div className={classes.Cummulative}>
      <div className={classes.Title}>{title}</div>
      <LineChart data={data} logScale={logChecked} />
      <BinarySwitch
        leftVal="Linear"
        rightVal="Logarithmic"
        handleChange={setLogChecked}
        rightChecked={logChecked}
      />
    </div>
  );
}
export default Cummulative;
