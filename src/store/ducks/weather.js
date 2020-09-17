import moment from 'moment';

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
  setTodayData: ({ data }) => {
    const weatherData = {
      cityName: data.name,
      cityStatus: data.weather[0] && data.weather[0].description,
      temp: parseInt(data.main.temp, 10),
      tempMin: parseInt(data.main.temp_min, 10),
      tempMax: parseInt(data.main.temp_max, 10),
    };

    return {
      type: Types.SET_TODAY_DATA,
      payload: {
        weatherData,
      },
    };
  },
  setHourlyData: ({ data }) => {
    const todayStartMilliseconds = +new Date(moment(0, 'HH').format());
    const todayEndMilliseconds = +new Date(moment({ hour: 23, minute: 59, seconds: 59 }).format());

    const hourlyWeather = data.list.filter((item) => ((item.dt * 1000) > todayStartMilliseconds && (item.dt * 1000) < todayEndMilliseconds));
    const hourlyData = hourlyWeather.map((item) => ({
      hour: moment(item.dt_txt).format('HH'),
      icon: item.weather[0] && item.weather[0].icon,
      temp: parseInt(item.main.temp, 10),
    }));

    return {
      type: Types.SET_HOURLY_DATA,
      payload: {
        hourlyData,
      },
    };
  },
  setDailyData: ({ data }) => {
    const todayEndMilliseconds = +new Date(moment({ hour: 23, minute: 59, seconds: 59 }).format());
    const todayDayNumber = +moment().format('DD');
    const dailyWeather = data.list.filter((item) => ((item.dt * 1000) > todayEndMilliseconds));
    const dailyData = [];

    for (let i = 1; i < 6; i += 1) {
      dailyData.push(dailyWeather.find((item) => +moment(item.dt_txt).format('DD') === todayDayNumber + i));
    }

    return {
      type: Types.SET_DAILY_DATA,
      payload: {
        dailyData: dailyData.map((item) => ({
          dayName: moment(item.dt_txt).format('dddd'),
          icon: item.weather[0] && item.weather[0].icon,
          tempMin: parseInt(item.main.temp_min, 10),
          tempMax: parseInt(item.main.temp_max, 10),
        })),
      },
    };
  },
};
