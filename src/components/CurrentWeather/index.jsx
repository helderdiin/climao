import React from 'react';
import { useSelector } from 'react-redux';

import MinMaxTemp from '../../styles/MinMaxTemp';
import { getWeekday } from '../../services/dateTimeFormat';

import {
  Container, City, Temperature, Details, Day, DayName,
} from './styles';

function CurrentWeather() {
  const cityName = useSelector((state) => state.weather.cityName);
  const cityStatus = useSelector((state) => state.weather.cityStatus);
  const temp = useSelector((state) => state.weather.temp);
  const tempMin = useSelector((state) => state.weather.tempMin);
  const tempMax = useSelector((state) => state.weather.tempMax);

  return (
    <Container>
      <City>
        <span data-testid="city-name">{cityName}</span>
        <span data-testid="city-status">{cityStatus}</span>
      </City>
      <Temperature data-testid="current-temp">
        {temp}
      </Temperature>
      <Details>
        <Day>
          <DayName>{getWeekday(Date.now())}</DayName>
          <span>HOJE</span>
        </Day>
        <MinMaxTemp>
          <span data-testid="temp-max">{tempMax}</span>
          <span data-testid="temp-min">{tempMin}</span>
        </MinMaxTemp>
      </Details>
    </Container>
  );
}

export default CurrentWeather;
