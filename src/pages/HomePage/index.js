import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import BinarySwitch from '../../modules/BinarySwitch';
import Cummulative from './components/Cummulative';
import StateWise from './components/StateWise';
import TravelHistory from './components/TravelHistory';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);
  const [logChecked, setLogChecked] = useState(false);
  const [barChecked, setBarChecked] = useState(false);

  useEffect(() => {
    dispatch(getAllGraphData);
  }, [dispatch]);
  return (
    <div style={{padding: 10, paddingTop: 80}} className={classes.root}>
      {/* CUMMULATIVE / Logarithmic */}
      <Cummulative
        data={graphData.country_wise.day_wise_confirmed}
        logChecked={logChecked}
      />
      <BinarySwitch
        leftVal="Linear"
        rightVal="Logarithmic"
        handleChange={setLogChecked}
        rightChecked={logChecked}
      />

      {/* HEATMAP / Bar */}
      <StateWise
        data={graphData.state_wise.state_wise_confirmed[0]}
        barChecked={barChecked}
      />
      <BinarySwitch
        leftVal="Heat Map"
        rightVal="Bar Graph"
        handleChange={setBarChecked}
        rightChecked={barChecked}
      />
      <Cummulative
        data={graphData.country_wise.day_wise_encountered}
        logChecked={logChecked}
      />
      <BinarySwitch
        leftVal="Linear"
        rightVal="Logarithmic"
        handleChange={setLogChecked}
        rightChecked={logChecked}
      />

      {/* Travel History */}
      <TravelHistory data={graphData.travel_history_analysis[0]} />
    </div>
  );
}

export default HomePage;
