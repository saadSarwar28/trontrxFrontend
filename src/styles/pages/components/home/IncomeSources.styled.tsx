import styled from "styled-components"


export const IncomeSourcesStyled = styled.section`
    padding-top: 144px;
    padding-bottom: 166px;
    padding-left: 10%;
    padding-right: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 54px;
        line-height: 114.5%;
        /* identical to box height, or 62px */
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-bottom: 36px;
        text-align: center;

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }

    @media (max-width: 1200px) {
        padding-left: 5%;
        padding-right: 5%;

        padding-top: 100px;
        padding-bottom: 100px;

        h1 {
            font-size: 40px;
        }
    }


    @media (max-width: 768px) {
        h1 {
            font-size: 32.6px;
        }

        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media (max-width: 600px) {
        padding-left: 28px;
        padding-right: 28px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    gap: 62px;

    @media (max-width: 1400px) {
        gap: 50px;
    }

    @media (max-width: 1200px) {
        gap: 30px;
    }

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Card = styled.div`
    width: 336px;
    min-height: 298px;
    text-align: center;

    background: ${({ theme }) => theme.colors.whiteBg};;
    box-shadow: -10.7234px 12.1532px 22.8766px rgba(0, 0, 0, 0.25), inset 0.714894px 2.14468px 11.4383px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3.57447px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 4.28936px;

    &.animate {
        animation: card 3s ease 0.5s 1 normal backwards;
        @keyframes card {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    /* :hover {
        transform: scale(1.1);
        transition: 300ms;
    } */

    @media (max-width: 1200px) {
        width: 280px;
    }

    @media (max-width: 992px) {
        width: 380px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const CardTop = styled.div`
    height: 136px;
    padding-top: 27px;
    border-bottom: 1px solid #E1D4D8;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 114.5%;
        /* or 23px */
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-top: 9px;
    }

    @media (max-width: 992px) {
        border-bottom: none;
    }
`

export const CardBottom = styled.div`
    min-height: 162px;
    padding: 18px 30px 30px;

    p {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 114.5%;
        /* or 18px */
        text-align: center;
        letter-spacing: 0.05em;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    @media (max-width: 992px) {
        padding: 10px 37px 40px;
    }
`