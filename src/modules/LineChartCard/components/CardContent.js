import React, {useState} from 'react';

import {
  useStyles,
  useCarouselStyles,
  useInlineStyles,
  useInlineNoMediaStyles,
} from '../styles';
import {StarIcon} from '../../../assets/icons';
import QuantityRocker from '../../QuantityRocker';

function CardContent(props) {
  const {name, raters, rating, price, qty, currency, variant, noMedia} = props;

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
  // Just for Demo State
  const [localQty, setQty] = useState(qty);

  const handleMinus = () => setQty(localQty - 1);
  const handlePlus = () => setQty(localQty + 1);

  return (
    <div className={classes.cardContent}>
      <div>
        <div className={classes.title}>{name}</div>
        <div className={classes.ratings}>
          <StarIcon width="17" height="17" /> <span>{rating}&nbsp;|&nbsp;</span>
          <span>{raters}&nbsp;ratings</span>
        </div>
      </div>
      <div className={classes.spaceBetween}>
        <>
          {currency}&nbsp;{price}
        </>
        <QuantityRocker
          value={localQty}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
        />
      </div>
    </div>
  );
}
export default CardContent;
