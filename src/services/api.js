import axios from 'axios';

import { toQueryString } from './utils';

const api = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
});

const getParams = (params) => {
  const defaultParams = {
    APPID: process.env.REACT_APP_WEATHER_API_KEY,
    units: 'metric',
    lang: 'pt_br',
  };

  return toQueryString({ ...defaultParams, ...params });
};

export const weather = async (params) => {
  const weatherData = await api.get(`onecall?${getParams(params)}`);
  const { data: { name: cityName } } = await api.get(`weather?${getParams(params)}`);

  return {
    ...weatherData,
    cityName,
  };
};

export default axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
});
