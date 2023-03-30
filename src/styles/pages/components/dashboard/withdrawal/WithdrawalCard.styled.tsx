import styled from "styled-components"
import { YellowButton1 } from "../currentStats/InfoCard.styled"

export const WithdrawalCardStyled = styled.div`
    width: 95%;
    max-width: 1038px;
    min-height: 1495px;;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    border: 5px solid #FBBD18;
    margin-left: -23px;
    margin-bottom: 21px;

    @media (max-width: 1200px) {
        min-height: 840px;
    }

    @media (max-width: 992px) {
        margin-left: 5px;
        margin-top: 29px;
    }

    @media (max-width: 768px) {
        min-height: 730px;
    }

    @media (max-width: 600px) {
        padding-bottom: 30px;
    }
`

export const InfoButton = styled(YellowButton1)`
    animation: none;

    @media (max-width: 992px) {
        margin-top: 22px;
    }
`

export const CardsSectionDesktop = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 67px;
    margin-top: 67px;
    padding-right: 58px;

    > div:not(:last-child) {
        margin-bottom: 25px;
    }

    @media (max-width: 1200px) {
        display: none;
    }
`

export const ThreeCardsDesktop = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(240px, 264px));
    grid-auto-rows: 221px; 
    grid-column-gap: 5%;
    justify-content: space-around;

    @media (max-width: 1200px) {
        
    }
`

export const TwoCardsDesktop = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 264px));
    grid-auto-rows: 221px; 
    grid-column-gap: 5%;
    justify-content: center;
`

export const CardDesktop = styled.div`
    border: 3px solid #FBBD18;
    background: #000000;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    border-radius: 4.28936px;
    padding: 0 10px;
    position: relative;

    > img {
        margin-top: 27px;
    }
    
    > p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 16.54px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
        margin-top: 15px;
    }

    > div {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28.54px;
        line-height: 37px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
        
        position: absolute;
        bottom: 35px;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const CardsSectionMobile = styled.div`
    display: none;

    @media (max-width: 1200px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(130px, 1fr));
        grid-auto-rows: 60px;
        grid-gap: 11px 13px;
        margin: 23px 90px 0;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(110px, 1fr));
        margin: 23px 30px 0;
    }
`

export const CardMobile = styled.div`
    background: #000000;
    border: 2.4497px solid #FBBD18;
    box-shadow: -8.75639px 9.92391px 18.6803px rgba(0, 0, 0, 0.25), inset 0.583759px 1.75128px 9.34015px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2.9188px);
    border-radius: 3.50256px;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 8px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }

    > div {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 12.6427px;
        line-height: 16px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }
`

export const TimerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 114px;
    margin-top: 30px;
    margin-left: 67px;
    margin-right: 60px;
    padding-left: 23px;
    padding-right: 31px;

    background: #000000;
    border: 3px solid #FBBD18;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    border-radius: 4.28936px;

    > p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 15.54px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }

    @media (max-width: 1200px) {
        margin: 11px 90px 0;
    }

    @media (max-width: 768px) {
        margin: 11px 30px 0;
        height: 52px;
        padding-left: 12px;
        padding-right: 12px;
        border: 2.4497px solid #FBBD18;

        > p {
            font-size: 8px;
        }
    }
`

export const Paragraphs = styled.ul`
    list-style-type: none;
    margin-top: 190px;
    padding-left: 60px;
    padding-right: 50px;

    > li:not(:last-child) {
        margin-bottom: 24px;
    }

    @media (max-width: 1200px) {
        margin: 40px 90px 0;
        padding-left: 0;
        padding-right: 0;
    }

    @media (max-width: 768px) {
        margin: 21px 30px 0;

        > li:not(:last-child) {
            margin-bottom: 12px;
        }
    }
`

export const Paragraph = styled.li`
    display: flex;
    align-items: center;
    column-gap: 13px;

    > p {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 149.4%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        text-align: left;
    }

    @media (max-width: 768px) {
        align-items: flex-start;

        > img {
            margin-top: 3px;
        }

        > p {
            font-weight: 400;
            font-size: 13px;
            line-height: 149.4%;
            letter-spacing: -0.05em;
        }
    }
`

export const WithdrawButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 39px;

    /* &.animate {
        // animation
        animation: withdrawButton 2s ease 1.25s 1 normal backwards;
        @keyframes withdrawButton {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    } */

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 154px;
        height: 56px;
        background: #F2A71B;
        border-radius: 5px;
        border: none;

        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 32px;
        text-transform: uppercase;
        color: #000000;
        cursor: pointer;
    }

    @media (max-width: 992px) {
        // animation
        /* animation: withdrawButton 2s ease 1.5s 1 normal backwards;
        @keyframes withdrawButton {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        } */
    }
`