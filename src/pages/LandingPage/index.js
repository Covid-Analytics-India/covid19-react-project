import React from 'react';
import {useStyles} from './styles';
import TopLayer from './components/TopLayer';
import MainLayer from './components/MainLayer';

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopLayer />
      <MainLayer />
    </div>
  );
}

export default LandingPage;
