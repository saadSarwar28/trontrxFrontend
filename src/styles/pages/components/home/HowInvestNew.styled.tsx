import styled from "styled-components"


export const HowInvestNewStyled = styled.div`
    width: 100%;
    height: 1050px;
    padding: 90px 0 110px 0;

    @media (min-width: 1400px) {
            padding-left: 5%;
            padding-right: 5%;
    }

    @media (min-width: 1600px) {
            padding-left: 8%;
            padding-right: 8%;
    }

    @media (min-width: 2000px) {
            padding-left: 10%;
            padding-right: 10%;
    }

    @media (max-width: 768px) {
        height: 955px;
    }

    @media (max-width: 576px) {
        height: 850px;
        padding: 70px 0 110px 0;
    }

    @media (max-width: 300px) {
        height: 730px;
    }
`

export const HowInvestHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 114.5%;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.blackFont};
    text-align: center;
    margin-bottom: 8px;

    transform: scale(0);
    &.animate {
        // animation
        animation: investHeading 1s ease 0.5s 1 normal forwards;
        @keyframes investHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    span {
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 1200px) {
        font-size: 30px;
    }

    @media (max-width: 300px) {
        font-size: 26px;
    }
`

export const CarouselSection = styled.div`
    position: relative;

    transform: scale(0);
    &.animate {
        // animation
        animation: investHeading 1.5s ease 0.25s 1 normal forwards;
        @keyframes investHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    > img:first-child {
        position: absolute;
        top: -95px;
        left: 0;
        z-index: -1;
        width: 35%;
        height: 650px;

        /* transform: translateX(-100vw);
        &.animate {
            animation-name: investImgLeft;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes investImgLeft {
                0% {transform: translateX(-100vw);}
                100% {transform: translateX(0);}
            }
        } */
    }

    > div {
        width: 65%;
        margin: 110px auto 0;
    }

    > img:last-child {
        position: absolute;
        top: -95px;
        right: 0;
        z-index: -1;
        transform: rotate(180deg);
        width: 35%;
        height: 650px;

        /* transform: translateX(100vw);
        &.animate {
            animation-name: investImgRight;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes investImgRight {
                0% {transform: translateX(100vw);}
                100% {transform: translateX(0);}
            }
        } */
    }

    .react-multi-carousel-item--active {
       
    }

    // left and right arrows 
    .react-multiple-carousel__arrow--left, .react-multiple-carousel__arrow--right {
        bottom: 22.5%;
    }

    
    @media (max-width: 1200px) {
        > img:first-child, > img:last-child {
            width: 25%;
        }

        > div {
            width: 72%;
        }
    }

    @media (max-width: 768px) {
        // left and right arrows 
        .react-multiple-carousel__arrow--left, .react-multiple-carousel__arrow--right {
            bottom: 27.2%;
        }

        > div {
            top: 25px;
        }

        > img:first-child, > img:last-child {
            height: 520px;
            top: -85px;
        }
    }

    @media (max-width: 576px) {
        > div {
            width: 90%;
            margin: 40px auto 0;
        }

        > img:first-child, > img:last-child {
            display: none;
        }

        .react-multiple-carousel__arrow--left {
            bottom: 27.5%;
            left: 0;
            min-width: 38px;
            min-height: 38px;
        }

        .react-multiple-carousel__arrow--right {
            bottom: 27.5%;
            right: 0;
            min-width: 38px;
            min-height: 38px;
        }
    }

    @media (max-width: 300px) {
        > div {
            margin: 30px auto 0;
        }

        // left and right arrows 
        .react-multiple-carousel__arrow--left, .react-multiple-carousel__arrow--right {
            bottom: 42%;
        }

        // dots
        .react-multi-carousel-dot-list {
            bottom: 5px;
        }
    }
`