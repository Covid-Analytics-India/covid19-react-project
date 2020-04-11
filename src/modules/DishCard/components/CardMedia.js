import React from 'react';

import {useStyles} from '../styles';
import {VegIcon} from '../../../assets/icons';

function CardMedia(props) {
  const classes = useStyles();
  const {src, veg, vegOutlined} = props;
  return (
    <div style={{backgroundImage: `url(${src})`}} className={classes.cardMedia}>
      <VegIcon className={classes.vegIcon} outlined={vegOutlined} veg={veg} />
    </div>
  );
}
export default CardMedia;
