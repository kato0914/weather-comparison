import React from 'react';
import Header from './components/Header';
import WeeklyForecast from './components/WeeklyForecast';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <WeeklyForecast />
    </div>
  );
};

export default App;