import React from 'react';
import LineChartCummulative from './LineChartCummulative';
import {useStyles} from './styles';

function Cummulative(props) {
  const {title, data, logChecked} = props;
  const classes = useStyles();
  return (
    <div className={classes.Cummulative}>
      <div className={classes.Title}>{title}</div>
      <LineChartCummulative data={data} logScale={logChecked} />
    </div>
  );
}
export default Cummulative;
