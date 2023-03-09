import styled from "styled-components"


export const NavbarStyled = styled.nav`
    position: fixed;
    top: 15px;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    transition: 0.3s;

    &.black {
        background: rgba(1, 5, 31, 0.5);
        top: 0;
        padding-top: 5px;

        /* h1#navbarTitle, p#navbarDesc, a {
            color: ${({ theme }) => theme.colors.whiteFont};
        } */
    }
`

export const LogoSection = styled.div`
    display: flex;

    width: 47%;
    padding-left: 90px;

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

            margin-left: 9px;
        }

        p {
            font-family: 'PT Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 19px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.whiteFont};

            margin-left: 5px;
        }
    }
`

export const LinksSection = styled.div`
    width: 53%;

    ul {
        display: flex;
        align-items: center;
        gap: 41px;

        list-style-type: none;

        a {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.whiteFont};

            text-decoration: none;
            transition: 0.3s;

            &.active {
                color: ${({ theme }) => theme.colors.secYellow};
            }

            /* &.white {
                color: ${({ theme }) => theme.colors.blackFont};
            } */
        }
    }
`