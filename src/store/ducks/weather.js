import { getWeekday, getHour, getTime } from '../../services/dateTimeFormat';

export const Types = {
  SET_TODAY_DATA: 'weather/SET_TODAY_DATA',
  SET_HOURLY_DATA: 'weather/SET_HOURLY_DATA',
  SET_DAILY_DATA: 'weather/SET_DAILY_DATA',
};

const INITIAL_STATE = {
  cityName: '',
  cityStatus: '',
  temp: 0,
  tempMin: 0,
  tempMax: 0,
  details: {
    sunrise: 0,
    sunset: 0,
    humidity: 0,
    windSpeed: 0,
    feelsLike: 0,
    pressure: 0,
    visibility: 0,
    uvi: 0,
  },
  hourlyData: [],
  dailyData: [],
};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TODAY_DATA:
      return {
        ...state,
        ...action.payload.weatherData,
      };
    case Types.SET_HOURLY_DATA:
      return {
        ...state,
        hourlyData: action.payload.hourlyData,
      };
    case Types.SET_DAILY_DATA:
      return {
        ...state,
        dailyData: action.payload.dailyData,
      };
    default:
      return state;
  }
}

export const Creators = {
  setTodayData: ({ data, cityName }) => {
    const weatherData = {
      cityName,
      cityStatus: data.current.weather[0] && data.current.weather[0].description,
      temp: Math.round(data.current.temp),
      tempMin: Math.round(data.daily[0] && data.daily[0].temp.min),
      tempMax: Math.round(data.daily[0] && data.daily[0].temp.max),
      details: {
        sunrise: getTime(data.current.sunrise * 1000),
        sunset: getTime(data.current.sunset * 1000),
        humidity: data.current.humidity,
        windSpeed: Math.round(data.current.wind_speed),
        feelsLike: Math.round(data.current.feels_like),
        pressure: data.current.pressure,
        visibility: Math.round(data.current.visibility / 1000),
        uvi: Math.round(data.current.uvi),
      },
    };

    return {
      type: Types.SET_TODAY_DATA,
      payload: {
        weatherData,
      },
    };
  },
  setHourlyData: ({ data }) => {
    const hourlyWeather = data.hourly.filter((item, i) => (i < 6));
    const hourlyData = hourlyWeather.map((item) => ({
      dt: item.dt,
      hour: getHour(item.dt * 1000),
      icon: item.weather[0] && item.weather[0].icon,
      temp: Math.round(item.temp),
    }));

    return {
      type: Types.SET_HOURLY_DATA,
      payload: {
        hourlyData,
      },
    };
  },
  setDailyData: ({ data }) => {
    data.daily.shift();

    return {
      type: Types.SET_DAILY_DATA,
      payload: {
        dailyData: data.daily.map((item) => ({
          dt: item.dt,
          dayName: getWeekday(item.dt * 1000),
          icon: item.weather[0] && item.weather[0].icon,
          tempMin: Math.round(item.temp.min),
          tempMax: Math.round(item.temp.max),
        })),
      },
    };
  },
};
