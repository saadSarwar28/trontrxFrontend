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
`

export const HierarchyButton = styled(YellowButton1)`
    animation: none;
`

export const HierarchyTreeStyled = styled.div`
    margin-top: 50px;
    overflow: auto;
    padding-bottom: 50px;

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
        height: 73px;
        top: -22px;
    }

    li::after, li::before {
        height: 71px
    }
`

