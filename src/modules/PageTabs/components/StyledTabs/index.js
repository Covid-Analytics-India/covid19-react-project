import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './styles.js';

const StyledTabs = withStyles(styles)((props) => (
  <Tabs {...props} TabIndicatorProps={{children: <div />}} />
));

export default StyledTabs;
