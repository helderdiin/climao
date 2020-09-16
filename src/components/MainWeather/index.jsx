import React from 'react';

import MinMaxTemp from '../../styles/MinMaxTemp';
import { Container, City, Temperature, Details, Day } from './styles';

function MainWeather() {
  return (
    <Container>
      <City>
        <span>Bauru</span>
        <span>Ensolarado</span>
      </City>
      <Temperature>
        32
      </Temperature>
      <Details>
        <Day>
          <span>Quarta-feira</span>
          <span>HOJE</span>
        </Day>
        <MinMaxTemp>
          <span>33</span>
          <span>18</span>
        </MinMaxTemp>
      </Details>
    </Container>
  );
}

export default MainWeather;
