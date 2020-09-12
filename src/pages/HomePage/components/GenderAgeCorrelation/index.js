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
        <Histogram
          data={data}
          correlation
          xlabel="Age in Years"
          ylabel="Number of Confirmed Cases (by Gender)"
          legend
        />
      </div>
    </>
  );
}
export default GenderAgeCorrelation;
