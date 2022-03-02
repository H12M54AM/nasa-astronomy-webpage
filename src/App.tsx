import React from 'react';
import './App.css';

// My Components
import LatestNews from './components/LatestNews/LatestNews';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LatestNews />
    </>
  )
}

export default App;