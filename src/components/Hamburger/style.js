import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 48px;
  height: 42px;
  color: var(--primary-color);
  z-index: inherit;
  background-color: transparent;
  border-top: 8px solid currentColor;
  transition: 400ms;

  &::before, &::after {
    content: '';
    display: block;
    width: 48px;
    height: 8px;
    background-color: currentColor;
    margin-top: 8px;
    transition: transform 400ms;
    position: relative;
  }

  ${props => props.active && css`
    border-top: transparent;
    /* color: var(--background-color); */

    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(-135deg);
      top: -15px;
    }
  `}
`