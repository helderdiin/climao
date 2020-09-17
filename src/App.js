import React, {
  useEffect, useState, Suspense, useCallback,
} from 'react';
import { useDispatch } from 'react-redux';

import './global.css';

import { Creators as WeatherActions } from './store/ducks/weather';
import { getHour } from './services/dateTimeFormat';

import { weather } from './services/api';

import AfternoonImg from './assets/after_noon.png';
import NightImg from './assets/night.png';
import RefreshIcon from './assets/refresh.png';
import LoadingIcon from './assets/loading.png';

const CurrentWeather = React.lazy(() => import('./components/CurrentWeather'));
const HourlyWeather = React.lazy(() => import('./components/HourlyWeather'));
const DailyWeather = React.lazy(() => import('./components/DailyWeather'));
const TodayDescription = React.lazy(() => import('./components/TodayDescription'));
const WeatherDetails = React.lazy(() => import('./components/WeatherDetails'));

function App() {
  const dispatch = useDispatch();
  const [coords, setCoords] = useState({});
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(AfternoonImg);

  const loadWeatherData = useCallback(async (params) => {
    setLoading(true);

    const weatherData = await weather(params);

    dispatch(WeatherActions.setTodayData(weatherData));
    dispatch(WeatherActions.setHourlyData(weatherData));
    dispatch(WeatherActions.setDailyData(weatherData));

    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords: coordinates }) => {
      const { latitude: lat, longitude: lon } = coordinates;

      await loadWeatherData({ lat, lon });
      setCoords({ lat, lon });
    });
  }, [loadWeatherData]);

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
      {loading ? (
        <div className="loading"><img src={LoadingIcon} alt="Loading icon" /></div>
      ) : (
        <>
          <button className="refresh-icon" onClick={() => loadWeatherData(coords)} type="button">
            <img src={RefreshIcon} alt="Refresh icon" />
          </button>

          <Suspense fallback={<div />}>
            <CurrentWeather />
            <HourlyWeather />
            <DailyWeather />
            <TodayDescription />
            <WeatherDetails />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
