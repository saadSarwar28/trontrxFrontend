import styled from "styled-components"


export const TopSectionStyled = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 50% 50%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  @media (max-width: 992px) {
    grid-template-columns: 100%;
    height: 165vh;
  }

  @media (orientation: portrait) {
    height: 1000px;
  }

  @media (min-width: 1400px) {
    padding-left: 3%;
  }
`

export const ContentColumn = styled.div`
  color: white;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 22%;
    transform: translateY(-50%)
  }

  @media (max-width: 1200px) {
    > div {
      left: 20%;
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    > div {
      position: relative;
      width: 70%;
      top: 45%;
      /* left: 55%; */
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    > div {
      width: 100%;
    }
  }
`

export const Text = styled.div`
  h1 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 114.5%;
    /* or 48px */
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.whiteFont};

    margin-bottom: 18px;
  }

  h3 {
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.whiteFont};
    text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;

    margin-bottom: 12px;
  }

  p {
    width: 413px;
    height: 68px;

    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.whiteFont};
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      width: auto;
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 23px;
    }

    h3 {
      font-size: 15px;
    }

    p {
      font-size: 12px;
    }
  }
`

export const Buttons = styled.div`

  @media (max-width: 992px) {
    > button {
      width: 160px;
      font-weight: 700;
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (max-width: 576px) {
    
    button {
      height: 45px;
    }
    
    > button:last-child {
      margin-left: 10px;
    }
  }
`

export const YellowButton = styled.button`
  width: 200px;
  height: 56px;

  background: ${({ theme }) => theme.colors.mainYellow};
  border-radius: 5px;
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blackFont};
`

export const WhiteButton = styled(YellowButton)`
  width: 160px;
  height: 59px;

  background: ${({ theme }) => theme.colors.whiteBg};
  margin-left: 17px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 21px;

  margin-top: 22px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48.12px;
    height: 48.12px;

    background: ${({ theme }) => theme.colors.blackBg};
    border: 0.491049px solid #656060;
    border-radius: 10.312px;
    cursor: pointer;
  }

  > div:first-child {
    svg {
      width: 30.94px;
      height: 25.78px;
      background: ${({ theme }) => theme.colors.mainYellow};
    }
  }

  > div:last-child {
    svg {
      width: 28px;
      height: 20.91px;
      background: ${({ theme }) => theme.colors.mainYellow};
    }
  }

  @media (max-width: 992px) {
    justify-content: center;

    > div {
      svg {
        height: 24.62px;
      }
    }
  }

  @media (max-width: 576px) {
    gap: 10px;
    margin-top: 15px;
  }
`

export const ImageColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  > div {
    position: absolute;
    top: 55%;
    left: 15%;
    transform: translateY(-50%);

    width: 332px;
    height: 504.73px;
    margin-left: 75px;
  }

  // main left
  img:nth-child(1) {
    width: 27.83px;
    height: 96px;

    position: absolute;
    top: 240px;
    left: -2px;
  }

  // main image
  img:nth-child(2) {
    width: 100%;
    height: 100%;
  }

  // main right
  img:nth-child(3) {
    width: 38.53px;
    height: 163px;

    position: absolute;
    top: 190px;
    left: 300px;
  }

  @media (max-width: 1200px) {
    > div {
      left: 5%;
    }
  }

  @media (max-width: 992px) {
    > div {
      position: relative;
      top: 15%;
      /* left: 55%; */
      left: 50%;
      transform: translateX(-50%);
      margin-left: 0;
    }

    img {
      position: relative;
      width: 160.09px;
      height: 283.23px;
    }
  }
`
