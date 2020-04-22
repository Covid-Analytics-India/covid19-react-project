import React from 'react';
import PieChart from './PieChart';
import {useStyles} from './styles';
function TravelHistory(props) {
  const {data} = props;
  const classes = useStyles();
  return (
    <div className={classes.TravelHistory}>
      <div className={classes.Title}>{data.title}</div>
      <PieChart data={data} />
    </div>
  );
}
export default TravelHistory;
