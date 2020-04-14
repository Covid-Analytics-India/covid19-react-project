import React from 'react';

import {
  useStyles,
  useCarouselStyles,
  useInlineNoMediaStyles,
  useInlineStyles,
} from '../styles';
import {VegIcon} from '../../../assets/icons';

function CardMedia(props) {
  const {src, veg, vegOutlined, children, variant, noMedia} = props;

  const defaultClasses = useStyles();
  const carouselClasses = useCarouselStyles();
  const inlineClasses = useInlineStyles();
  const inlineNoMediaClasses = useInlineNoMediaStyles();

  const selectClasses = (variant) => {
    switch (variant) {
      case 'carousel':
        return carouselClasses;
      case 'inline':
        return noMedia ? inlineNoMediaClasses : inlineClasses;
      default:
        return defaultClasses;
    }
  };
  const classes = selectClasses(variant);
  return (
    <div
      style={
        props.variant === 'carousel'
          ? {
              backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 0%, rgba(118, 118, 118, 0) 20.02%, #000000 73.3%), url(${src})`,
            }
          : noMedia
          ? {backgroundImage: 'none'}
          : {backgroundImage: `url(${src})`}
      }
      className={classes.cardMedia}
    >
      <VegIcon className={classes.vegIcon} outlined={vegOutlined} veg={veg} />
      {children}
    </div>
  );
}
export default CardMedia;
