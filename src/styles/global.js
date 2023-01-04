import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background-color: #F4E4E4;
    --primary-color: #A91212;
    --font-color: #150202;
    --logo-shadow: -12px 12px 6px 0px #00000040, 0px 4px 4px 0px #00000040;
    --inset-shadow: 0 3px 6px 0 inset #00000040, 0 2px 10px 0 inset #00000040;
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
    background-color: var(--background-color);
  }

  .hamburger-button {
    cursor: pointer;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;