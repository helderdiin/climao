import React from 'react';
import {
  render,
} from '../../setupTests';
import TodayDescription from './index';

test('Descrição do clima hoje deve ter renderizado corretamente', async () => {
  const { getByTestId } = render(<TodayDescription />);

  const todayDescription = getByTestId('today-description');

  expect(todayDescription.textContent).toBe('Hoje: nublado no momento. A temperatura é de 34°; a máxima hoje foi prevista como 35°.');
});
