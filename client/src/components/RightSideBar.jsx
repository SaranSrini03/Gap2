import React, { useEffect, useState } from 'react';
import PieChart from './PieChart'; // Import the PieChart component
import '../styles/RightSideBar.css';
import HighchartsGraph from './HighCharts';

const RightSideBar = () => {
  const [showRects, setShowRects] = useState([false, false, false, false]); // State to manage the visibility of .rect elements

  // Sample data for the pie chart
  const pieChartData = [
    { name: 'Chrome', y: 61.41 },
    { name: 'Firefox', y: 11.84 },
    { name: 'Edge', y: 10.85 },
    { name: 'Safari', y: 4.67 },
    { name: 'Opera', y: 4.18 },
    { name: 'Others', y: 7.05 },
  ];

  useEffect(() => {
    const timeouts = showRects.map((_, index) =>
      setTimeout(() => {
        setShowRects(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      }, (index + 1) * 100) // Stagger each animation by 100ms (faster animation)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className='container2'>
      <p className='rightP'>Intraday Trading Strategy Backtest</p>
      <p className='p2'>Key Metrics</p>
      <div className='rectContainer'>
        {showRects.map((isShown, index) => (
          <div key={index} className={`rect ${isShown ? 'show' : ''}`}></div>
        ))}
      </div>
      <div className='bottomdiv'>
        <div className='graphContainer'>
          <HighchartsGraph />
        </div>
        <div className='piechartContainer'>
          <PieChart chartData={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
