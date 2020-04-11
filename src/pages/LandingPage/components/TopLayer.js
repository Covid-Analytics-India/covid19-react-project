import React from 'react';
import {useStyles} from '../styles';
import {useTranslation} from 'react-i18next';
import {Link, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import CallIcon from '@material-ui/icons/Call';
import {AccountIcon} from '../../../utils/icons/icons';

function TopLayer() {
  const classes = useStyles();
  const [t] = useTranslation();
  return (
    <>
      <div className={classes.contactUS}>
        <Button color="primary">
          <CallIcon
            className={classes.buttonIcon}
            width="30"
            height="28"
            viewBox="0 0 30 28"
          />
          {t('contact_us')}
        </Button>
      </div>
      <div className={classes.account}>
        <Button color="primary" component={Link} to="/home">
          <AccountIcon
            className={classes.buttonIcon}
            width="22"
            height="18"
            viewBox="0 0 22 18"
          />
          {t('menu')}
        </Button>
      </div>
    </>
  );
}

export default withRouter(TopLayer);
