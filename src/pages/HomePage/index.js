import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import LineCharts from './components/LineCharts';
import StateWise from './components/StateWise';
import TravelHistory from './components/TravelHistory';
import useTheme from '@material-ui/core/styles/useTheme';
import LandingSection from './components/LandingSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import GraphGroup from './components/GraphGroup';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const fetchGraphData = async () => {
      await dispatch(getAllGraphData);
    };
    fetchGraphData();
  }, [dispatch]);
  return Object.keys(graphData).length > 0 ? (
    <div className={classes.flexCol}>
      <div className={classes.root}>
        <div className={classes.compressor}>
          {/* Header Section  */}
          <LandingSection />

          {matches ? (
            <>
              <div className={classes.flexRow}>
                <div className={classes.flexCol}>
                  {/* CUMMULATIVE / Logarithmic */}
                  <LineCharts
                    data={graphData.country_wise}
                    title="Current Trends"
                  />
                  <Divider
                    light
                    variant="middle"
                    flexItem
                    style={{height: 1}}
                  />
                  {/* Day Wise */}
                  <LineCharts
                    data={graphData.country_wise}
                    title="Day-Wise Data"
                  />
                </div>
                <div className={classes.HeatMap}>
                  {/* HEATMAP / Bar */}
                  <StateWise
                    data={graphData.state_wise}
                    title="State-Wise Data"
                  />
                </div>
              </div>
              <Divider light variant="middle" flexItem style={{height: 1}} />
              <div className={classes.flexRow}>
                {/* Travel History */}
                <TravelHistory data={graphData.travel_history_analysis} />
                <div className={classes.PieContent}>
                  It has been observed that Most of the cases have association
                  of a person who has a travel history from the State of Delhi,
                  the capital, either by Airways or Railways.
                </div>
              </div>
            </>
          ) : (
            <>
              <GraphGroup
                title="Current Trends"
                group={[
                  {
                    data: graphData.country_wise,
                    title: 'LineCharts',
                  },
                  {
                    data: graphData.country_wise,
                    title: 'Day-Wise',
                  },
                ]}
              />

              {/* HEATMAP / Bar */}
              <StateWise data={graphData.state_wise} title="State-Wise Data" />

              {/* Travel History */}
              <TravelHistory data={graphData.travel_history_analysis} />
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
