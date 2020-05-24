import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import StateWise from './components/StateWise';
import TravelHistory from './components/TravelHistory';
import useTheme from '@material-ui/core/styles/useTheme';
import LandingSection from './components/LandingSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import GraphGroup from './components/GraphGroup';
import BarGraph from './components/StateWise/components/BarGraph';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
          {console.log(graphData)}
          {matches ? (
            <>
              <div className={classes.flexRow}>
                <GraphGroup
                  title="Current Trends"
                  group={[
                    {
                      data: graphData.country_wise,
                      title: 'Cummulative',
                    },
                    {
                      data: graphData.country_wise,
                      title: 'Day-Wise',
                    },
                  ]}
                />
                <div className={classes.HeatMap}>
                  {/* HEATMAP / Bar */}
                  <StateWise
                    data={graphData.state_wise}
                    barData={graphData.state_wise.state_wise_confirmed}
                    title="State-Wise Data"
                  />
                </div>
              </div>
              <br />
              <Divider light variant="middle" flexItem style={{height: 1}} />
              <div className={classes.flexRow}>
                {/* Travel History */}
                <TravelHistory data={graphData.travel_history_analysis} />
                <BarGraph
                  data={graphData.district_wise.district_wise_confirmed}
                />
              </div>
            </>
          ) : (
            <>
              <GraphGroup
                title="Current Trends"
                group={[
                  {
                    data: graphData.country_wise,
                    title: 'Cummulative',
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
              <BarGraph
                data={graphData.district_wise.district_wise_confirmed}
              />
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
