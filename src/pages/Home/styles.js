import styled from "styled-components";

export const Header = styled.header`
  header {
    margin-top: 64px;
    display: flex;
    align-items: center;

    div {
      margin-right: 88px;
    }

    p {
      font-size: 6.4rem;
      line-height: 110%;
    }

    @media screen and (max-width: 920px) {
      margin-top: 24px;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      > div {
        margin-bottom: 40px;
        margin-right: 0;
      }
    }

    @media screen and (max-width: 500px) {
      > p {
        font-size: 4.8rem;
        line-height: 114%;
      }
    }
  }

  footer {
    margin-top: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const HeaderIconBox = styled.div`
  display: flex;
  max-width: 370px;
  width: 370px;
  box-shadow: -8px 8px 0px var(--primary-color);
  border: 2px solid var(--font-color);
  align-items: center;
  justify-content: center;
  padding-block: 8px;

  a + a {
    margin-left: 24px;
  }
`

export const FloatingBox = styled.div`
  display: flex;
  padding: ${props => props.padding ? props.padding : '20px 18px'};
  align-items: center;
  justify-content: center;
  box-shadow: -12px 12px 0px var(--primary-color);
  border: 4px solid var(--font-color);

  svg {
    resize: none;
    margin-inline: 16px;
  }
`

export const TextBox = styled(FloatingBox)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    margin-bottom: 24px;
  }
`

export const IconsBox = styled(FloatingBox)`
  justify-content: var(--icon-box-content);
  overflow: auto;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    > div {
      flex: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ProjectsBox = styled(FloatingBox)`
  justify-content: space-around;
  flex-wrap: wrap;
`

export const Section = styled.section`
  margin-top: 72px;

  p {
    font-size: 2.4rem;
  }
`

export const Title = styled.h1`
  font-size: 6.4rem;
  line-height: 110%;
  margin-block-end: 40px;
`

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: -12px 12px 0px var(--primary-color);
  border: 2px solid var(--font-color);
  padding-inline: 16px;
  padding-block: 16px;
  max-width: calc(370px + 32px);

  label {
    display: flex;
    flex-direction: column;
    max-width: 370px;
    font-size: 2.4rem;
  }

  textarea {
    padding-inline: 8px;
    padding-block: 8px;
    font-size: 1.6rem;
    background-color: transparent;
    border: 2px solid var(--font-color)
  }
`

export const FormInput = styled.input`
  background-color: transparent;
  height: 40px;
  padding-inline-start: 8px;
  font-size: 1.6rem;

  margin-block-end: 8px;
`