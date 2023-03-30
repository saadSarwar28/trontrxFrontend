import styled from 'styled-components'

export const ContractStatsStyled = styled.section`
    display: flex;
    align-items: center;

    height: 297px;
    background: #F2F2F2;

    @media (max-width: 1200px) {
        flex-direction: column;
        justify-content: space-evenly;
    }

    @media (max-width: 992px) {
        height: 330px;
    }
`

export const StatsLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 30%;

    // animations start
    // right arrow
    > img {
        opacity: 0;
    }

    // main heading
    > div {
        transform: scale(0);
    }
    &.animate {
        // main heading
        > div {
            animation-name: mainHeading;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes mainHeading {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }

        // right arrow
        > img {
            animation-name: rightArrow;
            animation-duration: 2s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes rightArrow {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }   
    }
    // animations end

    > div {
        text-align: center;
        margin-top: -10px;
        margin-left: -15px;

        img {
            width: 67px;
            height: 27.64px;
        }

        h2 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 114.5%;
            /* or 27px */
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.blackFont};
        }
    }

    > img {
        position: absolute;
        top: -20px;
        right: 20px;
        z-index: 10;

        width: 14px;
        height: 102px;
        display: inline-block;
    }

    @media (max-width: 1200px) {
        > img {
            display: none;
        }
    }

    @media (max-width: 992px) {
        margin: 20px 0;
        width: 100%;
    }

    @media (min-width: 768px) and (max-width: 992px) {
        // animation
        // main heading
        > div {
            animation-name: mainHeading;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes mainHeading {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }

        // right arrow
        > img {
            animation-name: rightArrow;
            animation-duration: 2s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes rightArrow {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }   
    }
`

export const StatsRight = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    padding: 0 30px 0 45px;

    // left section and right section
    > div:first-child, > div:last-child {
        transform: translateX(100vw);
        &.animate {
            // animation
            animation-name: StatsSection;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes StatsSection {
                0% {transform: translateX(100vw);}
                100% {transform: translateX(0);}
            }
        }
    }

    > div {
        display: flex;
        justify-content: space-around;
        width: 50%;    
    }

    @media (max-width: 1300px) {
        padding: 0;
        width: 80%;
    }

    @media (max-width: 992px) {
        > div {
            flex-direction: column;
        }

        // left section
        > div:first-child {
            transform: translateX(-100vw);
            &.animate {
                // animation
                animation-name: statsLeftSection;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes statsLeftSection {
                    0% {transform: translateX(-100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }

        // right section
        > div:last-child {
            transform: translateX(100vw);
            &.animate {
                // animation
                animation-name: statsRightSection;
                animation-duration: 1s;
                animation-delay: 0.25s;
                animation-fill-mode: forwards;
                @keyframes statsRightSection {
                    0% {transform: translateX(100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 10px;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    text-align: center;
    padding-right: 30px;

    img {
        position: absolute;
        right: 0;
        margin-left: 20px;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 114.5%;
        /* or 34px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-bottom: 6px;
    }

    p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 114.5%;
        /* or 17px */
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #B0B0B0;
    }

    @media (max-width: 1200px) {
        margin-bottom: 30px;
    }

    @media (max-width: 992px) {
        #line2 {
            display: none;
        }

        h2 {
            font-size: 24.1444px;
        }

        p {
            font-size: 12.0722px;
        }
    }

    @media (max-width: 992px) {
        padding-right: 10px
    }
`