import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';

import { weather, forecast } from './services/api';

import AfternoonImg from './assets/after_noon.png';
import NightImg from './assets/night.png';

const MainWeather = React.lazy(() => import('./components/MainWeather'));
const HourlyWeather = React.lazy(() => import('./components/HourlyWeather'));
const DailyWeather = React.lazy(() => import('./components/DailyWeather'));
const TodayDescription = React.lazy(() => import('./components/TodayDescription'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <MainWeather />
        <HourlyWeather />
        <DailyWeather />
        <TodayDescription />
      </Suspense>
    </div>
  );
}

export default App;
