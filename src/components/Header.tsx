import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Button">
        <Link to="/play">
          <button type="button">Play</button>
        </Link>
      </div>
      <div className="Header-Button">
        <Link to="/practice">
          <button type="button">Practice</button>
        </Link>
      </div>
      <div className="Header-Button">
        <Link to="/options">
          <button type="button">Options</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
