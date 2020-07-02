import React from 'react';
import {useStyles} from './styles';
import MortalityRates from './MortalityRates';
import RecoveryRates from './RecoveryRates';

function Rates(props) {
  const {title, data} = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.Title}>{title}</div>
      <div className={`${classes.BeforeAfterLockdown} ${classes.GraphGroup}`}>
        <MortalityRates data={data.mortality_rate} />
        <br />
        <RecoveryRates data={data.recovery_rate} />
      </div>
    </>
  );
}
export default Rates;
