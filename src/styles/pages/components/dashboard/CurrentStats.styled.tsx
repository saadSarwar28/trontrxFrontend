import styled from "styled-components"


export const CurrentStatsStyled = styled.div`
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
`

export const InfoCard = styled.div`
    width: 96%;
    height: 519px;
    background: #FFFFFF;
    border-radius: 20.9624px;
    text-align: center;

    margin-bottom: 30px;

    @media (max-width: 1200px) {
        height: 620px;
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

    margin-top: 15px;
    margin-right: 40px;
    margin-left: 40px;

    @media (max-width: 1200px) {
        width: calc(100% - 28px);
        height: 50px;
        margin-left: 14px;
        font-size: 21px;
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
    padding-left: 27px;
    padding-right: 16px;
    margin-top: 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        flex-direction: column;
        height: 112px;
        justify-content: space-evenly;
        margin-top: 16px;

        span:first-child {
            font-size: 16.77px;
        }
        
        span:last-child {
            font-size: 11.77px;
        }
    }
`

export const YellowButton2 = styled(BlackButton1)`
    background: #F3B51C;
    color: #000000;
`

export const BlackButton2 = styled(BlackButton1)`
    a {
        font-size: 11.739px;
        color: #F3B51C;
    }

    @media (max-width: 1200px) {
        a {
            font-size: 9.77px;
        }

        padding: 0;
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

    @media (max-width: 1200px) {
        width: calc(100% - 28px);
        margin-top: 16px;
        font-size: 14.77px;
    }
`

export const CopyButton = styled.button`
    width: 89.69px;
    height: 49.47px;
    background: #000000;
    border-radius: 4.19249px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 21.8009px;
    line-height: 33px;
    text-transform: uppercase;
    color: #F2A71B;
    margin-top: 36px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1200px) {
        margin-top: 40px;
    }

    @media (max-width: 576px) {
        margin-top: 25px;
    }
`

export const StatsCard = styled.div`
    
`