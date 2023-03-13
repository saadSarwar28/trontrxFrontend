import styled from 'styled-components'


export const WhyChooseStyled = styled.section`
    padding-top: 53px;
    padding-bottom: 53px;
    padding-left: 5%;
    padding-right: 5%;


    #whyChooseDesktop {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #whyChooseMobile {
        display: none;
    }

    @media (max-width: 1200px) {
        #whyChooseDesktop {
            display: none;
        }

        #whyChooseMobile { 
            display: block;
        }
    }

    @media (min-width: 1400px) {
         & {
             padding-left: 5%;
             padding-right: 5%;
         }
     }

     @media (min-width: 1600px) {
         & {
             padding-left: 8%;
             padding-right: 8%;
         }
     }

     @media (min-width: 2000px) {
         & {
             padding-left: 10%;
             padding-right: 10%;
         }
     }
`

// For Desktop
export const WhyChooseDesktop = styled.div`
    display: grid;
    justify-content: center;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 44.8px;
        line-height: 114.5%;
        /* or 51px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;

        margin-bottom: 20px;

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }
`

export const Sections = styled.div`
    width: 1100px;
`

export const TopSection = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    > div {
        width: 40%;
    }

    img {
        margin-top: 5px;
    }
`

export const CentralSection = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 118px) 236px calc(50% - 118px);

    > div:first-child {
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }

    > div:last-child {
        display: flex;
        flex-direction: column-reverse;
        row-gap: 40px;
        margin-bottom: -7px;
    }
`

export const BottomSection = styled.div`
    display: flex;
    justify-content: center;

    > div {
        width: 40%;
    }
`

export const MainImage = styled.div`
    position: relative;
    width: 236px;
    height: 221px;

    > img {
        position: absolute;
    }

    > img#main1 {
        width: 236px;
        height: 221px;
        top: 0;
        z-index: 1;
    }

    > img#main2 {
        width: 224.2px;
        height: 210.16px;
        top: 5px;
        left: 6px;
        z-index: 2;
    }

    > img#main3 {
        width: 115px;
        top: 51px;
        left: 60px;
        z-index: 3;
    }

    > img#main4 {
        top: 90px;
        left: 101px;
        z-index: 4;
    }
`

export const Section = styled.div`
    display: flex;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 114.5%;
        /* or 26px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-bottom: 5px;
    }

    p {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    img {
        width: 75px;
        height: 75px;
    }

    #longevityImages {
        position: relative;

        img:last-child {
            width: 53.75px;
            height: 50px;
            position: absolute;
            top: 15px;
            left: 10px;
        }
    }

    /* Decentralized */
    &#whySection0 {
        flex-direction: column;
        align-items: center;

        div {
            text-align: center;
        }
    }

    /* Transparency */
    &#whySection1 {
        align-items: center;

        div {
            text-align: center;
        }
    }

    /* Project Insurance */
    &#whySection2 {
        align-items: center;

        div {
            text-align: center;
        }
    }

    /* APS */
    &#whySection4 {
        flex-direction: row-reverse;
        align-items: center;

        div {
            text-align: center;

            h2 {
                font-size: 19px;
                margin-right: -35px;
            }
        }
    }

    /* Immutability */
    &#whySection5 {
        flex-direction: row-reverse;
        align-items: center;

        div {
            text-align: center;
        }
    }

    /* Longevity */
    &#whySection3 {
        flex-direction: column-reverse;
        align-items: center;

        div {
            text-align: center;
        }
    }
`

// For Mobile
export const WhyChooseMobile = styled.div`

    > h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 30.6px;
        line-height: 114.5%;
        /* or 35px */
        text-align: center;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-bottom: 35px;

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }
`

export const MobileSectionContainer = styled.div`
    display: grid;
    grid-gap: 30px;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }

    @media (max-width: 768px) {
        > div {
            grid-template-columns: 1fr;
            gap: 20px;
        }
    }
`

export const MobileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;

    text-align: center;

    img {
        width: 75px;
        height: 75px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22.4px;
        line-height: 114.5%;
        /* or 26px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    p {
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 13px;
        text-align: center;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    #longevityImages {
        position: relative;

        img:last-child {
            width: 53.75px;
            height: 50px;
            position: absolute;
            top: 15px;
            left: 10px;
        }
    }
`