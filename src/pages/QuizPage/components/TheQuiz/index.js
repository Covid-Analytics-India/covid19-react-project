import React, {useState} from 'react';
import {useStyles} from '../../styles';
import badge from '../../../../assets/geek-badge.svg';
import PageTitle from '../../../../modules/PageTitle';
import {Button} from '@material-ui/core';

function LandingSection() {
  const classes = useStyles();
  const [start, setStart] = useState(false);
  return start ? (
    <>
      <div className={classes.header}>
        <div className={classes.flexCol}>
          <div className={classes.headerSubText}>
            Really think you know all about SARS-COV-2 (Yes, thats the real name
            of COVID-19)?
          </div>
          <div className={classes.headerText}>COVID-19 Quiz</div>
          <div className={classes.headerSubText}>
            Take the test to know more! Score 75% to recieve the COVID19-Geek
            Badge!
          </div>
        </div>
        <img alt="" src={badge} className={classes.headerImage} />
      </div>
      <PageTitle>Get Awared</PageTitle>
    </>
  ) : (
    <Button classes={{root: classes.startBtn}} onClick={() => setStart(true)}>
      START
    </Button>
  );
}

export default LandingSection;
