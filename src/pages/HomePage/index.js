import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import Cummulative from './components/Cummulative';
import StateWise from './components/StateWise';
import TravelHistory from './components/TravelHistory';
import Particles from 'react-particles-js';
import useTheme from '@material-ui/core/styles/useTheme';
import {particleParams} from './config.js';
import LandingSection from './components/LandingSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    dispatch(getAllGraphData);
  }, [dispatch]);
  return Object.keys(graphData).length > 0 ? (
    <div className={classes.flexCol}>
      {/* Particles */}
      <Particles
        params={particleParams(theme, matches)}
        className={classes.particles}
        height="100vh"
        width="100vw"
      />
      <div className={classes.root}>
        <div className={classes.compressor}>
          {/* Header Section  */}
          <LandingSection />

          {matches ? (
            <>
              <div className={classes.flexRow}>
                <div className={classes.flexCol}>
                  {/* CUMMULATIVE / Logarithmic */}
                  <Cummulative
                    data={graphData.country_wise.day_wise_confirmed}
                    title="Current Trends"
                  />
                  <Divider
                    light
                    variant="middle"
                    flexItem
                    style={{height: 1}}
                  />
                  {/* Day Wise */}
                  <Cummulative
                    data={graphData.country_wise.day_wise_encountered}
                    title="Day-Wise Data"
                  />
                </div>
                <div className={classes.HeatMap}>
                  {/* HEATMAP / Bar */}
                  <StateWise
                    data={graphData.state_wise.state_wise_confirmed[0]}
                    title="State-Wise Data"
                  />
                </div>
              </div>
              <Divider light variant="middle" flexItem style={{height: 1}} />
              <div className={classes.flexRow}>
                {/* Travel History */}
                <TravelHistory data={graphData.travel_history_analysis[0]} />
                <div className={classes.PieContent}>
                  It has been observed that Most of the cases have association
                  of a person who has a travel history from the State of Delhi,
                  the capital, either by Airways or Railways.
                </div>
              </div>
            </>
          ) : (
            <>
              {/* CUMMULATIVE / Logarithmic */}
              <Cummulative
                data={graphData.country_wise.day_wise_confirmed}
                title="Day-Wise Data"
              />

              {/* HEATMAP / Bar */}
              <StateWise
                data={graphData.state_wise.state_wise_confirmed[0]}
                title="State-Wise Data"
              />

              {/* Day Wise */}
              <Cummulative
                data={graphData.country_wise.day_wise_encountered}
                title="State-Wise Data"
              />

              {/* Travel History */}
              <TravelHistory data={graphData.travel_history_analysis[0]} />
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  );
}

export default HomePage;
