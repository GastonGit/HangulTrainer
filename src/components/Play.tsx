import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => {
  return (
    <div>
      <div className="Menu-Button">
        <Link to="/">
          <button type="button">Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Play;
