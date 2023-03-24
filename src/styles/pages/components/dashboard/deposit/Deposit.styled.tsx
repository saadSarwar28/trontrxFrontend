import styled from "styled-components"


export const DepositStyled = styled.div`
    background-image: url('/assets/images/dashboard/dashboard-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const Main = styled.div`
    display: flex;
`

export const Page = styled.main`
    width: 100%;
    padding-left: 30px;

    @media (max-width: 768px) {
        padding-left: 15px;
    }
`