import React from 'react';
import {useStyles} from './styles';
import AntSwitch from '../AntSwitch';

function BinarySwitch({leftVal, rightVal, handleChange, rightChecked}) {
  const classes = useStyles();

  const publishChange = (e) => {
    handleChange(e.target.checked);
  };

  return (
    <div className={classes.logSwitch}>
      <span className={!rightChecked ? classes.enabled : ''}>{leftVal}</span>
      <AntSwitch onChange={publishChange} checked={rightChecked} />
      <span className={rightChecked ? classes.enabled : ''}>{rightVal}</span>
    </div>
  );
}

export default BinarySwitch;
