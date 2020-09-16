export const Types = {
  LOAD: 'weather/LOAD',
};

const INITIAL_STATE = {
  cityName: '',
  cityStatus: '',
  temp: 0,
  tempMin: 0,
  tempMax: 0,
};

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return action.payload.weatherData;
    default:
      return state;
  }
}

export const Creators = {
  loadData: (data) => {
    const weatherData = {
      cityName: data.name,
      cityStatus: data.weather[0] && data.weather[0].description,
      temp: parseInt(data.main.temp, 10),
      tempMin: parseInt(data.main.temp_min, 10),
      tempMax: parseInt(data.main.temp_max, 10),
    };

    return {
      type: Types.LOAD,
      payload: {
        weatherData,
      },
    };
  },
};
