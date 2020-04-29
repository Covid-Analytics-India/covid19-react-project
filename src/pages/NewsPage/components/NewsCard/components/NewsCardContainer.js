import React from 'react';
import {useStyles} from '../styles';

function NewsCardContainer(props) {
  const classes = useStyles();
  return <div className={classes.card}>{props.children}</div>;
}
export default NewsCardContainer;
