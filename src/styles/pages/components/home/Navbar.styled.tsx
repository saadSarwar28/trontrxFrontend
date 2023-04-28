import styled from "styled-components"


export const NavbarStyled = styled.nav`
    position: fixed;
    top: 15px;
    z-index: 10000;

    display: grid;
    grid-template-columns: 40% 60%;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    transition: 0.3s;

    @media (min-width: 993px) {
        &.black {
            background: rgba(1, 5, 31, 0.5);
            top: 0;
            padding-top: 5px;

            /* h1#navbarTitle, p#navbarDesc, a {
                color: ${({ theme }) => theme.colors.blackFont};
            } */
        }
    }

    @media (max-width: 1200px) {
        grid-template-columns: 40% 60%;
    }

    @media (max-width: 992px) {
        grid-template-columns: 70% 30%;
        background: ${({ theme }) => theme.colors.blackBg};
        top: 0;
        height: 80px;
        z-index: 100;
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
            /* text-shadow: -1px 0 #f0e262, 0 1px #f0e262, 1px 0 #f0e262, 0 -1px #f0e262;
            -webkit-text-stroke: 1px #f0e262; */
            text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
            -webkit-text-stroke: 1px #FBBD18;
            margin-left: 9px;
        }

        p {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 19px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            /* color: ${({ theme }) => theme.colors.whiteFont}; */
            color: ${({ theme }) => theme.colors.cardBgFilled};
            margin-left: 5px;
        }
    }

    /* @media (min-width: 769px) {
        > div:nth-child(2) {
            h1 {
                text-shadow: -1px 0 #f0e262, 0 1px #f0e262, 1px 0 #f0e262, 0 -1px #f0e262;
                -webkit-text-stroke: 1px #f0e262;
            }
        }
    } */

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

    /* @media (max-width: 768px) {

        > div:nth-child(2) {
            h1 {
                -webkit-text-stroke: 1px #f0e262;
            }
        }
    } */

    @media (max-width: 576px) {
        padding-left: 15px;
    }

    @media (max-width: 300px) {
        > div:nth-child(2) {
            h1 {
                font-size: 21px;
            }

            p {
                font-size: 8px;
            }
        }
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
            gap: 25px;
        }
    }

    @media (max-width: 992px) {
        // menu icon
        > div:first-child {
            display: block;
            position: absolute;
            top: 23px;
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
        top: 76px;
        right: -100vw;
        /* z-index: 4; */
        z-index: 100;

        width: 350px;
        height: 100vh;
        background-image: url('/assets/images/navbar/mobile-bg.png');
        background-repeat: no-repeat;
        background-size: 110% 100%;
        transition: 300ms;

        &.show {
            right: 0;
        }

        ul {
            position: absolute;
            top: 13%;
            left: 15%;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 35px;

            > div {
                display: flex;
                align-items: center;
                gap: 10px;

                // mobile link icon
                img:first-child {
                    display: block;
                    width: 14px;
                    height: 14px;
                }

                a {
                    font-family: 'PT Sans', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 13.5421px;
                    line-height: 18px;
                    /* identical to box height */
                    letter-spacing: 0.09em;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
            }
        }
    }

    @media (max-width: 576px) {
        top: 78px;
        width: 300px;
    }

    @media (max-width: 300px) {
        width: 250px;
        right: -110vw;
    }

    @media (orientation: landscape) {
        height: 400px;
    }
`
