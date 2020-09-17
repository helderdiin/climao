import React from 'react';
import { useSelector } from 'react-redux';

import SectorDivider from '../../styles/SectorDivider';
import MinMaxTemp from '../../styles/MinMaxTemp';
import { Container, Item } from './styles';

function DailyWeather() {
  const dailyData = useSelector((state) => state.weather.dailyData);

  return (
    <>
      <SectorDivider />
      <Container>
        {dailyData.map((item) => (
          <Item>
            <div>{item.dayName}</div>
            <img src={`http://openweathermap.org/img/wn/${item.icon}.png`} alt="Weather icon" />
            <MinMaxTemp>
              <span>{item.tempMax}</span>
              <span>{item.tempMin}</span>
            </MinMaxTemp>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default DailyWeather;
