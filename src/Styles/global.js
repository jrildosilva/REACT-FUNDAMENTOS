import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body  {
     background: ${props => props.theme.backgroundcolor};
     color: ${props => props.theme.textcolor};
     font-family: sans-serif;
  }

  `;