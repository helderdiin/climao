import React from 'react';
import {
  render,
} from '../../setupTests';
import WeatherDetails from './index';

test('Renderizar 3 items de clima dia a dia', async () => {
  const { getByTestId } = render(<WeatherDetails />);

  const detailsItems = getByTestId('details-items-container').childNodes;

  expect(detailsItems.length).toBe(8);
});

test('Umidade do ar deve estar escrito \'22%\'', async () => {
  const { getByTestId } = render(<WeatherDetails />);

  const firstChild = getByTestId('details-items-container').querySelectorAll('div')[2];

  expect(firstChild.childNodes[1].textContent).toBe('22 %');
});
