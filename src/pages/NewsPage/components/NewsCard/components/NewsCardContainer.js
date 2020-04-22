import React from 'react';

import {useStyles} from '../styles';

function NewsCardContainer(props) {
  const {children} = props;

  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>{children}</div>
    </>
  );
}
export default NewsCardContainer;
