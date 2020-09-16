import React, { useEffect, useState } from 'react';

import SectorDivider from '../../styles/SectorDivider';
import MinMaxTemp from '../../styles/MinMaxTemp';
import { Container, Item } from './styles';

function DailyWeather() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(['Quinta-feira', 'Sexta-feira', 'Sábado']);
  }, []);

  return (
    <>
      <SectorDivider />
      <Container>
        {items.map(item => (
          <Item>
            <div>{item}</div>
            <img src="http://openweathermap.org/img/wn/10d.png" alt="Weather icon" />
            <MinMaxTemp>
              <span>33</span>
              <span>18</span>
            </MinMaxTemp>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default DailyWeather;
