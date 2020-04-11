import React from 'react';

import {useStyles} from '../styles';

function Card(props) {
  const classes = useStyles();
  const {children} = props;
  return (
    <>
      <div className={classes.card}>{children}</div>
    </>
  );
}
export default Card;
