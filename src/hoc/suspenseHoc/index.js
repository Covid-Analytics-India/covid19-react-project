import React, {Suspense} from 'react';

const suspenseHoc = (Component) => {
  class HocContent extends React.Component {
    render() {
      return (
        <Suspense fallback={<div className="loader" />}>
          <Component {...this.props} />
        </Suspense>
      );
    }
  }
  return HocContent;
};

export default suspenseHoc;
