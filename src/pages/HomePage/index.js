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
import DistrictWise from './components/DistrictWise';
import Footer from '../../modules/Footer';

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
    <>
      <div className={classes.flexCol}>
        <div className={classes.root}>
          <div className={classes.compressor}>
            {/* Header Section  */}
            <LandingSection />
            {matches ? (
              <>
                <div className={classes.flexRow}>
                  <GraphGroup
                    title=""
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
                <br />
                <div className={classes.flexRow}>
                  {/* Travel History */}
                  <TravelHistory data={graphData.travel_history_analysis} />
                  <DistrictWise
                    title="Top District Data"
                    group={[
                      {
                        data: graphData.district_wise.district_wise_confirmed,
                        title: 'Confirmed',
                      },
                      {
                        data: graphData.district_wise.district_wise_active,
                        title: 'Active',
                      },
                      {
                        data: graphData.district_wise.district_wise_recovered,
                        title: 'Recovered',
                      },
                      {
                        data: graphData.district_wise.district_wise_deaths,
                        title: 'Deceased',
                      },
                    ]}
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
                <StateWise
                  data={graphData.state_wise}
                  barData={graphData.state_wise.state_wise_confirmed}
                  title="State-Wise Data"
                />

                {/* Travel History */}
                <TravelHistory data={graphData.travel_history_analysis} />
                <DistrictWise
                  title="Top District Data"
                  group={[
                    {
                      data: graphData.district_wise.district_wise_confirmed,
                      title: 'Confirmed',
                    },
                    {
                      data: graphData.district_wise.district_wise_active,
                      title: 'Active',
                    },
                    {
                      data: graphData.district_wise.district_wise_recovered,
                      title: 'Recovered',
                    },
                    {
                      data: graphData.district_wise.district_wise_deaths,
                      title: 'Deceased',
                    },
                  ]}
                />
              </>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div className="loader"></div>
  );
}

export default HomePage;
