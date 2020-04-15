import React from 'react';
import LineChartCard from '../../modules/LineChartCard';
import {useStyles} from './styles';

function HomePage() {
  const classes = useStyles();
  return (
    <div style={{padding: 10}} className={classes.root}>
      Home page
      <br />
      ------------------------------
      <br />
      <br />
      <LineChartCard />
    </div>
  );
}

export default HomePage;
