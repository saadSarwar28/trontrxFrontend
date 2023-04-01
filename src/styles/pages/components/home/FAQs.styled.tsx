import styled from "styled-components"


export const FAQsStyled = styled.section`
    /* padding-top: 111px; */
    padding-top: 105px;
    padding-bottom: 138px;
    padding-left: calc(50% - 500px);
    padding-right: calc(50% - 500px);
    background-color:#F1F1F1;    

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 56px;
        line-height: 114.5%;
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        text-align: center;

        margin-bottom: 35px;
    }

    @media (min-width: 769px) {
        > h1 {
            transform: translateY(-40px);
            &.animate {
                // animation
                animation-name: faqsHeading;
                animation-duration: 2s;
                animation-delay: 0.5s;
                animation-fill-mode: forwards;
                @keyframes faqsHeading {
                    0% {transform: translateY(-40px);}
                    100% {transform: translateY(0);}
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding-top: 81px;
        padding-bottom: 108px;
        padding-left: calc(50% - 400px);
        padding-right: calc(50% - 400px);

        h1 {
            font-size: 50px;
        }
    }

    @media (max-width: 992px) {
       
        > h1 {
            font-size: 45px;
        }
    }

    @media (max-width: 768px) {
       padding-top: 40px;
       padding-bottom: 40px;
       /* margin-bottom: 20px; */

       > h1 {
            transform: translateY(-25px);
            &.animate {
                // animation
                animation-name: faqsHeading;
                animation-duration: 2s;
                animation-delay: 0.5s;
                animation-fill-mode: forwards;
                @keyframes faqsHeading {
                    0% {transform: translateY(-25px);}
                    100% {transform: translateY(0);}
                }
            }
        }
    }

    @media (max-width: 576px) {
       padding-top: 22px;

       > h1 {
           padding: 0 10px;
           font-size: 33.6px;
       }
    }

    @media (max-width: 300px) {
        > h1 {
            margin-bottom: 25px;
        }
    }
`

export const TabsContainer = styled.div`
    max-width: 1000px;

    @media (max-width: 1200px) {
        max-width: 800px;
    }

    @media (max-width: 992px) {
        max-width: 100%;
    }
`

export const TabHeaders = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #9C9C9C;
    margin: 0 30px 43px;

    transform: translateX(-100vw);
    &.animate {
        // animation
        animation-name: tabHeaders;
        animation-duration: 1.5s;
        animation-delay: 0.25s;
        animation-fill-mode: forwards;
        @keyframes tabHeaders {
            0% {transform: translateX(100vw);}
            100% {transform: translateX(0);}
        }
    }

    @media (max-width: 992px) {
        flex-direction: column;
        margin: 0 0 50px;
        border-bottom: none;
    }
`

export const TabHeader = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 114.5%;
    /* or 18px */
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkColor};
    border-bottom: 6px solid transparent;
    padding: 0 40px 20px;
    margin-bottom: -4px;
    cursor: pointer;
    transition: 300ms;

    &.active {
        color: ${({ theme }) => theme.colors.mainYellow};
        border-bottom: 6px solid ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 992px) {
        padding: 28px 0;
        text-align: center;
        border-bottom: 0.5px solid #9C9C9C;
    }
`

export const TabBodies = styled.div`
    @media (max-width: 992px) {
        padding-left: 25px;
        padding-right: 25px;
    }

    @media (max-width: 300px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const TabBody = styled.div`
    display: none;

    &.active {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Accordion = styled.div`
    transform: translateY(20vh);
    &.animate {
        // animation
        animation-name: accordion;
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        @keyframes accordion {
            0% {transform: translateY(20vh);}
            100% {transform: translateY(0);}
        }
    }
`

export const AccordionTop = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    background-color: ${({ theme }) => theme.colors.whiteBg};
    padding: 15px 18px 18px;
    cursor: pointer;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 114.5%;
        /* identical to box height, or 21px */
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
        margin-left: 13px;
        margin-bottom: -16px;
    }

    // Chevron up
    img:nth-child(3) {
        position: absolute;
        right: 27px;
        display: none;
    }

    // Chevron down
    img:last-child {
        position: absolute;
        right: 27px;
    }

    &.active {
        // Chevron down
        img:last-child {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 15px 4px 18px;

        // Plus Icon
        img:first-child {
            width: 26px;
            height: 26px;
        }

        img:last-child, img:nth-child(3) {
            top: 18px;
            right: 4px;
            width: 19px;
            height: 11.72px;
        }

        h2 {
            font-size: 15px;
            margin-bottom: 0px;
            margin-right: 35px;
        }

        &.active {
            // Chevron up
            img:nth-child(3) {
                display: block;
            }
        }
    }
`

export const AccordionBottom = styled.div`
    padding: 0 43px;
    background-color: rgba(257,257,256,0.5);
    display: grid;
    align-items: center;
    overflow: hidden;
    transition: 300ms;

    &.active {
        padding: 28px 43px;
        p {
            display: block;
        }
    }

    p {
        display: none;
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 114.5%;
        /* or 18px */
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    @media (max-width: 768px) {
        p {
            font-size: 13px;
        }

        &.active {
            padding: 0;
            p {
                padding: 15px 9px;
            }

            div {
                dispaly: block;
                height: 31px;
                background-color: ${({ theme }) => theme.colors.whiteBg};
            }
        }
    }
`