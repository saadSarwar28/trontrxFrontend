import styled from "styled-components"


export const AboutStyled = styled.section`
  display: flex;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 80px;

  @media (max-width: 1400px) {
    padding: 70px 70px 80px 110px;
  }

  @media (max-width: 1200px) {
    padding: 80px 10% 80px;
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    padding: 50px 30px 20px;
  }

  @media (max-width: 300px) {
    padding: 50px 20px 20px;
  }
`

export const LeftColumn = styled.div`
  width: 55%;
  padding-bottom: 40px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const AboutHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 50.8px;
  line-height: 114.5%;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.blackFont};
  margin-bottom: 15px;

  transform: scale(0);
  &.animate {
    // animation
    animation: abouttHeading 1s ease 0.25s 1 normal forwards;
    @keyframes abouttHeading {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.mainYellow};
  }

  @media (max-width: 1200px) {
    text-align: center;
    font-size: 30px;
  }
`

export const Paragraphs = styled.ul`
  list-style-type: none;

  > li {
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    text-align: center;
    /* text-justify: inter-word; */
    font-weight: 400;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.blackFont};

    transform: translateX(-100vw);
    &.animate {
      // animation
      animation-name: aboutParagraph;
      animation-duration: 1s;
      animation-delay: 0.25s;
      animation-fill-mode: forwards;
      @keyframes aboutParagraph {
        0% {
          transform: translateX(-100vw);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  }

  > li::first-letter {
    text-transform: capitalize;
  }

  > li:not(:last-child) {
    margin-bottom: 15px;
  }

  @media (max-width: 1200px) {
    > li {
      font-size: 16px;
      //line-height: 13px;
      /* text-align: center; */
    }
  }
`

export const RightColumn = styled.div`
  width: 45%;

  > img {
    width: 100%;

    transform: scale(0);

    &.animate {
      // animation
      animation: aboutImg 1.5s ease 0.25s 1 normal forwards;
      @keyframes aboutImg {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 22px;
    text-align: center;

    > img {
      width: 75%;
    }
  }

  @media (max-width: 768px) {
    > img {
      width: 100%;
    }
  }
`
