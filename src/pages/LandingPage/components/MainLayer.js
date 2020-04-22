import React from 'react';
import {useStyles} from '../styles';
import {useTranslation} from 'react-i18next';

import logo from '../../../assets/logo.png';
import {Button} from '@material-ui/core';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

function MainLayer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  return (
    <div className={classes.midContainer}>
      <img className={classes.imgLogo} alt="logo" src={logo} />
      <Button
        className={classes.qrButton}
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={() => dispatch(push('/home'))}
      >
        {t('Wello_Horld')}
      </Button>
    </div>
  );
}

export default MainLayer;
