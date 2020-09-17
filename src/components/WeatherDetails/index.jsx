import React from 'react';
import { useSelector } from 'react-redux';

import SectorDivider from '../../styles/SectorDivider';
import { Container, Item } from './styles';

function WeatherDetails() {
  const details = useSelector((state) => state.weather.details);

  const DETAILS_ITEM_LABEL = {
    sunrise: 'Nascer do sol',
    sunset: 'Pôr do sol',
    humidity: 'Umidade',
    wind_speed: 'Vento',
    feels_like: 'Sensação térmica',
    precipitation: 'Precipitação',
    pressure: 'Pressão',
    visibility: 'Visibilidade',
    uvi: 'Índice UV',
  };

  const DETAILS_ITEM_UNIT = {
    sunrise: '',
    sunset: '',
    humidity: '%',
    wind_speed: 'km/h',
    feels_like: '°',
    pressure: 'hPa',
    visibility: 'km',
    uvi: '',
  };

  return (
    <>
      <SectorDivider />
      <Container>
        {Object.keys(details).map((item) => (
          <Item>
            <span>{DETAILS_ITEM_LABEL[item]}</span>
            <span>
              {details[item]}
              {' '}
              {DETAILS_ITEM_UNIT[item]}
            </span>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default WeatherDetails;
