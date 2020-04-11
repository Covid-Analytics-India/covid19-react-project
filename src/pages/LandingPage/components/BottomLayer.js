import React from 'react';
import {useStyles} from '../styles';
import {useTranslation} from 'react-i18next';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';

function BottomLayer() {
  const classes = useStyles();
  const [t] = useTranslation();
  const handleNav = (event, newValue) => {
    // funtion to Nav
  };
  return (
    <div className={classes.bottomContainer}>
      <Divider variant="middle" />
      <Tabs
        value={localStorage.getItem('i18nextLng')}
        onChange={handleNav}
        textColor="primary"
        centered
      >
        <Tab label={t('Tab1')} value="1" />
        <Tab label={t('Tab2')} value="2" />
        <Tab label={t('Tab2')} value="3" />
        <Tab label={t('Tab2')} value="4" />
      </Tabs>
    </div>
  );
}

export default BottomLayer;
