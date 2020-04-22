import React from 'react';
import {useStyles} from '../../styles';
import logo from '../../../../assets/logo.svg';

function LandingSection() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img alt="" src={logo} className={classes.headerImage} />
      <div className={classes.headerText}>COVID-19 Analytics India</div>
      <div className={classes.headerSubText}>
        More than just numbers and words...
      </div>
    </div>
  );
}

export default LandingSection;
