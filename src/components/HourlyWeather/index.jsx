import React from 'react';
import { useSelector } from 'react-redux';

import SectorDivider from '../../styles/SectorDivider';
import { Container, Item, Empty } from './styles';

function HourlyWeather() {
  const hourlyData = useSelector((state) => state.weather.hourlyData);

  return (
    <>
      <SectorDivider />
      <Container>
        {hourlyData.length ? (
          hourlyData.map((item) => (
            <Item key={item.dt}>
              <div>{item.hour}</div>
              <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" />
              <div>{item.temp}</div>
            </Item>
          ))
        ) : (
          <Empty>Sem informações de clima por hora</Empty>
        )}
      </Container>
    </>
  );
}

export default HourlyWeather;
