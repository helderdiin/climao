import React from 'react';
import { useSelector } from 'react-redux';

import { getHour } from '../../services/dateTimeFormat';

import SectorDivider from '../../styles/SectorDivider';
import {
  Container, Item, Empty, TodayText,
} from './styles';

function HourlyWeather() {
  const hourlyData = useSelector((state) => state.weather.hourlyData);

  return (
    <>
      <SectorDivider />
      <Container data-testid="hourly-items-container">
        {hourlyData.length ? (
          hourlyData.map((item) => (
            <Item key={item.dt}>
              {item.hour !== getHour(Date.now()) ? (
                <div>{item.hour}</div>
              ) : (
                <TodayText>Agora</TodayText>
              )}
              <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" />
              <div>{item.temp}</div>
            </Item>
          ))
        ) : (
          <Empty>Sem informações de clima hora a hora</Empty>
        )}
      </Container>
    </>
  );
}

export default HourlyWeather;
