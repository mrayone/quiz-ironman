import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#d32f2f',
    secondary: '#c62828',
    bgColor: '#130f40'
  },
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;