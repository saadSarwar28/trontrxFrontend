import styled from "styled-components"
import { YellowButton1 } from "../currentStats/InfoCard.styled"


export const TreeCardStyled = styled.div`
    width: 100%;
    max-width: 1038px;
    min-height: 1495px;;
    background: #FFFFFF;
    border-radius: 24.5px;
    text-align: center;
    border: 5px solid #FBBD18;
    /* margin-left: -23px; */
    margin-bottom: 21px;

    /* @media (max-width: 1200px) {
        min-height: 840px;
    } */

    /* @media (max-width: 992px) {
        margin-left: 5px;
        margin-top: 29px;
    } */

    /* @media (max-width: 768px) {
        min-height: 730px;
    } */

    /* @media (max-width: 600px) {
        padding-bottom: 30px;
    } */
`

export const HierarchyButton = styled(YellowButton1)`
    animation: none;

    /* @media (max-width: 992px) {
        margin-top: 22px;
    } */
`

export const HierarchyTreeStyled = styled.div`
    margin-top: 50px;
    width: 100%;
    overflow: auto;
    padding-bottom: 50px;

    /* display: flex;
    justify-content: center; */

    ul::before {
        height: 73px;
        top: -22px;
    }

    li::after, li::before {
        height: 71px
    }
`

