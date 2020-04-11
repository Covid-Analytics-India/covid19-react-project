import React from 'react';
import DishCard from '../../modules/DishCard';

const item = {
  name: 'Chicken Balls',
  _veg: false,
  rating: '4.5',
  raters: '14,602',
  price: '230',
  currency: '₹',
  qty: 2,
  image:
    'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/9928231106_bb9d6f08e8_z.jpg?itok=lFabuHMn',
};

function HomePage() {
  return (
    <div style={{padding: 50}}>
      Home page
      <br />
      ------------------------------
      <br />
      <br />
      <DishCard item={item} />
    </div>
  );
}

export default HomePage;
