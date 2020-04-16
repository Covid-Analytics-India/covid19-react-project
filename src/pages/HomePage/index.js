import React, {useEffect, useState} from 'react';
import LineChartCard from '../../modules/LineChartCard';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import AntSwitch from '../../modules/AntSwitch';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);
  const [logScale, setLogScale] = useState(false);

  const handleLog = (event) => {
    setLogScale(event.target.checked);
  };

  useEffect(() => {
    dispatch(getAllGraphData);
  }, [dispatch]);
  return (
    <div style={{padding: 10}} className={classes.root}>
      Home page
      <br />
      ------------------------------
      <br />
      <br />
      <LineChartCard
        data={graphData.country_wise.day_wise_confirmed}
        logScale={logScale}
      />
      <div className={classes.logSwitch}>
        <span className={!logScale ? classes.enabled : ''}>Linear</span>
        <AntSwitch onChange={handleLog} checked={logScale} />
        <span className={logScale ? classes.enabled : ''}>Logarthmic</span>
      </div>
    </div>
  );
}

export default HomePage;
