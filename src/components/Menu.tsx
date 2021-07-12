import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu-Buttons">
      <div className="Menu-Button">
        <Link to="/play">
          <button type="button">Play</button>
        </Link>
      </div>
      <div className="Menu-Button">
        <Link to="/practice">
          <button type="button">Practice</button>
        </Link>
      </div>
      <div className="Menu-Button">
        <Link to="/options">
          <button type="button">Options</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
