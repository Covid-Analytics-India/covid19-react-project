import React from 'react';
import {useStyles} from './styles';
import PieChart from '../../modules/PieChart';

function GenderAnalysis(props) {
  const {title, data} = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.Title}>{title}</div>
      <div className={`${classes.GenderAnalysis}`}>
        <PieChart data={data} />
      </div>
    </>
  );
}
export default GenderAnalysis;
