import styled from 'styled-components'


export const WhyChooseStyled = styled.section`
    padding-top: 53px;
    /* padding-top: 40px; */
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
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;
        position: relative;
        margin-bottom: 20px;
        /* margin-bottom: 35px; */

        transform: scale(0);
        &.animate {
            // animation
            animation-name: mainHeading;
            animation-duration: 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            @keyframes mainHeading {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }

        > span {
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

    opacity: 0; 
    transform: scale(0);
    &.animate {
        // animation
        animation-name: mainImg;
        animation-duration: 1s;
        animation-delay: 0.1s;
        animation-fill-mode: forwards;
        @keyframes mainImg {
            0% {opacity: 0; transform: scale(0);}
            100% {opacity: 1; transform: scale(1);}
        }
    }

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
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        /* margin-bottom: 5px; */
        margin-bottom: 15px;
        position: relative;

        // moving lines
        > div {
            bottom: -9px;
        }
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

        opacity: 0;
        &.animate {
            // animation
            animation-name: section0;
            animation-duration: 1.5s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            @keyframes section0 {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }

        div {
            text-align: center;
        }
    }

    /* Transparency */
    &#whySection1 {
        align-items: center;

        transform: translateX(-100vw);
        &.animate {
            // animation
            animation-name: section1;
            animation-duration: 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            @keyframes section1 {
                0% {transform: translateX(-100vw);}
                100% {transform: translateX(0);}
            }
        }

        div {
            text-align: center;
        }
    }

    /* Project Insurance */
    &#whySection2 {
        align-items: center;

        transform: translateX(-100vw);
        &.animate {
            // animation
            animation-name: section2;
            animation-duration: 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            @keyframes section2 {
                0% {transform: translateX(-100vw);}
                100% {transform: translateX(0);}
            }
        }

        div {
            text-align: center;
        }
    }

    /* APS */
    &#whySection4 {
        flex-direction: row-reverse;
        align-items: center;

        transform: translateX(100vw);
        &.animate {
            // animation
            animation-name: section4;
            animation-duration: 1s;
            animation-delay: 0.75s;
            animation-fill-mode: forwards;
            @keyframes section4 {
                0% {transform: translateX(100vw);}
                100% {transform: translateX(0);}
            }
        }

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

        transform: translateX(100vw);
        &.animate {
            // animation
            animation-name: section5;
            animation-duration: 1s;
            animation-delay: 0.75s;
            animation-fill-mode: forwards;
            @keyframes section5 {
                0% {transform: translateX(100vw);}
                100% {transform: translateX(0);}
            }
        }

        div {
            text-align: center;
        }
    }

    /* Longevity */
    &#whySection3 {
        flex-direction: column-reverse;
        align-items: center;

        opacity: 0;
        &.animate {
            // animation
            animation-name: section3;
            animation-duration: 1s;
            animation-delay: 0.75s;
            animation-fill-mode: forwards;
            @keyframes section3 {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }

        div {
            text-align: center;
        }
    }
`

// For Mobile
export const WhyChooseMobile = styled.div`

    > h1 {
        font-family: 'Poppins', sans-serif;
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

        transform: scale(0);
        &.animate {
            // animation
            animation-name: mainHeading;
            animation-duration: 1s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            @keyframes mainHeading {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }

        span {
            color: ${({ theme }) => theme.colors.mainYellow};
        }
    }

    @media (max-width: 300px) {
        > h1 {
            font-size: 22px;
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

    @media (max-width: 1200px) and (min-width: 769px) {
        &#whySectionMobile0, &#whySectionMobile2, &#whySectionMobile4 {
            transform: translateX(-100vw);
            &.animate {
                // animation
                animation-name: sectionMobile0;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes sectionMobile0 {
                    0% {transform: translateX(-100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }
    }

    @media (max-width: 1200px) and (min-width: 769px) {
        &#whySectionMobile1, &#whySectionMobile3, &#whySectionMobile5 {
            transform: translateX(100vw);
            &.animate {
                // animation
                animation-name: sectionMobile1;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes sectionMobile1 {
                    0% {transform: translateX(100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }
    }

    @media (max-width: 768px) {
        > img, &#whySectionMobile3 > div {
            transform: translateX(-100vw);
        }
        > h2, > p {
            transform: translateX(100vw);
        }
        &.animate {
            > img, &#whySectionMobile3 > div {
                // animation
                animation-name: sectionMobileImg;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes sectionMobileImg {
                    0% {transform: translateX(-100vw);}
                    100% {transform: translateX(0);}
                }
            }

            > h2, > p {
                 // animation
                animation-name: sectionMobileContent;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes sectionMobileContent {
                    0% {transform: translateX(100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }
    }

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
        position: relative;
        margin-bottom: 8px;

        // moving lines
        > div {
            bottom: -7px;
        }
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