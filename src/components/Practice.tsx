import React from 'react';
import { Link } from 'react-router-dom';
import hangulChart from '../../assets/hangul-chart.png';

const Practice = () => {
  return (
    <div>
      <div className="Menu">
        <Link to="/">
          <button type="button">Menu</button>
        </Link>
        <img src={hangulChart} alt="Hangul alphabet" />
      </div>
    </div>
  );
};

export default Practice;
