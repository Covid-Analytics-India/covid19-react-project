import React from 'react';

import Footer from '../../modules/Footer';

const withFooter = (WrappedComponent) => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />,
];

export default withFooter;
