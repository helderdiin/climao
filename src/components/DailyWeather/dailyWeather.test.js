import React from 'react';
import {
  render,
} from '../../setupTests';
import DailyWeather from './index';

test('Renderizar 3 items de clima dia a dia', async () => {
  const { getByTestId } = render(<DailyWeather />);

  const hourlyWeather = getByTestId('daily-items-container').childNodes;

  expect(hourlyWeather.length).toBe(3);
});

test('Primeiro dia deve estar escrito \'quinta-feira\'', async () => {
  const { getByTestId } = render(<DailyWeather />);

  const firstChild = getByTestId('daily-items-container').querySelectorAll('div')[0];

  expect(firstChild.firstElementChild.textContent).toBe('quinta-feira');
});

test('Primeiro dia deve ter o ícone correto', async () => {
  const { getByTestId } = render(<DailyWeather />);

  const firstChild = getByTestId('daily-items-container').querySelectorAll('div')[0];

  expect(firstChild.childNodes[1].getAttribute('src')).toBe('https://openweathermap.org/img/wn/01d.png');
});

test('Temperatura max e min devem ser \'36\' e \'29\' respectivamente', async () => {
  const { getByTestId } = render(<DailyWeather />);

  const firstChild = getByTestId('daily-items-container').querySelectorAll('div')[0];
  const tempMax = firstChild.querySelectorAll('span')[0];
  const tempMin = firstChild.querySelectorAll('span')[1];

  expect(tempMax.textContent).toBe('36');
  expect(tempMin.textContent).toBe('29');
});
