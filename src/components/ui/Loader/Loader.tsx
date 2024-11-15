import React from 'react';
import {useLayout} from '../../../hooks/useLayout';

const Loader = () => {
  const {showLoader} = useLayout();

  if (!showLoader) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
