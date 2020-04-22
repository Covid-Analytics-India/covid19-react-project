import React from 'react';

import {useStyles} from '../styles';

function CardMedia(props) {
  const {src} = props;

  const classes = useStyles();

  return <img className={classes.cardMedia} src={src} alt="news_image" />;
}
export default CardMedia;
