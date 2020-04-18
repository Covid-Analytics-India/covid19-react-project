import React from 'react';

import {useStyles} from '../styles';

function CardMedia(props) {
  const {src} = props;

  const classes = useStyles();

  return (
    <div
      style={{backgroundImage: `url(${src})`}}
      className={classes.cardMedia}
    />
  );
}
export default CardMedia;
