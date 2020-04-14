import React from 'react';

import Card from './components/Card';
import CardMedia from './components/CardMedia';
import CardContent from './components/CardContent';

function DishCard(props) {
  const {item, variant, noMedia} = props;
  const {name, image, _veg, raters, rating, price, qty, currency} = item;
  return (
    <>
      <Card variant={variant} noMedia={noMedia}>
        <CardMedia
          src={image}
          veg={_veg}
          vegOutlined
          variant={variant}
          noMedia={noMedia}
        >
          <CardContent
            name={name}
            rating={rating}
            raters={raters}
            price={price}
            qty={qty}
            currency={currency}
            variant={variant}
            noMedia={noMedia}
          />
        </CardMedia>
      </Card>
    </>
  );
}
export default DishCard;
