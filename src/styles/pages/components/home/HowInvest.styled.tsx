import styled from 'styled-components'


export const HowInvestStyled = styled.section`
    padding: 90px 0 110px 0;

    > div {
        display: grid;
        grid-template-columns: 47% 53%;
    }

    @media (min-width: 1400px) {
            padding-left: 5%;
            padding-right: 5%;
    }

    @media (min-width: 1600px) {
            padding-left: 8%;
            padding-right: 8%;
    }

    @media (min-width: 2000px) {
            padding-left: 10%;
            padding-right: 10%;
    }

    @media (max-width: 1200px) {
        padding: initial;

       > div {
            grid-template-columns: 100%;
       }   
    }
`

export const HowInvestHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 114.5%;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.blackFont};
    text-align: center;
    /* margin-bottom: 20px; */
    margin-bottom: 8px;

    transform: scale(0);
    &.animate {
        // animation
        animation: investHeading 1s ease 0.5s 1 normal forwards;
        @keyframes investHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    span {
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 1200px) {
        display: none;
    }
`

export const LeftColumn = styled.div`
    position: relative;

    > img:first-child {
        width: 50%;
        height: 643px;
    }

    > iframe {
        width: 70%;
        height: 463px;
        position: absolute;
        top: 90px;
        left: 25%;
    }

    @media (max-width: 1400px) {
        > img:first-child {
            height: 593px;
        }

        > iframe {
            height: 413px;
        }
    }

    @media (max-width: 1200px) {
        margin-top: 20px;

        > iframe {
            width: 50%;
        }
    }

    @media (max-width: 992px) {
        > iframe {
            width: 60%;
        }
    }

    @media (max-width: 768px) {
        > img:first-child {
            height: 450px;
        }

        > iframe {
            height: 313px;
            top: 69px;
        }
    }

    @media (max-width: 576px) {
        > img:first-child {
            width: 30%;
            height: 420px;
        }

        > iframe {
            width: 70%;
            height: 283px;
            left: 17%;
        }
    }

    @media (max-width: 300px) {
        > img:first-child {
            width: 30%;
            height: 290px;
        }

        > iframe {
            width: 70%;
            height: 200px;
            left: 17%;
            top: 46px;
        }
    }
`

export const RightColumn = styled.div`
    
    > div {
        margin-top: 47px;
    }

    @media (max-width: 1200px) {
        padding-top: 50px;
        padding-bottom: 40px;

        > div {
            margin-top: 130px;
        }

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

    @media (max-width: 300px) {
        padding-bottom: 70px;

        > h1 {
            font-size: 28px;
        }
    }
`

export const HeadingMobile = styled.h1`
    display: none;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 114.5%;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.blackFont};
    text-align: center;
    margin-bottom: 5px;

    transform: scale(0);
    &.animate {
        // animation
        animation: investHeading 1s ease 0.5s 1 normal forwards;
        @keyframes investHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    span {
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 1200px) {
        display: block;
        font-size: 50px;
        margin-bottom: 110px
    }

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 576px) {
        font-size: 33px;
    }
`

export const Section = styled.div`
    margin-bottom: 25px;

    // animation
    opacity: 0;
    &.animate {
        animation-name: section0;
        animation-duration: 1s;
        animation-delay: 0.25s;
        animation-fill-mode: forwards;
        @keyframes section0 {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
    }

    // heading
    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 26px;
        line-height: 114.5%;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-left: 84px;
        position: relative;

         // moving lines
         /* > div {
            left: 15%;
            bottom: -7px;
        } */
    }

    // moving lines position according to different headings
    &#investSection0 {
        h2 {
            // moving lines
            > div {
                left: 23%;
            }
        }
    }

    &#investSection1 {
        h2 {
            // moving lines
            > div {
                left: 16%;
            }
        }
    }

    &#investSection2 {
        h2 {
            // moving lines
            > div {
                left: 13%;
            }
        }
    }

    &#investSection3 {
        h2 {
            // moving lines
            > div {
                left: 14%;
            }
        }
    }

    // content
    > div {
        display: flex;
        align-items: center;
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

        // icon
        > div {
            img {
                transform: translateX(-100vw);
            }
        }

        // heading
        h2 {
            transform: translateX(100vw);
        }

        // description
        > div {
            p {
                transform: translateX(100vw);
            }
        }

        // moving lines position according to different headings
        &#investSection0, &#investSection1, &#investSection2, &#investSection3 {
            h2 {
                // moving lines
                > div {
                    left: 50%;
                }
            }
        }
        
        &.animate {
            > div {
                img {
                    animation-name: sectionImage;
                    animation-duration: 1s;
                    animation-delay: 0.25s;
                    animation-fill-mode: forwards;
                    @keyframes sectionImage {
                        0% {transform: translateX(-100vw);}
                        100% {transform: translateX(-38px);}
                    }
                }
            }

            h2 {
                animation-name: sectionHeading;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes sectionHeading {
                    0% {transform: translateX(100vw);}
                    100% {transform: translateX(0);}
                }
            }

            // description
            > div {
                p {
                    animation-name: sectionDescription;
                    animation-duration: 1s;
                    animation-delay: 0.25s;
                    animation-fill-mode: forwards;
                    @keyframes sectionDescription {
                        0% {transform: translateX(100vw);}
                        100% {transform: translateX(0);}
                    }
                }
            }
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
            margin-bottom: 15px;
            font-size: 24px;            
            text-align: center;

            // moving lines
            > div {
                left: 50%;
                bottom: -12px;
            }
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

    @media (max-width: 300px) {
        &#investSection0 {
            height: 255px;
        }

        &#investSection1 {
            height: 258px;
        }

        h2 {
            font-size: 22px;
        }
    }
`