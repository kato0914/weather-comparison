import React from 'react';
import Header from './components/Header';
import WeeklyForecast from './components/WeeklyForecast';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Header />
      <WeeklyForecast />
    </div>
  );
};

export default App;