import styled from "styled-components"


export const HeaderStyled = styled.header`
    height: 127px;
    background-color: ${({ theme }) => theme.colors.blackBg};
    display: flex;
    justify-content: space-between;

    // menu icon
    > img {
        width: 30px;
        height: 21.43px;
        display: none;
    }

    @media (max-width: 992px) {
        border-bottom: 2px solid #FBBD18;

        > img {
            display: block;
            margin-top: 31px;
            margin-right: 25px;
        }
    }
`

export const DashboardLogo = styled.div`
    margin-top: 16px;
    margin-left: 84px;
    display: flex;

    > div:nth-child(1) {
        img {
            width: 74px;
            height: 76px;
        }
    }

    > div:nth-child(2) {
        h1 {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 37px;
            line-height: 48px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            /* color: #f2e4cb; */
            color: ${({ theme }) => theme.colors.whiteFont};
            text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;

            margin-left: 9px;
        }

        p {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 19px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.whiteFont};
            text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;

            margin-left: 5px;
        }
    }

    @media (max-width: 1200px) {
        margin-left: 40px;
    }

    @media (max-width: 992px) {
        margin-top: 36px;
        margin-left: 25px;

        > div:nth-child(1) {
            img {
                width: 61px;
                height: 62px;
            }
        }

        > div:nth-child(2) {
            h1 {
                font-size: 25px;
            }

            p {
                font-size: 11px;
                margin-top: -12px;
            }
        }   
`

export const DashboardSection = styled.div`
    display: flex;
    column-gap: 13px;
    margin-top: 29px;
    
    img {
        height: 44.4px;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 31.54px;
        line-height: 47px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 992px) {
        display: none;
    }
`

export const HomeButton = styled.div`
    border-radius: 3.2243px;
    margin-top: 40px;
    margin-right: 72px;

    > button {
        background: ${({ theme }) => theme.colors.mainYellow};
        border-radius: 3.2243px;
        padding: 5px 5px;
        border: none;

        a {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 13.5421px;
            line-height: 20px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.blackFont};
            margin-left: 9px;
            text-decoration: none;
        }
    }

    @media (max-width: 1200px) {
        margin-right: 36px;
    }

    @media (max-width: 992px) {
        display: none;
    }
`