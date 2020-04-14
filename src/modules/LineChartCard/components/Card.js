import React from 'react';

import {
  useStyles,
  useCarouselStyles,
  useInlineStyles,
  useInlineNoMediaStyles,
} from '../styles';

function Card(props) {
  const {children, variant, noMedia} = props;

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
    <>
      <div className={classes.card}>{children}</div>
    </>
  );
}
export default Card;
