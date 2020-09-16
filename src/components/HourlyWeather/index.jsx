import React, { useEffect, useState } from 'react';

import SectorDivider from '../../styles/SectorDivider';
import { Container, Item } from './styles';

function HourlyWeather() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(['20', '21', '22']);
  }, []);

  return (
    <>
      <SectorDivider />
      <Container>
        {items.map(item => (
          <Item>
            <div>{item}</div>
            <img src="http://openweathermap.org/img/wn/10d.png" alt="Weather icon" />
            <div>29</div>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default HourlyWeather;
