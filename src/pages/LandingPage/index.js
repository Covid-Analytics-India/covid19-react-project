import React from 'react';
import {useStyles} from './styles';
import TopLayer from './components/TopLayer';
import MainLayer from './components/MainLayer';
// import BottomLayer from './components/BottomLayer';

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopLayer />
      <MainLayer />
      {/* <BottomLayer /> */}
    </div>
  );
}

export default LandingPage;
