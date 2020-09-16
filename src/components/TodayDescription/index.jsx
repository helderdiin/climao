import React from 'react';

import SectorDivider from '../../styles/SectorDivider';
import Container from './styles';

function TodayDescription() {
  return (
    <>
      <SectorDivider />
      <Container>
        Hoje: 'colocar a descrição da API'. A temperatura é de XX°; a máxima hoje foi prevista como YY°.
      </Container>
    </>
  );
}

export default TodayDescription;
