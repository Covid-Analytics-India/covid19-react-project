import React from 'react';
import LineChart from './LineChart';
import {useStyles} from './styles';

function Cummulative(props) {
  const {title, data, logChecked} = props;
  const classes = useStyles();
  return (
    <div className={classes.Cummulative}>
      <div className={classes.Title}>{title}</div>
      <LineChart data={data} logScale={logChecked} />
    </div>
  );
}
export default Cummulative;
