import styled from "styled-components"
import { YellowButton1 } from "../currentStats/InfoCard.styled"


export const DepositCardStyled = styled.div`
    width: 96%;
    min-height: 1130px;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    margin-bottom: 21px;
    margin-top: 10px;
    border: 5px solid #FBBD18;

    @media (max-width: 768px) {
        min-height: 840px;
        margin-bottom: 56px;
        margin-top: 29px;
    }
`

export const ContributionButton = styled(YellowButton1)`
    
    @media (max-width: 300px) {
        font-size: 15px;
    }
`

export const AmountButton = styled.button`
    width: calc(100% - 80px);
    height: 82px;
    background: #000000;
    border: 1px solid #000000;
    border-radius: 9.22347px;

    padding-left: 27px;
    padding-right: 16px;
    margin-top: 24px;
    margin-right: 40px;
    margin-left: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // animation
    animation: amountButton 1s ease 0.25s 1 normal backwards;
    @keyframes amountButton {
        0% {transform: translateY(-100vh);}
        100% {transform: translateY(initial);}
    }

    > span {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 26.8319px;
        line-height: 40px;
        text-transform: uppercase;
        color: #FBBD18;
    }

    @media (max-width: 1200px) {
        width: calc(100% - 28px);
        height: 70px;
        margin-left: 14px;
        margin-right: 14px;
    }

    @media (max-width: 768px) {
        height: 40px;
        padding-left: 13px;
        padding-right: 13px;
        margin-top: 13px;

        > span {
            font-size: 13.83px;
        }
    }

    @media (max-width: 300px) {
        width: calc(100% - 20px);
        margin-left: 10px;
        margin-right: 10px;
        padding-left: 5px;
        padding-right: 5px;

        > span {
            font-size: 9px;
        }
    }
`

export const AmountSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > div:nth-child(1) {
        width: 110.8px;
        height: 33.94px;
        background: #FFFFFF;
        border: 0.390128px solid #FBBD18;
        border-radius: 2.34077px;

        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 15.5388px;
        line-height: 23px;
        text-transform: uppercase;
        color: #000000;
        margin-right: 15px;
    }

    // plus minus icons
    > div:nth-child(2), > div:nth-child(3) {
        width: 36.4px;
        height: 32.65px;
        background: #FFFFFF;
        border: 0.375258px solid #FBBD18;
        border-radius: 2.25155px;
        cursor: pointer;
    }

    > div:nth-child(3) {
        margin-left: 11px;
    }


    @media (max-width: 768px) {
        margin-right: 0;

        > div:nth-child(1) {
            width: 51.18px;
            height: 15.68px;
            font-size: 9px;
            margin-right: 7px;
        }

        // plus minus icons
        > div:nth-child(2), > div:nth-child(3) {
            width: 16.81px;
            height: 15.08px;

            > img {
                width: 10.92px;
                height: 11.72px;
            }
        }

        > div:nth-child(3) {
            margin-left: 5px;
        }
    }
`

export const CardsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-auto-rows: 147px; 
    grid-gap: 10% 5%;
    justify-content: space-around;
    padding: 29px 80px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(135px, 1fr));
        grid-auto-rows: 44px; 
    }

    @media (max-width: 300px) {
        grid-template-columns: repeat(2, minmax(110px, 1fr));
    }
`

export const Card = styled.div`
    background: #000000;
    border: 3px solid #FBBD18;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    border-radius: 12.5px;

    // animation
    transform: scale(0);
    animation: depositCard 1s ease 0.5s 1 normal forwards;
    @keyframes depositCard {
        0% {transform: scale(0);}
        100% {transform: scale(1);}
    }

    // card top
    > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-left: 16px;
        padding-right: 23px;
        padding-top: 21px;
    }

    // card title
    > div:first-child p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 33.54px;
        line-height: 50px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
    }

    // card bottom
    > div:last-child {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28.54px;
        line-height: 37px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
        margin-top: 18px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1.53409px solid #FBBD18;
        border-radius: 6.39205px;

        // card top
        > div:first-child {
            padding-left: 6px;
            padding-top: 0;

            img {
                display: none;
            }

            p {
                font-size: 17.1511px;
                letter-spacing: 0.08em;
            }
        }

        // card bottom
        > div:last-child {
            font-size: 14.5943px;
            margin-top: 0;
            padding-right: 5px;
        }
    }

    @media (max-width: 300px) {
        > div:first-child p, > div:last-child { {
            font-size: 13.1511px;
        }
    }
`

export const Paragraphs = styled.ul`
    list-style-type: none;
    margin-top: 90px;
    padding-left: 94px;
    padding-right: 100px;

    @media (max-width: 992px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media (max-width: 768px) {
        margin-top: 31px;
        padding-left: 28px;
        padding-right: 28px;
    }

    @media (max-width: 300px) {
        margin-top: 31px;
        padding-left: 10px;
        padding-right: 10px;
    }
`

export const Paragraph = styled.li`
    display: flex;
    margin-bottom: 25px;

    // animation
    animation: paragraph1 1s ease 0.25s 1 normal backwards;
    @keyframes paragraph1 {
        0% {transform: translateX(-100vw);}
        100% {transform: translateX(0);}
    }

    &.animate {
        // animation
        transform: translateX(-100vw);
        animation: paragraph 1s ease 0.25s 1 normal forwards;
        @keyframes paragraph {
            0% {transform: translateX(-100vw);}
            100% {transform: translateX(0);}
        }
    }

    &#para1 {
        animation-delay: 0.35s;
    }

    &#para2 {
        animation-delay: 0.45s;
    }

    &#para3 {
        animation-delay: 0.55s;
    }

    &#para4 {
        animation-delay: 0.65s;
    }

    &#para5 {
        animation-delay: 0.75s;
    }

    > img {
        width: 17.8px;
        height: 19.94px;
    }

    > p {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13.5px;
        line-height: 149.4%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #000000;
        text-align: left;
        margin-left: 8px;
    }

    @media (max-width: 992px) {
        &.animate {
            // animation
            transform: translateX(-100vw);
            animation: paragraph 1s ease 0.25s 1 normal forwards;
            @keyframes paragraph {
                0% {transform: translateX(-100vw);}
                100% {transform: translateX(0);}
            }
        }

        &#para1 {
        animation-delay: 0.35s;
        }

        &#para2 {
            animation-delay: 0.45s;
        }

        &#para3 {
            animation-delay: 0.55s;
        }

        &#para4 {
            animation-delay: 0.65s;
        }

        &#para5 {
            animation-delay: 0.75s;
        }

    }

    @media (max-width: 768px) {
        margin-bottom: 20px;

        > p {
            font-weight: 400;
            font-size: 12px;
            line-height: 149.4%;
            letter-spacing: -0.05em;
            text-transform: uppercase;
            color: #000000;
        }
    }
`

export const DepositButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 39px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 126px;
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

    @media (min-width: 993px) {
        transform: scale(0);
        &.animate {
            // animation
            animation: depositButton 2s ease 0.25s 1 normal forwards;
            @keyframes depositButton {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }
    }

    @media (max-width: 992px) and (min-width: 601px) {
        transform: scale(0);
        // animation
        animation: depositButton 2s ease 0.25s 1 normal forwards;
        @keyframes depositButton {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    @media (max-width: 600px) {
        transform: scale(0);
        &.animate {
        // animation
            animation: depositButton 2s ease 0.25s 1 normal forwards;
            @keyframes depositButton {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }
    }

    @media (max-width: 300px) {
        margin-top: 30px;
        margin-bottom: 20px;
    }
`