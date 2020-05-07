import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';

import LandingSection from './components/LandingSection';
import TheQuiz from './components/TheQuiz';

import {useStyles} from './styles';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const qlist = [];

  useEffect(() => {
    const fetchGraphData = async () => {
      firebase
        .firestore()
        .collection('questions')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            qlist.push(doc.data());
          });
        })
        .then(console.log(qlist));
    };
    fetchGraphData();
  }, []);
  // Object.keys(graphData).length > 0 ? (
  return true ? (
    <div className={classes.flexCol}>
      <div className={classes.root}>
        <div className={classes.compressor}>
          {/* Header Section  */}
          <LandingSection />

          {matches ? (
            <>
              <div className={classes.flexRow}>
                <div className={classes.flexCol}>
                  <TheQuiz qlist={qlist} />
                </div>
              </div>
              <Divider light variant="middle" flexItem style={{height: 1}} />
              <div className={classes.flexRow}>
                With Love for Healthcare Workers, <br /> Team, <br />
                CovidAnalyticsIndia &heart;
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  );
}

export default HomePage;
