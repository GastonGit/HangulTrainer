import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Button">
        <Link to="/play" draggable="false">
          <button type="button">Play</button>
        </Link>
      </div>
      <div className="Header-Button">
        <Link to="/practice" draggable="false">
          <button type="button">Practice</button>
        </Link>
      </div>
      <div className="Header-Button">
        <Link to="/options" draggable="false">
          <button type="button">Options</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
