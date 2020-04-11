import React from 'react';

import Card from './components/Card';
import CardMedia from './components/CardMedia';
import CardContent from './components/CardContent';

function DishCard(props) {
  const {item} = props;
  return (
    <>
      <Card>
        <CardMedia src={item.image} veg={item._veg} vegOutlined />
        <CardContent
          name={item.name}
          rating={item.rating}
          raters={item.raters}
          price={item.price}
          qty={item.qty}
          currency={item.currency}
        />
      </Card>
    </>
  );
}
export default DishCard;
