import styled from "styled-components"


export const LoaderStyled = styled.div`
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
            color: ${({ theme }) => theme.colors.cardBgFilled};
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

    @media (max-width: 300px) {
        > div:nth-child(2) {
            h1 {
                font-size: 23px;
            }

            p {
                font-size: 9px;
            }
        }
    }
`