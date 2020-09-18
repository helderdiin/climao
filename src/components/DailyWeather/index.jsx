import React from 'react';
import { useSelector } from 'react-redux';

import SectorDivider from '../../styles/SectorDivider';
import MinMaxTemp from '../../styles/MinMaxTemp';
import {
  Container, Item, DayName, Empty,
} from './styles';

function DailyWeather() {
  const dailyData = useSelector((state) => state.weather.dailyData);

  return (
    <>
      <SectorDivider />
      <Container data-testid="daily-items-container">
        {dailyData.length ? (
          dailyData.map((item) => (
            <Item key={item.dt}>
              <DayName>{item.dayName}</DayName>
              <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" />
              <MinMaxTemp>
                <span>{item.tempMax}</span>
                <span>{item.tempMin}</span>
              </MinMaxTemp>
            </Item>
          ))
        ) : (
          <Empty>Sem informações de clima dia a dia</Empty>
        )}
      </Container>
    </>
  );
}

export default DailyWeather;
