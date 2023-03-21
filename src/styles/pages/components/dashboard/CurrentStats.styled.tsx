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

    @media (max-width: 768px) {
        padding-left: 15px;
    }
`

export const InfoCard = styled.div`
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

    margin-top: 10px;
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
    position: relative;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 89.69px;
    height: 49.47px;
    background: #000000;
    border-radius: 4.19249px;

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
`

export const StatsCard = styled.div`
    width: 96%;
    height: 519px;
    background: #FFFFFF;
    border-radius: 20.9624px;
    border: 5px solid #FBBD18;
    margin-bottom: 200px;

    @media (max-width: 992px) {
        margin-bottom: 100px;
    }

    @media (max-width: 768px) {
        height: auto;
        padding-bottom: 31px;
        margin-bottom: 75px;
        border: 3px solid #FBBD18;
    }
`

export const StatsButton = styled(YellowButton1)`
    margin-top: 40px;
    margin-bottom: 42px;

    @media (max-width: 768px) {
        margin-top: 13px;
        margin-bottom: 28px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 35px;

    > div {
        display: flex;
        column-gap: 70px;
        margin-left: 40px;
        margin-right: 40px
    }

    @media (max-width: 1300px) {
        > div {
            column-gap: 40px;
        }
    }

    @media (max-width: 1200px) {
        row-gap: 20px;

        > div {
            column-gap: 20px;
            justify-content: space-between;
            margin-left: 14px;
            margin-right: 14px;
        }
    }

    @media (max-width: 768px) {
        > div {
            flex-direction: column;
            row-gap: 20px;
            margin-left: 40px;
            margin-right: 40px
        }
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;
    height: 147px;
    background: #000000;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 4.28936px;

    img {
        width: 37.5px;
        height: 37.5px;
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
        font-size: 20.54px;
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

        p {
            font-size: 18.54px;
        }
    }

    @media (max-width: 576px) {
        width: 100%;

        p {
            font-size: 16.54px;
        }
    }
`