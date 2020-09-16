import axios from 'axios';

export const weather = axios.create({
  baseURL: `${process.env.REACT_APP_WEATHER_API_URL}weather?APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=pt_br`,
});

export const forecast = axios.create({
  baseURL: `${process.env.REACT_APP_WEATHER_API_URL}forecast?APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=pt_br`,
});

export default axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
});
