import React, {useState} from 'react';

import {useStyles} from '../styles';
import {StarIcon} from '../../../assets/icons';
import QuantityRocker from '../../QuantityRocker';

function CardContent(props) {
  const classes = useStyles();
  const {name, raters, rating, price, qty, currency} = props;

  // Just for Demo State
  const [localQty, setQty] = useState(qty);

  const handleMinus = () => setQty(localQty - 1);
  const handlePlus = () => setQty(localQty + 1);

  return (
    <div className={classes.cardContent}>
      <div>
        <div className={classes.title}>{name}</div>
        <div className={classes.ratings}>
          <StarIcon width="17" height="17" />{' '}
          <span style={{color: 'rgba(33, 33, 33, 0.75)'}}>
            {rating}&nbsp;|&nbsp;
          </span>
          <span style={{color: 'rgba(33, 33, 33, 0.75)'}}>
            {raters}&nbsp;ratings
          </span>
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
