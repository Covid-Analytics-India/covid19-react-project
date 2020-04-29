import React from 'react';
import {useStyles} from '../styles';
// import {useTranslation} from 'react-i18next';

import logo from '../../../assets/bkg1.svg';
// import logo from '../../../assets/logo.png';
// import {Button} from '@material-ui/core';
// import {push} from 'connected-react-router';
// import {useDispatch} from 'react-redux';

function MainLayer() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [t] = useTranslation();
  return (
    <div className={classes.midContainer}>
      <h1>
        <b>Oops!</b>
      </h1>
      <h2>Sorry, Site is currently under maintenance.</h2>
      <h3>Please come back after some time!</h3>
      <h4>
        <i>And Stay Safe!</i>
      </h4>
      <h5>
        Not because its trending, but because <b>We Care!</b>
      </h5>
      <img className={classes.imgLogo} alt="logo" src={logo} />
      {/* <Button
        className={classes.qrButton}
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={() => dispatch(push('/home'))}
      >
        {t('Wello_Horld')}
      </Button> */}
    </div>
  );
}

export default MainLayer;
