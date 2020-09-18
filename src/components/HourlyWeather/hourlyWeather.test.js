import React from 'react';
import {
  render,
} from '../../setupTests';
import HourlyWeather from './index';

test('Renderizar 3 items de clima hora a hora', async () => {
  const { getByTestId } = render(<HourlyWeather />);

  const hourlyWeather = getByTestId('hourly-items-container').childNodes;

  expect(hourlyWeather.length).toBe(3);
});

test('Primeiro item deve estar escrito \'18\'', async () => {
  const { getByTestId } = render(<HourlyWeather />);

  const firstChild = getByTestId('hourly-items-container').querySelectorAll('div')[0];

  expect(firstChild.firstElementChild.textContent).toBe('18');
});

test('Primeiro dia deve ter o ícone correto', async () => {
  const { getByTestId } = render(<HourlyWeather />);

  const firstChild = getByTestId('hourly-items-container').querySelectorAll('div')[0];

  expect(firstChild.childNodes[1].getAttribute('src')).toBe('http://openweathermap.org/img/wn/04n.png');
});

test('Temperatura deve ser \'33\'', async () => {
  const { getByTestId } = render(<HourlyWeather />);

  const firstChild = getByTestId('hourly-items-container').querySelectorAll('div')[0];

  expect(firstChild.childNodes[2].textContent).toBe('33');
});
