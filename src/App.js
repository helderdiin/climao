import React from 'react';

import './global.css';

import MainWeather from './components/MainWeather';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';
import TodayDescription from './components/TodayDescription';

function App() {
  return (
    <div id="app">
      <MainWeather />
      <HourlyWeather />
      <DailyWeather />
      <TodayDescription />
    </div>
  );
}

export default App;
