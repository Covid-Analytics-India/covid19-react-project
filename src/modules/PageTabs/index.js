import React from 'react';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import StyledTabs from './components/StyledTabs';
import Tab from '@material-ui/core/Tab';
import {push} from 'connected-react-router';
import {useDispatch, useSelector} from 'react-redux';

function PageTabs() {
  const classes = useStyles();
  const [t] = useTranslation();

  const path = useSelector((state) => state.router.location.pathname);
  const dispatch = useDispatch();

  const handleNav = (event, newValue) => {
    if (newValue !== path) {
      dispatch(push(newValue));
    }
  };
  return (
    <StyledTabs value={path} onChange={handleNav} centered>
      <Tab
        className={classes.tab}
        label={t('Home')}
        value="/"
        disableRipple={true}
      />
      <Tab
        className={classes.tab}
        label={t('News')}
        value="/news"
        disableRipple={true}
      />
      <Tab
        className={classes.tab}
        label={t('Test Yourself')}
        value="/quiz"
        disableRipple={true}
      />
      {/* <Tab
        className={classes.tab}
        label={t('Tips')}
        value="/tips"
        disableRipple={true}
      />
      <Tab
        className={classes.tab}
        label={t('Research')}
        value="/research"
        disableRipple={true}
      /> */}
    </StyledTabs>
  );
}

export default PageTabs;
