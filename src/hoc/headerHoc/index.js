import React from 'react';

const headerHoc = (WrapComponent) => {
  class HocContent extends React.Component {
    render() {
      return (
        <>
          <div>---------------- header ---------------</div>

          <WrapComponent />
        </>
      );
    }
  }
  return HocContent;
};

export default headerHoc;
