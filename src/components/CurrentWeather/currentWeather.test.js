import React from 'react';
import {
  render,
} from '../../setupTests';
import CurrentWeather from './index';

test('Nome da cidade deve estar escrito \'Bauru\'', async () => {
  const { getByTestId } = render(<CurrentWeather />);

  const cityName = getByTestId('city-name');

  expect(cityName.textContent).toBe('Bauru');
});

test('Descrição do clima deve estar escrito \'nublado\'', async () => {
  const { getByTestId } = render(<CurrentWeather />);

  const cityStatus = getByTestId('city-status');

  expect(cityStatus.textContent).toBe('nublado');
});

test('Temperatura do dia atual deve estar escrito \'34\'', async () => {
  const { getByTestId } = render(<CurrentWeather />);

  const currentTemp = getByTestId('current-temp');

  expect(currentTemp.textContent).toBe('34');
});

test('Temperatura max e min devem ser \'35\' e \'18\' respectivamente', async () => {
  const { getByTestId } = render(<CurrentWeather />);

  const tempMax = getByTestId('temp-max');
  const tempMin = getByTestId('temp-min');

  expect(tempMax.textContent).toBe('35');
  expect(tempMin.textContent).toBe('18');
});
