import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';

import { weather } from './services/api';
import MainWeather from './components/MainWeather';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';
import TodayDescription from './components/TodayDescription';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;

      const { data } = await weather.get(`&lat=${latitude}&lon=${longitude}`);
      dispatch(WeatherActions.loadTodayData(data));

      navigator.geolocation.clearWatch(watchId);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [dispatch]);

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
