import styled from "styled-components"


export const InfoCardStyled = styled.div`
    width: 96%;
    height: 529px;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    margin-bottom: 21px;
    margin-top: 10px;
    border: 5px solid #FBBD18;

    @media (max-width: 1200px) {
        height: 620px;
    }

    @media (max-width: 768px) {
        margin-top: 29px;
        margin-bottom: 32px;
        border: 3px solid #FBBD18;
    }

    @media (max-width: 576px) {
        height: 668px;
    }
`

export const YellowButton1 = styled.button`
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
    cursor: pointer;

    margin-top: 10px;
    margin-right: 40px;
    margin-left: 40px;

    // animation
    animation: yellowButton1 1s ease 0s 1 normal backwards;
    @keyframes yellowButton1 {
        0% {transform: translateY(-100vh);}
        100% {transform: translateY(initial);}
    }

    @media (max-width: 1200px) {
        width: calc(100% - 28px);
        height: 50px;
        margin-left: 14px;
        font-size: 21px;
    }

    @media (max-width: 300px) {
        width: calc(100% - 20px);
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const BlackButton1 = styled(YellowButton1)`
    background: #000000;
    color: #F3B51C;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16.77px;
    line-height: 25px;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 16px;
    margin-top: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // animation
    animation-delay: 0.25s;

    @media (max-width: 1200px) {
        flex-direction: column;
        height: 112px;
        justify-content: space-evenly;
        margin-top: 16px;

        span:first-child {
            font-size: 16.77px;
        }
        
        span:last-child {
            font-size: 10px;
        }
    }

    @media (max-width: 300px) {
        padding-left: 16px;

        span:first-child {
            font-size: 13px;
        }
        
        span:last-child {
            font-size: 8px;
        }
    }
`

export const YellowButton2 = styled(BlackButton1)`
    background: #F3B51C;
    color: #000000;

    // animation
    animation-delay: 0.5s;
`

export const BlackButton2 = styled(BlackButton1)`
    // animation
    animation-delay: 0.75s;

    a {
        font-size: 11.739px;
        color: #F3B51C;
    }

    @media (max-width: 1200px) {
        padding: 0;

        a {
            font-size: 9.77px;
        }
    }

    @media (max-width: 300px) {
        a {
            font-size: 8px;
        }
    }
`

export const CardText = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16.77px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;

    width: 70%;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;

    // animation
    animation: cardText 2s ease 1s 1 normal backwards;
    @keyframes cardText {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @media (max-width: 1200px) {
        width: calc(100% - 28px);
        margin-top: 16px;
        font-size: 14.77px;
    }
`

export const ConnectWalletButton = styled.button`
    position: relative;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 235px;
    height: 49.47px;
    background: #000000;
    border-radius: 4.19249px;

    // animation
    animation: copyButton 1s ease 1.25s 1 normal backwards;
    @keyframes copyButton {
        0% {transform: scale(0);}
        100% {transform: scale(1);}
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21.8009px;
        line-height: 33px;
        text-transform: uppercase;
        color: #F2A71B;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        margin-top: 35px;
    }

    @media (max-width: 576px) {
        margin-top: 25px;
    }

    @media (max-width: 576px) {
        margin-top: 15px;
    }
`

export const CopyButton = styled.button`
    position: relative;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 89.69px;
    height: 49.47px;
    background: #000000;
    border-radius: 4.19249px;

    // animation
    animation: copyButton 1s ease 1.25s 1 normal backwards;
    @keyframes copyButton {
        0% {transform: scale(0);}
        100% {transform: scale(1);}
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21.8009px;
        line-height: 33px;
        text-transform: uppercase;
        color: #F2A71B;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        margin-top: 35px;
    }

    @media (max-width: 576px) {
        margin-top: 25px;
    }

    @media (max-width: 576px) {
        margin-top: 15px;
    }
`

export const CopyMessage = styled.div`
    position: absolute;
    top: 7px;
    left: 100%;
    width: 200%;
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    opacity: 0;
    transition: 0.3s;

    &.shown {
        opacity: 1;
    }

    @media (max-width: 576px) {
        left: 75%;
        top: 10px;
        font-size: 16px;
    }

    @media (max-width: 300px) {
        left: -50%;
        top: -20px;
        font-size: 13px;
    }
`
