import styled from "styled-components"
import { YellowButton1 } from "../currentStats/InfoCard.styled"


export const TreeCardStyled = styled.div`
    max-width: 1038px;
    margin: 0 30px;
    min-height: 1495px;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    border: 5px solid #FBBD18;
    margin-bottom: 21px;
    padding-bottom: 30px;

    @media (min-width: 1400px) {
        max-width: 1200px;
    }

    @media (min-width: 1500px) {
        max-width: 1250px;
    }

    @media (min-width: 1600px) {
        max-width: 1350px;
    }

    @media (min-width: 1800px) {
        max-width: 1500px;
    }

    @media (min-width: 2000px) {
        max-width: 1800px;
    }

    @media (max-width: 1300px) {
        max-width: 900px;
    }

    @media (max-width: 1200px) {
        max-width: 800px;
    }

    @media (max-width: 991px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        min-height: 880px;
        margin: 0 15px;
        margin-top: 27px;
    }
`

export const HierarchyButton = styled(YellowButton1)`
    animation: none;

    @media (max-width: 300px) {
        font-size: 19px;
    }
`

export const HierarchyTreeStyled = styled.div`
    /* height: 1450px; */
    margin-top: 50px;
    overflow: auto;
    padding-top: 20px;
    padding-bottom: 50px;

    // mobile
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0;

        ::-webkit-scrollbar {
            width: 5px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }
    }

    // desktop
    @media (min-width: 769px) {
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #888; 
            border-radius:10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555; 
        }

        ul::before {
            height: 93px;
            top: -22px;
        }

        li::after, li::before {
            height: 71px
        }
    }
`

