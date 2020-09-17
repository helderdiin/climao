import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import MinMaxTemp from '../../styles/MinMaxTemp';
import {
  Container, City, Temperature, Details, Day,
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
        <span>{cityName}</span>
        <span>{cityStatus}</span>
      </City>
      <Temperature>
        {temp}
      </Temperature>
      <Details>
        <Day>
          <span>{moment().format('dddd')}</span>
          <span>HOJE</span>
        </Day>
        <MinMaxTemp>
          <span>{tempMax}</span>
          <span>{tempMin}</span>
        </MinMaxTemp>
      </Details>
    </Container>
  );
}

export default CurrentWeather;
