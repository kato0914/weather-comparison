import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import WeeklyForecast from './components/WeeklyForecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <WeeklyForecast />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>
        この行を追加しました。変更を確認するには保存して再読み込みしてください。
      </p>
    </div>
  );
}

export default App;