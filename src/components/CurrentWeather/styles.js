import styled from 'styled-components';
import { GenericContainer } from '../../styles/Common';

export const Container = styled.div`
  ${GenericContainer}
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 35px 15px 10px;
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  span:first-child {
    font-size: 32px;
  }

  span + span {
    text-transform: capitalize;
  }
`;

export const Temperature = styled.div`
  font-size: 64px;
  font-weight: 300;
  margin: 7px 0;

  ::after {
    content: "°";
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Day = styled.div`
  span:first-child {
    text-transform: capitalize;
  }

  span + span {
    margin-left: 10px;
    font-weight: 700
  }
`;
