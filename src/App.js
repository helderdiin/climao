import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';
import { getHour } from './services/dateTimeFormat';

import { weather } from './services/api';

import AfternoonImg from './assets/after_noon.png';
import NightImg from './assets/night.png';
import RefreshIcon from './assets/refresh.png';

const CurrentWeather = React.lazy(() => import('./components/CurrentWeather'));
const HourlyWeather = React.lazy(() => import('./components/HourlyWeather'));
const DailyWeather = React.lazy(() => import('./components/DailyWeather'));
const TodayDescription = React.lazy(() => import('./components/TodayDescription'));
const WeatherDetails = React.lazy(() => import('./components/WeatherDetails'));

function App() {
  const dispatch = useDispatch();
  const [coords, setCoords] = useState({});
  const [backgroundImage, setBackgroundImage] = useState(AfternoonImg);

  const loadWeatherData = async (params) => {
    const weatherData = await weather(params);

    dispatch(WeatherActions.setTodayData(weatherData));
    dispatch(WeatherActions.setHourlyData(weatherData));
    dispatch(WeatherActions.setDailyData(weatherData));
  };

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(async ({ coords: coordinates }) => {
      const { latitude: lat, longitude: lon } = coordinates;

      loadWeatherData({ lat, lon });
      setCoords({ lat, lon });

      navigator.geolocation.clearWatch(watchId);
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, [dispatch]);

  useEffect(() => {
    const currentHour = getHour(Date.now());

    if (currentHour > 6 && currentHour < 18) {
      setBackgroundImage(AfternoonImg);
    } else {
      setBackgroundImage(NightImg);
    }
  }, []);

  return (
    <div id="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button className="refresh-icon" onClick={() => loadWeatherData(coords)} type="button" tabIndex={0}>
        <img src={RefreshIcon} alt="Refresh icon" />
      </button>

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
