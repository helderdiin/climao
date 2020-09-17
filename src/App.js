import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';

import { weather, forecast } from './services/api';
import MainWeather from './components/MainWeather';
import HourlyWeather from './components/HourlyWeather';
import DailyWeather from './components/DailyWeather';
import TodayDescription from './components/TodayDescription';

import AfternoonImg from './assets/after_noon.png';
import NightImg from './assets/night.png';

function App() {
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState(AfternoonImg);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;

      const weatherData = await weather.get(`&lat=${latitude}&lon=${longitude}`);
      dispatch(WeatherActions.setTodayData(weatherData));

      const forecastData = await forecast.get(`&lat=${latitude}&lon=${longitude}`);
      dispatch(WeatherActions.setHourlyData(forecastData));
      dispatch(WeatherActions.setDailyData(forecastData));

      navigator.geolocation.clearWatch(watchId);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [dispatch]);

  useEffect(() => {
    const currentHour = +moment().format('HH');

    if (currentHour > 6 && currentHour < 18) {
      setBackgroundImage(AfternoonImg);
    } else {
      setBackgroundImage(NightImg);
    }
  }, []);

  return (
    <div id="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <MainWeather />
      <HourlyWeather />
      <DailyWeather />
      <TodayDescription />
    </div>
  );
}

export default App;
