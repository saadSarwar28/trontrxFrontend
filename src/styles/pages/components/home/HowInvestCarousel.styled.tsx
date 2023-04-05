import styled from "styled-components"


export const HowInvestCarouselStyled = styled.div`
    height: 700px;

   @media (min-width: 769px) {
        overflow: hidden;
   }

   @media (max-width: 768px) {
        height: 350px;
   }
`

export const CarouselItem = styled.div`
    width: 100%;
    height: 700px;
    position: relative;
    overflow: hidden;

    // heading and description
    > div {
        position: absolute;
        bottom: 13%;
        left: 50%;
        transform: translateX(-50%);
        height: 100px; 

        > h2 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 26px;
            line-height: 114.5%;
            letter-spacing: 0.05em;
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.blackFont};
            text-align: center;
            position: relative;
        }

        p {
            font-family: 'PT Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 114.5%;
            letter-spacing: 0.05em;
            color: ${({ theme }) => theme.colors.blackFont};
            margin-top: 40px;
            text-align: center;
        }
    }

    > iframe {
        width: inherit;
        height: 460px;
        border: none;   
    }

    @media (max-width: 1200px) {
        // heading and description
       > div {
            width: 100%;
       }
    }

    @media (max-width: 768px) {
        height: 590px;

        // heading and description
        > div {
            bottom: 16%;

            > h2 {
                font-size: 24px;
            }

            > p {
                font-size: 16px;
                margin-top: 30px;
            }
        }

        > iframe {
            height: 350px;
        }
    }

    @media (max-width: 576px) {
        > div {
            > h2 {
                font-size: 21px;
            }
        }
    }

    @media (max-width: 300px) {
        height: 515px;

        > div {
            bottom: 22%;
        }

        > iframe {
            height: 250px;
        }
    }
`
