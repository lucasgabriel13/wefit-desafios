import { createGlobalStyle } from 'styled-components';

export const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    padding-bottom: 128px;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;