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
import BeforeAfterLockdown from './components/BeforeAfterLockdown';
import AgeAnalysis from './components/AgeAnalysis';
import GenderAgeCorrelation from './components/GenderAgeCorrelation';
import GenderAnalysis from './components/GenderAnalysis';
import Rates from './components/Rates';
import Testing from './components/Testing';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(graphData);
  return Object.keys(graphData).length > 0 ? (
    <>
      <div className={classes.flexCol}>
        <div className={classes.root}>
          <div className={classes.compressor}>
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

                {graphData.before_vs_after_lockdown &&
                  graphData.age_analysis &&
                  graphData.gender_analysis &&
                  graphData.gender_age_correlation && (
                    <>
                      <br />
                      <Divider
                        light
                        variant="middle"
                        flexItem
                        style={{height: 1}}
                      />
                      <br />

                      <BeforeAfterLockdown
                        data={graphData.before_vs_after_lockdown}
                        title="Before vs After Lockdown"
                      />
                      <br />

                      <Rates
                        data={graphData.rates}
                        title="Mortality vs Recovery"
                      />
                      <br />

                      <Testing
                        data={graphData.testing_analysis}
                        title="Mortality vs Recovery"
                      />

                      <br />
                      <Divider
                        light
                        variant="middle"
                        flexItem
                        style={{height: 1}}
                      />
                      <br />

                      <AgeAnalysis
                        data={graphData.age_analysis}
                        title="Age Analysis"
                      />

                      <br />
                      <Divider
                        light
                        variant="middle"
                        flexItem
                        style={{height: 1}}
                      />
                      <br />

                      <GenderAnalysis
                        data={graphData.gender_analysis}
                        title="Gender Ratio of Patients"
                      />

                      <br />
                      <Divider
                        light
                        variant="middle"
                        flexItem
                        style={{height: 1}}
                      />
                      <br />

                      <GenderAgeCorrelation
                        data={graphData.gender_age_correlation}
                        title="Gender to Age Correlation"
                      />
                    </>
                  )}
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

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <StateWise
                  data={graphData.state_wise}
                  barData={graphData.state_wise.state_wise_confirmed}
                  title="State-Wise Data"
                />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <TravelHistory data={graphData.travel_history_analysis} />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

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

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <BeforeAfterLockdown
                  data={graphData.before_vs_after_lockdown}
                  title="Before vs After Lockdown"
                />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <Rates data={graphData.rates} title="Mortality vs Recovery" />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <Testing
                  data={graphData.testing_analysis}
                  title="Testing Analysis"
                />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <AgeAnalysis
                  data={graphData.age_analysis}
                  title="Age Analysis"
                />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <GenderAnalysis
                  data={graphData.gender_analysis}
                  title="Gender Ratio of Patients"
                />

                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />

                <GenderAgeCorrelation
                  data={graphData.gender_age_correlation}
                  title="Gender to Age Correlation"
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
