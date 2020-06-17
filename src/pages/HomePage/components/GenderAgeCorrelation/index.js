import React from 'react';
import {useStyles} from './styles';
import Histogram from '../../modules/Histogram';

function GenderAgeCorrelation(props) {
  const {title, data} = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.Title}>{title}</div>
      <div className={`${classes.GenderAgeCorrelation}`}>
        <Histogram data={data} correlation />
      </div>
    </>
  );
}
export default GenderAgeCorrelation;
