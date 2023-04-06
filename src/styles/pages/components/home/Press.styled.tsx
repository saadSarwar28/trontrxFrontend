import styled from "styled-components"


export const PressStyled = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 10%;
    padding-right: 10%;

    @media (max-width: 992px) {
        padding-top: 50px;
        padding-bottom: 80px;
        padding-left: 0;
        padding-right: 0;
    }
`

export const PressHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 114.5%;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.blackFont};
    margin-bottom: 46px;
    text-align: center;

    transform: scale(0);
    &.animate {
        // animation
        animation-name: pressHeading;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        @keyframes pressHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    span {
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 992px) {
        font-size: 38px;
    }   
    
    @media (max-width: 300px) {
        font-size: 30px;
    }   
`

export const PressLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: space-between;
    align-items: center;
    grid-gap: 30px;

    width: 70%;
    max-width: 1000px;
    margin: auto;

    > a {
        opacity: 0;
        &.animate {
            // animation
            animation-name: pressLink;
            animation-duration: 2s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes pressLink {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }
    }

    > a:nth-child(1) {
        height: 40px;
    }

    > a:nth-child(6) {
        width: 100px;
        height: 60px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 992px) {
        width: 80%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 576px) {
        width: 70%;
        grid-template-columns: repeat(1, 150px);
        justify-content: center;

        > a:nth-child(2) {
            margin-bottom: 15px;
            transform: translateY(18px);
        }

        > a:nth-child(6) {
            transform: translate(30px, -30px);
        }
    }
`