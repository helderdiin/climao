import styled from 'styled-components';
import { GenericContainer } from '../../styles/Common';

export const Container = styled.div`
  ${GenericContainer}
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 50px;
  text-align: center;

  img {
    width: 35px;
  }

  div:last-child {
    ::after {
      content: "°";
    }
  }
`;

export const Empty = styled.div`
  text-align: center;
  width: 100%;
`;

export const TodayText = styled.div`
  font-weight: 700;
`;
