import styled from "styled-components";

export const Container = styled.div`
  padding: 88px 64px 64px 88px;
  border: 8px solid #150202;
  width: 1328px;
  max-height: 744px;
  justify-content: flex-start;
  flex-direction: row;
  position: relative;

  box-shadow: -16px 16px 0px var(--primary-color);
`

export const Title = styled.h1`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 107%;
  max-width: 696px;

  letter-spacing: 0.025em;

  span {
    color: var(--primary-color);
  }
`;

export const Description = styled.h2`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 104%;
  margin-top: 24px;
  letter-spacing: -0.025em;

  color: #150202;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Down = styled.div`
  display: flex;
  justify-content: space-between;

  &:first-child {
    width: 670px;
  }
`