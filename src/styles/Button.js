import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  width: 190px;
  height: 40px;
  border-radius: 15px;
  border-color: transparent;
  background-color: #0fbcf9;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${ shade(0.2, '#0fbcf9') };
    cursor: pointer;
  }
`;