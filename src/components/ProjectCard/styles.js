import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  padding: 16px;

  img {
    max-width: 276px;
  }

  h2 {
    font-size: 3.6rem;
  }

  #text {
    display: block; 
    display: -webkit-box;
    max-width: 300px;
    height: 80px;
    font-size: 2.4rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 2.4rem;
    line-height: 106%;
  }

  #links {
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
    svg {
      margin: 0;
    }

    a + a {
      margin-left: 32px;
    }
  }
`