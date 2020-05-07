import React, {useState} from 'react';
import {useStyles} from '../../styles';
import {Button, CircularProgress} from '@material-ui/core';
import Options from './Options';
import Progress from './Progress';
import badge from '../../../../assets/geek-badge.svg';

function TheQuiz({qlist}) {
  const classes = useStyles();
  const [result, setResult] = useState(false);
  const [start, setStart] = useState(false);
  const [ques, setQues] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [optLock, setOptLock] = useState(false);

  const handleNext = (ans) => {
    if (ques + 1 < qlist.length) {
      setQues(ques + 1);
      if (ques >= answered) {
        setAnswered(answered + 1);
        if (ans === qlist[ques].answer) setCorrect(correct + 1);
      }
    }
  };

  const handleResult = (ans) => {
    if (ques >= answered) {
      setAnswered(answered + 1);
      if (ans === qlist[ques].answer) setCorrect(correct + 1);
      setResult(true);
    }
  };

  const handlePrev = () => {
    ques > 0 && setQues(ques - 1);
  };

  const handleTestReset = () => {
    setStart(true);
    setQues(0);
    setCorrect(0);
    setAnswered(0);
    setOptLock(false);
    setResult(false);
  };
  return start ? (
    <>
      <div className={classes.QuizContainer}>
        {result ? (
          <div className={classes.flexCol}>
            <h1>You Scored:</h1>
            <br />
            <h3>
              {correct}/23 | {((100 * correct) / 23).toFixed(2)}%
            </h3>
            <br />
            {(100 * correct) / 23 >= 75 ? (
              <>
                <img alt="" src={badge} className={classes.headerImage} />
                <h1>Congratulations COVID19-Geek!</h1>
                <br />
                <h3>You&apos;ve won the COVID19-Geek Badge</h3>
                <br />
                <pre>https://covidanalytics.live</pre>
                <br />
                <h4>
                  Copy this link and invite your friends and compare your
                  scores!
                </h4>
              </>
            ) : (
              <>
                <img
                  alt=""
                  src={badge}
                  className={classes.headerImage}
                  style={{filter: `grayscale(${90}%)`}}
                />
                <h1>Sorry, Better Luck Next Time!</h1>
                <br />
                <h3>
                  Please Refer to sources from WHO (
                  <a
                    href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                  ) and mygov.in (
                  <a
                    href="https://www.mygov.in/covid-19/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                  ) to learn more about the virus.
                </h3>
                <Button onClick={handleTestReset} color="secondary">
                  Retake the Test
                </Button>
                <br />
                <pre>https://covidanalytics.live</pre>
                <br />
                <h4>
                  Copy this link and invite your friends and compare your
                  scores!
                </h4>
              </>
            )}
          </div>
        ) : (
          <div className={classes.flexColStart}>
            <div className={classes.flexRowSpace}>
              <div className={classes.headerSubText}>
                Q {ques + 1}/{qlist.length}:
              </div>
              <div className={classes.headerSubText}>
                Score {correct}/{answered}
                {' | '}
                {answered > 0 &&
                  `(${((100 * correct) / answered).toFixed(2)}%)`}
              </div>
            </div>
            <div className={classes.headerText}>{qlist[ques].question}</div>
            <div className={classes.flexRowSpaceStart}>
              <Options
                question={qlist[ques]}
                handleNext={ques + 1 < qlist.length ? handleNext : false}
                handlePrev={ques > 0 ? handlePrev : false}
                handleResult={handleResult}
                answered={ques < answered - 1}
                optLock={optLock}
                setOptLock={setOptLock}
              />
              <Progress prog={answered > 0 ? (100 * correct) / answered : 0} />
            </div>
            {optLock && (
              <>
                <h3>Enlighten Yourself!</h3>
                <div className={classes.headerSubText}>{qlist[ques].info}</div>
                <br />
                <div className={classes.headerSubText}>
                  Source:{' '}
                  <a
                    href={qlist[ques].source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {qlist[ques].source}
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  ) : (
    <Button
      classes={{root: classes.startBtn}}
      onClick={() => setStart(true)}
      disabled={qlist.length === 0}
    >
      {qlist.length === 0 ? (
        <>
          <CircularProgress size={10} color="primary" /> &nbsp;Loading...
        </>
      ) : (
        'START'
      )}
    </Button>
  );
}

export default TheQuiz;
