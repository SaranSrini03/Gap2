import React from 'react'
import './App.css'
import SideBar from './components/SideBar';
import RightSideBar from './components/RightSideBar';

const App = () => {
  return (
    <div className="grid-container">
      <SideBar />
      <RightSideBar />
    </div>
  )
}

export default App