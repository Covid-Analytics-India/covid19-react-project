import React from 'react';
import {useStyles} from './styles';
import Histogram from '../../modules/Histogram';

function AgeAnalysis(props) {
  const {title, data} = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.Title}>{title}</div>
      <div className={`${classes.AgeAnalysis}`}>
        <Histogram data={data} />
      </div>
    </>
  );
}
export default AgeAnalysis;
