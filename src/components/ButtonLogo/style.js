import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const Backdrop = styled.div`
  position: absolute;
  background-color: var(--primary-color);
  width: 276px;
  height: 251px;
  left: -12px;
  top: 12px;
`

export const LogoButton = styled.button`
  z-index: 1;
  background-color: var(--background-color);
  padding: 12px;
  border: 8px solid var(--font-color);
  transition: linear transform 50ms;
  cursor: pointer;

  &:active {
    transform: translate(-12px, 12px);
  }
`