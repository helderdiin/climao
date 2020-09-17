import styled from 'styled-components';
import { GenericContainer } from '../../styles/Common';

export const Container = styled.div`
  ${GenericContainer}
`;

export const Item = styled.div`
  width: 35px;
  text-align: center;
  margin-right: 10px;

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
