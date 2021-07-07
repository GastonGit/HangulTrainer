import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="Menu-Button">
        <Link to="/">
          <button type="button">Play</button>
        </Link>
      </div>
      <div className="Menu-Button">
        <Link to="/practice">
          <button type="button">Practice</button>
        </Link>
      </div>
      <div className="Menu-Button">
        <Link to="/">
          <button type="button">Options</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
