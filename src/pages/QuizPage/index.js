import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import LandingSection from './components/LandingSection';
import TheQuiz from './components/TheQuiz';

import {useStyles} from './styles';

function QuizPage() {
  const classes = useStyles();
  const [qlist, setQlist] = useState([]);

  useEffect(() => {
    const list = [];
    const fetchGraphData = async () => {
      firebase
        .firestore()
        .collection('questions')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });
        })
        .then(() => setQlist(list))
        .then(() => console.log(list));
    };
    fetchGraphData();
  }, []);

  return true ? (
    <div className={classes.flexCol}>
      <div className={classes.root}>
        <div className={classes.compressor}>
          <LandingSection />
          <TheQuiz qlist={qlist} />
        </div>
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  );
}

export default QuizPage;
