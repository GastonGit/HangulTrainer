import React from 'react';
import hangulChart from '../../assets/hangul-chart.png';

const Practice = () => {
  return (
    <div>
      <div className="Menu-Button">
        <img src={hangulChart} alt="Hangul alphabet" draggable="false" />
      </div>
    </div>
  );
};

export default Practice;
