/* eslint-disable */
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render as rtlRender, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const STORE_MOCK = mockStore({
  weather: {
    cityName: 'Bauru',
    cityStatus: 'nublado',
    temp: 34,
    tempMin: 18,
    tempMax: 35,
    details: {
      sunrise: 1600333824000,
      sunset: 1600377056000,
      humidity: 22,
      windSpeed: 3,
      feelsLike: 32,
      pressure: 1010,
      visibility: 10,
      uvi: 10,
    },
    hourlyData: [{
      dt: 1600354800000,
      hour: 18,
      icon: '04n',
      temp: 33,
    }, {
      dt: 1600441200000,
      hour: 13,
      icon: '10d',
      temp: 31,
    }, {
      dt: 1600527600000,
      hour: 8,
      icon: '01d',
      temp: 29,
    }],
    dailyData: [{
      dt: 1600354800000,
      dayName: 'quinta-feira',
      icon: '01d',
      tempMin: 29,
      tempMax: 36,
    }, {
      dt: 1600441200000,
      dayName: 'sexta-feira',
      icon: '10d',
      tempMin: 26,
      tempMax: 35,
    }, {
      dt: 1600527600000,
      dayName: 'sábado',
      icon: '04n',
      tempMin: 27,
      tempMax: 31,
    }],
  }
});

function render(
  ui,
  renderOptions,
) {
  function Wrapper({ children }) {
    return (
      <Provider store={STORE_MOCK}>
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

afterEach(cleanup);

test('Renderiza aplicação sem erros', () => {
  const component = render();
  expect(component).toBeDefined();
});

export * from '@testing-library/react';
export { render };
