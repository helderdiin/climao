import styled from 'styled-components';
import { GenericContainer } from '../../styles/Common';

export const Container = styled.div`
  ${GenericContainer}
  text-align: left;
  line-height: 1.5em;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(189, 189, 189);
  margin-bottom: 5px;
  padding-bottom: 10px;

  span:first-child {
    font-size: 12px;
    text-transform: uppercase;
    opacity: 0.7;
  }

  span + span {
    font-size: 32px;
  }
`;
