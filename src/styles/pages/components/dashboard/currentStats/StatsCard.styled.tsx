import styled from "styled-components"
import { YellowButton1 } from "./InfoCard.styled"


export const StatsCardStyled = styled.div`
    width: 96%;
    height: 519px;
    background: #FFFFFF;
    border-radius: 20.9624px;
    border: 5px solid #FBBD18;
    margin-bottom: 200px;

    @media (max-width: 992px) {
        margin-bottom: 100px;
    }

    @media (max-width: 768px) {
        height: auto;
        padding-bottom: 31px;
        margin-bottom: 75px;
        border: 3px solid #FBBD18;
    }
`

export const StatsButton = styled.button`
    width: calc(100% - 80px);
    height: 61px;
    background: #FBBD18;
    border: 1px solid #000000;
    border-radius: 9.22347px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 26.8319px;
    line-height: 40px;
    text-transform: uppercase;
    color: #000000;

    margin-right: 40px;
    margin-left: 40px;
    margin-top: 40px;
    margin-bottom: 42px;

    // animation
    transform: translateX(-100vw);
    &.animate {
        animation: statsButton 2s ease 0s 1 normal forwards;
        @keyframes statsButton {
            0% {transform: translateX(-100vw);}
            100% {transform: translateX(0);}
        }
    }

    @media (max-width: 768px) {
        margin-top: 13px;
        margin-bottom: 28px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 35px;

    > div {
        display: flex;
        column-gap: 70px;
        margin-left: 40px;
        margin-right: 40px
    }

    @media (max-width: 1300px) {
        > div {
            column-gap: 40px;
        }
    }

    @media (max-width: 1200px) {
        row-gap: 20px;

        > div {
            column-gap: 20px;
            justify-content: space-between;
            margin-left: 14px;
            margin-right: 14px;
        }
    }

    @media (max-width: 768px) {
        > div {
            flex-direction: column;
            row-gap: 20px;
            margin-left: 40px;
            margin-right: 40px
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;
    height: 147px;
    background: #000000;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 4.28936px;

    // animation
    transform: scale(0);
    &.animate {
        animation: statsCard 2s ease 2s 1 normal forwards;
        @keyframes statsCard {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    img {
        width: 37.5px;
        height: 37.5px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18.54px;
        line-height: 28px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    div {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20.54px;
        line-height: 31px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    @media (max-width: 1300px) {
        p {
            font-size: 17px;
        }
    }

    @media (max-width: 1200px) {
        width: 32%;

        p {
            font-size: 15.5px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;

        p {
            font-size: 18.54px;
        }
    }

    @media (max-width: 576px) {
        width: 100%;

        p {
            font-size: 16.54px;
        }
    }
`