import styled from "styled-components"


export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 578px;
    background: #000000;
    border: 1px solid #FFFFFF;

    @media (orientation: portrait) {
        height: 501px;
    }
`

export const LogoSectionFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
    margin-left: -20px;

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
            color: ${({ theme }) => theme.colors.whiteFont};
            /* text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616; */
            text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
            -webkit-text-stroke: 1px #FBBD18;

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
            /* color: ${({ theme }) => theme.colors.whiteFont};
            text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616; */
            color: ${({ theme }) => theme.colors.cardBgFilled};

            margin-left: 5px;
        }
    }

    @media (orientation: portrait) {
        > div:nth-child(1) {
            img {
                width: 61px;
                height: 62.65px;
            }
        }
    }

    @media (max-width: 300px) {
        margin-bottom: 70px;

        > div:nth-child(2) {
            h1 {
                font-size: 23px;
                line-height: 27px;
            }

            p {
                font-size: 9px;
            }
        }
    }
`

export const Links = styled.ul`
    list-style-type: none;
    margin-bottom: 74px;
    display: flex;

    > div {
        display: flex;
    }

    li {
        padding-right: 25px;
        display: flex;
        align-items: center;
    }

    li div {
        height: 26px;
        border: 0.5px solid #848181;
        margin-right: 19px;
    }

    > div:first-child li:first-child div {
        height: 0;
        border: none;
    }
    
    a {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 23px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.whiteFont};
        text-decoration: none;
    }

    @media (orientation: portrait) {
        flex-direction: column;
        align-items: center;
        gap: 24px;

        > div:last-child li:first-child div {
            height: 0;
            border: none;
        }

        li {
            padding-right: 11px;
        }

        li:not(:first-child) div {
            margin-right: 11px;
        }
    }

    @media (max-width: 300px) {
        margin-left: -10px;

        li {
            padding-right: 9px;
        }

        li:not(:first-child) div {
            margin-right: 9px;
        }

        a {
            font-size: 12px;
        }
    }
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 36px;
    & img {
        cursor: pointer;
    }

    @media (orientation: portrait) {
        gap: 17px;
        margin-bottom: -100px;

        img {
            width: 24.06px;
            height: 24.06px;
        }
    }
`
