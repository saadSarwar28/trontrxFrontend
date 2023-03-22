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

  @media (max-width: 768px) {
    height: 810px;
  }

  @media (max-width: 576px) {
    height: 810px;
  }
`

export const ContentColumn = styled.div`
  color: white;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 30%;
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
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    > div {
      width: 100%;
      padding: 0 35px;
      margin-top: 50px;
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
      font-size: 13px;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 992px) {
    justify-content: center;

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

  @media (max-width: 576px) {
    > div {
      width: 26.12px;
      height: 26.12px;
      border-radius: 5.312px;   
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    gap: 10px;
    margin-top: 15px;

    > div {
      img {
        height: 13.19px;
      }
    }
  }
`

export const ImageColumn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`

export const MainImage = styled.div`
    position: absolute;
    /* top: 57%; */
    top: 60%;
    left: 17%;
    transform: translateY(-50%);

    width: 332px;
    height: 504.73px;

    > img {
      position: absolute;
    }

    // base
    img:nth-child(1) {
      width: 332px;
      height: 103.41px;

      top: 72%;
      left: 16%;

      // animation
      animation-name: baseImg;
      animation-duration: 2s;

      @keyframes baseImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // pillar
    img:nth-child(2) {
      width: 239.64px;
      height: 178.35px;

      top: 47%;
      left: 30%;

      // animation
      animation-name: pillarImg;
      animation-duration: 1s;

      @keyframes pillarImg {
        0% {top: 80%;}
        100% {top: 47%;}
      }
    }

    // middle
    img:nth-child(3) {
      width: 113.88px;
      height: 181.22px;

      top: 15%;
      left: 48%;

      // animation
      animation-name: middleImg;
      animation-duration: 1.5s;
      animation-delay: 1s;
      animation-fill-mode: backwards;
      @keyframes middleImg {
        0% {transform: scale(0, 0); top: 30%}
        100% {transform: scale(1, 1); top: 15%;}
      }
    }

    // line 1
    img:nth-child(4) {
      top: 12%;
      left: 34%;

      // animation
      animation: lineImg 1.5s linear 1s 1 normal backwards;
      @keyframes lineImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // line 2
    img:nth-child(5) {
      top: 16%;
      left: 41%;

      // animation
      animation: lineImg 1.5s linear 1s 1 normal backwards;
      @keyframes lineImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // line 3
    img:nth-child(6) {
      top: 18%;
      left: 65.5%;

      // animation
      animation: lineImg 1.5s linear 1s 1 normal backwards;
      @keyframes lineImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // line 4
    img:nth-child(7) {
      top: 16%;
      left: 88%;

      // animation
      animation: lineImg 1.5s linear 1s 1 normal backwards;
      @keyframes lineImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // line 5
    img:nth-child(8) {
      top: 12%;
      left: 97%;

      // animation
      animation: lineImg 1.5s linear 1s 1 normal backwards;
      @keyframes lineImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // rotating
    img:nth-child(9) {
      width: 255.79px;
      height: 255.79px;

      top: -8%;
      left: 28%;

      // animation
      animation: showImg 1.5s ease 2.5s 1 normal backwards, rotatingImg 3s linear 3s infinite;
      @keyframes showImg {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
      @keyframes rotatingImg {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
      }
    }

    // E
    img:nth-child(10) {
      width: 88.47px;
      height: 88.47px;

      top: 8.6%;
      left: 53.4%;

      // animation
      animation: showE 1.5s ease 2.5s 1 normal backwards;
      @keyframes showE {
        0% {scale: 0;}
        100% {scale: 1;}
      }
    }

    // Left
    img:nth-child(11) {
      width: 27.83px;
      height: 96px;

      top: 42%;
      left: 16%;

      // animation
      animation: showLeftRight 1.5s ease 3s normal backwards;
      @keyframes showLeftRight {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // Right
    img:nth-child(12) {
      width: 38.53px;
      height: 163px;

      top: 34%;
      left: 106%;

      // animation
      animation: showLeftRight 1.5s ease 3s normal backwards;
      @keyframes showLeftRight {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }

    // Moving Right
    img:nth-child(13) {
      top: 110%;
      left: 75%;
      z-index: -1;

      // animation
      animation: movingRight 7s linear 3s infinite;
      @keyframes movingRight {
        0% {top: 100%;}
        100% {top: -50%;}
      }
    }

    // Moving Left
    img:nth-child(14) {
      top: 110%;
      left: 33.5%;
      z-index: -1;

      // animation
      animation: movingLeft 7s linear 6s infinite;
      @keyframes movingLeft {
        0% {top: 100%;}
        100% {top: -50%;}
      }
    }


  @media (max-width: 1200px) {
    left: 5%;
  }

  @media (max-width: 992px) {
    position: relative;
    top: 19%;
    left: 44%;
    transform: translateX(-50%);
  }


  @media (max-width: 768px) {
    top: 10%;
    left: 43%;

    // base
    img:nth-child(1) {
      width: 207.79px;
      height: 64.72px;

      top: 75%;
      left: 35%;
    }

    // pillar
    img:nth-child(2) {
      width: 149.98px;
      height: 111.63px;

      top: 60%;
      left: 44%;

      // animation
      animation-name: pillarImg;
      animation-duration: 1s;

      @keyframes pillarImg {
        0% {top: 80%;}
        100% {top: 60%;}
      }
    }

    // middle
    img:nth-child(3) {
      width: 71.27px;
      height: 113.42px;

      top: 40%;
      left: 55%;

      // animation
      animation-name: middleImg;
      animation-duration: 1.5s;
      animation-delay: 1s;
      animation-fill-mode: backwards;
      @keyframes middleImg {
        0% {transform: scale(0, 0); top: 50%}
        100% {transform: scale(1, 1); top: 40%;}
      }
    }

    // line 1
    img:nth-child(4) {
      width: 2.19px;
      height: 141.45px;

      top: 42%;
      left: 46.5%;
    }

    // line 2
    img:nth-child(5) {
      width: 2.19px;
      height: 141.45px;

      top: 42.5%;
      left: 51%;
    }

    // line 3
    img:nth-child(6) {
      width: 2.19px;
      height: 141.45px;

      top: 46%;
      left: 66%;
    }

    // line 4
    img:nth-child(7) {
      width: 2.19px;
      height: 141.45px;

      top: 42%;
      left: 80%;
    }

    // line 5
    img:nth-child(8) {
      width: 2.19px;
      height: 141.45px;

      top: 42%;
      left: 86%;
    }

    // rotating
    img:nth-child(9) {
      width: 160.09px;
      height: 160.09px;

      top: 25%;
      left: 42%;
    }

    // E
    img:nth-child(10) {
      width: 55.37px;
      height: 55.37px;

      top: 35.5%;
      left: 58%;
    }

    // Left
    img:nth-child(11) {
      width: 17.42px;
      height: 60.08px;

      top: 57%;
      left: 36%;
    }

    // Right
    img:nth-child(12) {
      width: 24.11px;
      height: 102.02px;

      top: 50%;
      left: 91%;
    }

    // Moving Right
    img:nth-child(13) {
      width: 17.42px;
      height: 60.08px;

      top: 110%;
      left: 71%;
      z-index: -1;

      // animation
      animation-name: movingRight;
      animation-duration: 7s;
      animation-delay: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      @keyframes movingRight {
        0% {top: 100%;}
        100% {top: -50%;}
      }
    }
  
    // Moving Left
    img:nth-child(14) {
      width: 6px;
      height: 50px;

      top: 110%;
      left: 46%;
      z-index: -1;

      // animation
      animation-name: movingLeft;
      animation-duration: 7s;
      animation-delay: 6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      @keyframes movingLeft {
        0% {top: 100%;}
        100% {top: -50%;}
      }
    }
  }
  // 768px media query ends


  @media (max-width: 576px) {
    top: 8%;
    left: 40%;
  }
  
  @media (max-width: 415px) {
    left: 36%;
  }
`
