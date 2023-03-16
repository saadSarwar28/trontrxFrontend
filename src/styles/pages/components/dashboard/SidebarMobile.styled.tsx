import styled from "styled-components"


export const SidebarMobileStyled = styled.aside`
    position: absolute;        
    top: 124px;
    right: 0;
    z-index: 4;

    width: 0;
    height: 100vh;
    overflow: hidden;
    background-image: url('/assets/images/navbar/mobile-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    transition: 300ms;

    &.show {
        width: 310px;
    }

    ul {
        position: absolute;
        top: 61px;
        left: 13px;
        flex-direction: column;
        align-items: flex-start;
        list-style-type: none;

        > div:not(:last-child) {
            margin-bottom: 37px;
        }

        // dashboard
        div:first-child {
            li {
                margin-left: -12px;
            }

            a {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 17.6453px;
                line-height: 26px;
                text-transform: uppercase;
                color: #FBBD18;
            }
        }

        > div {
            display: flex;
            align-items: center;
            gap: 19px;

            // mobile link icon
            img:first-child {
                display: block;
                width: 25px;
                height: 25px;
            }

            a {
                font-family: 'PT Sans', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 13.5421px;
                line-height: 18px;
                letter-spacing: 0.09em;
                text-transform: uppercase;
                color: #FFFFFF;
                text-decoration: none;
            }
        }

        // Active Link
        > div.active {
            a {
                text-shadow: -1px 0 #C28616, 0 1px #C28616, 1px 0 #C28616, 0 -1px #C28616;
            }
        }
    }
`

export const HomeButtonMobile = styled.div`
    display: none;

    @media (max-width: 992px) {
        display: block;
        border-radius: 3.2243px;
        margin-top: 40px;
        margin-right: 72px;
        position: absolute;
        bottom: 30px;
        left: 13px;

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
    }
`