import React from 'react';
import { Link } from 'react-router-dom';

const Practice = () => {
  return (
    <div>
      <div className="Menu">
        <Link to="/">
          <button type="button">Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Practice;
