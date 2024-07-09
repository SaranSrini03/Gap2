import React, { useState } from 'react';
import '../styles/SideBar.css';
import RightSideBar from './RightSideBar'; // Assuming you have a RightSideBar component

const SideBar = () => {
  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  // Function to calculate 10 years before today's date
  const getTenYearsBeforeDate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 10);
    return formatDate(today);
  };

  // Function to get today's date
  const getTodayDate = () => {
    const today = new Date();
    return formatDate(today);
  };

  // State for holding input values and RightSideBar visibility
  const [tickerName, setTickerName] = useState('');
  const [showRightSideBar, setShowRightSideBar] = useState(false); // Initially hidden

  // Function to handle button click to reveal RightSideBar
  const handleButtonClick = () => {
    setShowRightSideBar(!showRightSideBar); // Toggle the state
  };

  return (
    <div className='container'>
      <div className='valueContainer'>
        <h1>Input Parameters</h1>
        <p>Enter Ticker Name</p>
        <input
          type="text"
          placeholder='AAPL'
          value={tickerName}
          onChange={(e) => setTickerName(e.target.value)}
        />
        <p>Start Date</p>
        <input
          type="date"
          placeholder={`YYYY-MM-DD (e.g., ${getTenYearsBeforeDate()})`}
          value={getTenYearsBeforeDate()}
          onChange={() => {}}
        />
        <p>End Date</p>
        <input
          type="date"
          placeholder={`YYYY-MM-DD (e.g., ${getTodayDate()})`}
          value={getTodayDate()}
          onChange={() => {}}
        />
        <button onClick={handleButtonClick}>Get Backtest Strategy</button>
      </div>
      {showRightSideBar && <RightSideBar />}
    </div>
  );
};

export default SideBar;
