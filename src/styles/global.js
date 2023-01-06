import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #FFF9F9;
    --primary-color: #A91212;
    --font-color: #150202;
    --logo-shadow: -12px 12px 6px 0px #00000040, 0px 4px 4px 0px #00000040;
    --inset-shadow: 0 3px 6px 0 inset #00000040, 0 2px 10px 0 inset #00000040;
    --icon-box-content: space-around;

    @media screen and (min-width: 1600px) {
      --introduction-font-size: 6.4rem;
    }

    @media screen and (max-width: 1200px) {
      --icon-box-content: flex-start;
    }
  }

  html {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: var(--font-color);
    font-size: 1.6rem;
    background-color: var(--primary-color);
    backdrop-filter: blur(20px);
    
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4px;
    padding-inline-start: 64px;
    padding-inline-end: 48px;
    /* max-width: calc(1170px + 48px + 8px); */
    background-color: var(--background-color);
    border: 4px solid var(--font-color);
    padding-block-end: 64px;
    box-shadow: -16px 16px 0px var(--primary-color);

    @media screen and (max-width: 500px) {
      padding-inline-start: 24px;
      padding-inline-end: 16px;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  textarea, input {
    -webkit-appearance: none;
    outline: none;
  }
`;