import styled from 'styled-components'


export const HowInvestStyled = styled.section`
    padding: 90px 20px 110px 0;
    /* padding-bottom: 110px; */

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 54px;
        line-height: 114.5%;
        /* identical to box height, or 62px */
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;
        margin-bottom: 5px;

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }

    > div {
        display: flex;
    }
`

export const LeftColumn = styled.div`
    width: 49%;
    position: relative;

    > img:first-child {
        width: 360px;
        height: 643px;
    }

    > img:last-child {
        width: 467px;
        height: 463.11px;
        position: absolute;
        top: 90px;
        left: 170px;
    }
`

export const RightColumn = styled.div`
    width: 51%;

    > div {
        margin-top: 47px;
    }
`

export const Section = styled.div`
    margin-bottom: 5px;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 30.4557px;
        line-height: 114.5%;
        /* or 35px */
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        
        margin-left: 94px;
    }
    

    > div {
        display: flex;
        gap: 6px;

        img {
            width: 89.34px;
            height: 90.7px;
        }

        p {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            line-height: 114.5%;
            /* or 23px */
            letter-spacing: 0.05em;
            color: ${({ theme }) => theme.colors.blackFont};
            padding-top: 5px;
        }
    }
`