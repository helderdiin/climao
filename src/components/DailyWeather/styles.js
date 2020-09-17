import styled from 'styled-components';
import { GenericContainer } from '../../styles/Common';

export const Container = styled.div`
  ${GenericContainer}
  flex-wrap: wrap;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;

  img {
    width: 35px;
  }

  div:first-child {
    min-width: 150px;
    text-align: left;
  }
`;

export const DayName = styled.div`
  :first-letter {
    text-transform: uppercase;
  }
`;

export const Empty = styled.div`
  text-align: center;
  width: 100%;
`;
