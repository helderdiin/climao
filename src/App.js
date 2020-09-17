import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';

import { weather } from './services/api';

import AfternoonImg from './assets/after_noon.png';
import NightImg from './assets/night.png';

const CurrentWeather = React.lazy(() => import('./components/CurrentWeather'));
const HourlyWeather = React.lazy(() => import('./components/HourlyWeather'));
const DailyWeather = React.lazy(() => import('./components/DailyWeather'));
const TodayDescription = React.lazy(() => import('./components/TodayDescription'));
const WeatherDetails = React.lazy(() => import('./components/WeatherDetails'));

function App() {
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState(AfternoonImg);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(async ({ coords }) => {
      const { latitude: lat, longitude: lon } = coords;

      const weatherData = await weather({ lat, lon });

      dispatch(WeatherActions.setTodayData(weatherData));
      dispatch(WeatherActions.setHourlyData(weatherData));
      dispatch(WeatherActions.setDailyData(weatherData));

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
        <CurrentWeather />
        <HourlyWeather />
        <DailyWeather />
        <TodayDescription />
        <WeatherDetails />
      </Suspense>
    </div>
  );
}

export default App;
