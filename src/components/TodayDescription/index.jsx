import React from 'react';
import { useSelector } from 'react-redux';

import SectorDivider from '../../styles/SectorDivider';
import Container from './styles';

function TodayDescription() {
  const cityStatus = useSelector((state) => state.weather.cityStatus);
  const temp = useSelector((state) => state.weather.temp);
  const tempMax = useSelector((state) => state.weather.tempMax);

  return (
    <>
      <SectorDivider />
      <Container>
        Hoje:
        {' '}
        {cityStatus}
        {' '}
        no momento. A temperatura é de
        {' '}
        {temp}
        °; a máxima hoje foi prevista como
        {' '}
        {tempMax}
        °.
      </Container>
    </>
  );
}

export default TodayDescription;
