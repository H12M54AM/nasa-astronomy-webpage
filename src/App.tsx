import React from 'react';
import './App.css';

// My Components
import LatestNews from './LatestNews';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LatestNews />
    </>
  )
}

export default App;