import React from 'react';
import {useStyles} from '../../styles';
import badge from '../../../../assets/geek-badge.svg';
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from '@material-ui/styles/withStyles';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    width: '100%',
    backgroundColor: '#F1F5FF',
    borderRadius: 6,
  },
  bar: {
    borderRadius: 6,
    backgroundColor: '#4285F4',
  },
})(LinearProgress);

function Progress({prog}) {
  const classes = useStyles();
  return (
    <div className={classes.flexCol}>
      <img
        alt=""
        src={badge}
        style={{filter: `grayscale(${prog >= 75 ? 0 : 100}%)`}}
        className={classes.headerImage}
      />
      <br />
      <BorderLinearProgress variant="determinate" value={prog} />
      <br />
      <div className={classes.headerSubText}>
        {prog < 75
          ? 'Score 75% to Unlock the Badge!'
          : 'Complete the Test to Download your Badge!'}
      </div>
    </div>
  );
}

export default Progress;
