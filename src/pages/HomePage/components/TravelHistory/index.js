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
      <div className={classes.PieContent}>
        It has been observed that Most of the cases have association of a person
        who has a travel history from the State of Delhi, the capital, either by
        Airways or Railways.
      </div>
    </div>
  );
}
export default TravelHistory;
