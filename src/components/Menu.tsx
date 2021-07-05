import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="Menu">
        <Link to="/practice">
          <button type="button">Practice</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
