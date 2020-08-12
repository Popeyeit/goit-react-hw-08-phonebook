import Loader from 'react-loader-spinner';
import React from 'react';

const Loading = () => {
  return (
    <Loader
      className="loader"
      type="ThreeDots"
      color="#FFFF00"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default Loading;
