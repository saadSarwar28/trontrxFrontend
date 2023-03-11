import styled from "styled-components"


export const NavbarStyled = styled.nav`
    position: fixed;
    top: 15px;
    z-index: 1000;

    display: grid;
    grid-template-columns: 47% 53%;
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

    @media (max-width: 1200px) {
        grid-template-columns: 40% 60%;
    }

    @media (max-width: 992px) {
        grid-template-columns: 70% 30%;
        background: ${({ theme }) => theme.colors.blackBg};
        top: 0;
        height: 80px;
        z-index: 5;
    }
`

export const LogoSection = styled.div`
    display: flex;
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

    @media (max-width: 1200px) {
        padding-left: 40px;
    }

    @media (max-width: 992px) {
        padding-left: 30px;
        align-items: center;

        > div:nth-child(1) {
            img {
                width: 61px;
                height: 62px;
            }
        }

        > div:nth-child(2) {
            h1 {
                font-size: 25px;
                line-height: 32px;

                margin-left: 9px;
            }

            p {
                font-size: 11px;
                line-height: 14px;

                margin-left: 5px;
            }
        }
    }

    @media (max-width: 576px) {
        padding-left: 15px;
    }
`

export const LinksSection = styled.div`
    // menu icon
    > div:first-child {
        display: none;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 41px;

        list-style-type: none;

        // mobile link icon
        img:first-child {
            display: none;
        }

        a {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 23px;
            color: ${({ theme }) => theme.colors.whiteFont};

            text-decoration: none;
            transition: 0.3s;

            &.active {
                color: ${({ theme }) => theme.colors.secYellow};
            }
        }
    }

    @media (max-width: 1200px) {
        ul {
            gap: 30px;
        }
    }

    @media (max-width: 992px) {
        /* ul {
            display: none;
        } */

        // menu icon
        > div:first-child {
            display: block;
            position: absolute;
            top: 15px;
            right: 30px;
            padding: 2px;
            cursor: pointer;
        }
    }

    @media (max-width: 576px) {
        // menu icon
        > div:first-child {
            right: 15px;
        }
    }
`

export const MobileNavbar = styled.div`
    @media (max-width: 992px) {
        position: absolute;        
        /* top: 80px; */
        top: 78px;
        right: 0;
        z-index: 4;

        width: 70vw;
        height: 100vh;
        background-image: url('/assets/images/navbar/mobile-bg.png');
        background-repeat: no-repeat;
        background-size: 110% 100%;

        ul {
            position: absolute;
            top: 50%;
            left: 39%;
            transform: translateX(-50%);
            transform: translateY(-50%);

            flex-direction: column;

            // mobile link icon
            img:first-child {
                display: block;
            }
        }
    }
`