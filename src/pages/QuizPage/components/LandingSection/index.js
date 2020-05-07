import React from 'react';
import {useStyles} from '../../styles';
import badge from '../../../../assets/geek-badge.svg';

function LandingSection() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.flexRow}>
          <img alt="" src={badge} className={classes.headerImageSmall} />
          <div className={classes.flexColStart + ' ' + classes.headCompress}>
            <div className={classes.headerSubText}>
              Do you really think you know all about SARS-COV-2 (Yes, thats the
              real name of COVID-19)?
            </div>
            <div className={classes.headerText}>COVID-19 Quiz</div>
            <div className={classes.headerSubText}>
              Take the test to know more! Score 75% to recieve the COVID19-Geek
              Badge!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
