import styled from 'styled-components'

export const ContractStatsStyled = styled.section`
    display: flex;
    align-items: center;

    height: 297px;
    background: #F2F2F2;
`

export const StatsLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    width: 30%;

    > div {
        text-align: center;
        margin-top: -10px;
        margin-left: -15px;

        img {
            width: 67px;
            height: 27.64px;
        }

        h2 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 114.5%;
            /* or 27px */
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.blackFont};
        }
    }

    > img {
        position: absolute;
        top: -20px;
        right: 20px;

        width: 14px;
        height: 102px;
    }
`

export const StatsRight = styled.div`
    display: flex;
    align-items: center;

    width: 70%;
    padding: 0 30px 0 45px;

    > div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        position: relative;

        width: 25%;
        text-align: center;

        img {
            position: absolute;
            right: 0;
        }
    }

    > div:last-child {
        img {
            display: none;
        }
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 114.5%;
        /* or 34px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-bottom: 6px;
    }

    p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 114.5%;
        /* or 17px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #B0B0B0;
    }
`