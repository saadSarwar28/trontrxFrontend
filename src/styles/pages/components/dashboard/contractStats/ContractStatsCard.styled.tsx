import styled from "styled-components"


export const ContractStatsCardStyled = styled.div`
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
        height: auto;
        margin-top: 29px;
        margin-bottom: 32px;
        border: 3px solid #FBBD18;
    }

    @media (max-width: 576px) {
        /* height: 668px; */
    }
`

export const ContractStatsButton = styled.button`
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
    margin-right: 30px;
    margin-left: 30px;

    // animation
    transform: translateX(-100vw);
    animation: contractStatsButton 1s ease 0.25s 1 normal forwards;
    @keyframes contractStatsButton {
        0% {transform: translateX(-100vw);}
        100% {transform: translateX(0);}
    }

    @media (max-width: 768px) {
        margin-top: 13px;
        margin-bottom: 28px;
    }

    @media (max-width: 576px) {
        font-size: 15px;
        width: calc(100% - 20px);
        margin-right: 10px;
        margin-left: 10px;
    }

    @media (max-width: 300px) {
        font-size: 13px;
    }
`

export const ContractAddressButton = styled(ContractStatsButton)`
    background: #000000;
    color: #F3B51C;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16.77px;
    line-height: 25px;
    //text-transform: uppercase;
    padding-left: 20px;
    padding-right: 16px;
    margin-top: 24px;
    margin-left: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // animation
    animation-delay: 0.5s;

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

    @media (max-width: 768px) {
        margin-top: 0;
        margin-bottom: 0;
    }

    @media (max-width: 576px) {
        padding-left: 16px;
        margin-left: 10px;

        span:first-child {
            font-size: 13px;
        }
        
        span:last-child {
            font-size: 7px;
        }
    }
`

export const ContractCardsContainer = styled.div`
    display: flex;
    column-gap: 70px;
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 40px;

    @media (max-width: 1300px) {
        column-gap: 40px;
    }

    @media (max-width: 1200px) {
        row-gap: 20px;
        column-gap: 20px;
        justify-content: space-between;
        margin-left: 14px;
        margin-right: 14px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        row-gap: 20px;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 28px;
    }

    @media (max-width: 300px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`

export const ContractCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 30%;
    height: 147px;
    background: #000000;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    border-radius: 4.28936px;

    // animation
    transform: scale(0);
    animation: contractStatsCard 1s ease 0.5s 1 normal forwards;
    @keyframes contractStatsCard {
        0% {transform: scale(0);}
        100% {transform: scale(1);}
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
        font-size: 18px;
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

        p, div {
            font-size: 18.54px;
        }
    }

    @media (max-width: 576px) {
        width: 100%;

        p, div {
            font-size: 15px;
        }
    }
`
