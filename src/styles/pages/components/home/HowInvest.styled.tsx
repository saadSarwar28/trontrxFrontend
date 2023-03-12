import styled from 'styled-components'


export const HowInvestStyled = styled.section`
    padding: 90px 0 110px 0;

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
        display: grid;
        grid-template-columns: 45% 55%;
    }

    @media (max-width: 1200px) {
        padding: initial;

        > h1 {
            display: none;
        }

       > div {
            grid-template-columns: 100%;
       }   
    }
`

export const LeftColumn = styled.div`
    position: relative;

    > img:first-child {
        width: 50%;
        height: 643px;
    }

    > img:last-child {
        width: 70%;
        height: 463px;
        position: absolute;
        top: 90px;
        left: 24%;
    }

    @media (max-width: 1400px) {
        > img:first-child {
            height: 593px;
        }

        > img:last-child {
            height: 413px;
        }
    }

    @media (max-width: 1200px) {
        margin-top: 20px;

        > img:last-child {
            width: 50%;
        }
    }

    @media (max-width: 992px) {
        > img:last-child {
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        > img:first-child {
            height: 450px;
        }

        > img:last-child {
            height: 313px;
            top: 69px;
        }
    }

    @media (max-width: 576px) {
        > img:first-child {
            width: 30%;
            height: 420px;
        }

        > img:last-child {
            width: 70%;
            height: 283px;
            left: 17%;
        }
    }
`

export const RightColumn = styled.div`
    > h1 {
        display: none;
    }

    > div {
        margin-top: 47px;
    }

    @media (max-width: 1200px) {
        padding-top: 50px;
        padding-bottom: 40px;

        > h1 {
            display: block;
            font-size: 50px;
            margin-bottom: 110px
        }
    }

    @media (max-width: 768px) {
        > h1 {
            font-size: 40px;
        }
    }

    @media (max-width: 576px) {
        > h1 {
            font-size: 33px;
        }
    }
`

export const Section = styled.div`
    margin-bottom: 25px;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
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
            width: 80px;
            height: 80px;
        }

        p {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 114.5%;
            /* or 23px */
            letter-spacing: 0.05em;
            color: ${({ theme }) => theme.colors.blackFont};
            padding-top: 5px;
        }
    }

    @media (max-width: 1400px) {
        margin-bottom: 12px;
    }

    @media (max-width: 1200px) {
        height: 200px;
        position: relative;

        &:last-child {
            height: 90px;
        }

        > div {
            justify-content: center;

            img {
                position: absolute;
                left: 50%;
                top: -92px;
                transform: translateX(-50%);
            }

            p {
                width: 80%;
                text-align: center;
            }
        }

        h2 {
            margin-left: 0px;
            font-size: 24px;            
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        height: 220px;

        &:nth-child(3) {
            margin-top: 55px;
        }

        &:nth-child(4) {
            height: 150px;
            margin-top: -50px;
        }
    }
`