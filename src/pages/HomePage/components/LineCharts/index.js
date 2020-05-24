import React from 'react';
import LineChartCummulative from './LineChartCummulative';
import {useStyles} from './styles';
import LineChartDayWise from './LineChartDayWise';

function Cummulative(props) {
  const {title, data, logChecked, type} = props;
  const classes = useStyles();
  return (
    <div className={classes.Cummulative}>
      <div className={classes.Title}>{title}</div>
      {type === 0 ? (
        <LineChartCummulative data={data} logScale={logChecked} />
      ) : (
        <LineChartDayWise data={data} logScale={logChecked} />
      )}
    </div>
  );
}
export default Cummulative;
