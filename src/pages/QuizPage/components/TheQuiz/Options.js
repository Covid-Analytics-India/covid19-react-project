import React, {useState} from 'react';
import {useStyles} from '../../styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';
import {ButtonGroup} from '@material-ui/core';

function Options({
  handleNext,
  handlePrev,
  optLock,
  setOptLock,
  answered,
  question,
  handleResult,
}) {
  const {options, answer} = question;
  const theme = useTheme();
  const classes = useStyles();
  const [opt, setOpt] = useState(null);

  const handleOpt = (answer) => {
    !optLock && setOpt(answer);
    setOptLock(true);
  };

  const optBkg = (idx) => {
    if (opt === idx && opt !== answer && optLock) return 'red';
    else if (idx === answer && optLock) return 'green';
    else return theme.palette.background.paper;
  };

  return (
    <div className={classes.flexColStart}>
      {options.map((option, index) => {
        return option !== 'NULL' ? (
          <div
            key={index}
            onClick={() => handleOpt(index + 1)}
            className={classes.flexRowStart + ' ' + classes.option}
            style={{background: optBkg(index + 1)}}
          >
            <div>{index + 1}. &nbsp;</div>
            <div>{option}</div>
          </div>
        ) : (
          <></>
        );
      })}
      <ButtonGroup>
        {handlePrev && (
          <Button
            color="default"
            onClick={() => {
              setOptLock(true);
              handlePrev();
            }}
          >
            Previous
          </Button>
        )}
        {handleNext
          ? optLock && (
              <Button
                color="secondary"
                onClick={() => {
                  answered === false && setOptLock(false);
                  handleNext(opt);
                }}
              >
                Next
              </Button>
            )
          : optLock && (
              <Button
                color="secondary"
                onClick={() => {
                  handleResult(opt);
                }}
              >
                See Results
              </Button>
            )}
      </ButtonGroup>
    </div>
  );
}

export default Options;
