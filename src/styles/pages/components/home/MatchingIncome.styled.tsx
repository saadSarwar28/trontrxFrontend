import styled from "styled-components"


export const MatchingIncomeStyled = styled.section`
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
        font-weight: 800;
        font-size: 40px;
        line-height: 114.5%;
        /* identical to box height, or 46px */
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-bottom: 26px;
        text-align: center;

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

    @media (max-width: 992px) {
        padding-top: 66px;
        padding-bottom: 66px;
        padding-left: 5%;
        padding-right: 5%;

        > h1 {
            font-size: 30px;
        }
    }
`

export const Paragraphs = styled.ul`
    padding-left: 40px;
    
    li {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 114.5%;
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};

        margin-bottom: 17px;

        &.animate {
            // animation
            animation-name: li;
            animation-duration: 2s;
            animation-delay: 1s;
            animation-fill-mode: backwards;
            @keyframes li {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }
        }
    }

    @media (max-width: 992px) {
        padding-left: 25px;

        li {
            font-size: 16px;
        }
    }
`

export const LevelsSection = styled.div`
    position: relative;
    margin-top: 70px;

    > div {
        img {
            &.animate {
                // animation
                animation-name: levelsImg;
                animation-duration: 1s;
                animation-delay: 1.5s;
                animation-fill-mode: backwards;
                @keyframes levelsImg {
                    0% {transform: translateX(-100vw);}
                    100% {transform: translateX(0);}
                }
            }
        }
    }

    @media (max-width: 992px) {
        left: -30px;

        img {
            width: 248.88px;
            height: 240.88px;
        }
    }
`

export const Level = styled.div`
    position: absolute;
    opacity: 0;

    &.animate {
        // animation
        animation-name: level;
        animation-duration: 1.5s;
        animation-delay: 2s;
        animation-fill-mode: forwards;
        @keyframes level {
            0% {opacity: 0;}
            100% {opacity: 1;}
        }
    }

    /* Percentage  */
    p:first-child {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 29.7671px;
        line-height: 114.5%;
        /* identical to box height, or 34px */
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.blackFont};
    }

    /* Level */
    p:last-child {
        font-family: 'PT Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18.3855px;
        line-height: 114.5%;
        letter-spacing: 0.025em;
        text-transform: capitalize;
        color: #7F7F7F;
    }

    &#level0 {
        top: -40px;
        left: 17px;
    }

    &#level1 {
        top: -60px;
        left: 188px;
    }

    &#level2 {
        top: 45px;
        right: -50px;
    }

    &#level3 {
        top: 171px;
        right: -60px;
    }

    &#level4 {
        top: 264px;
        right: -37px;
    }

    &#level5 {
        top: 347px;
        right: 33px;
    }


    @media (max-width: 992px) {
         /* Percentage  */
        p:first-child {
            font-size: 21.8474px;
        }

        /* Level */
        p:last-child {
            font-size: 13.494px;   
        }

        &#level0 {
            top: -36px;
            left: 17px;
        }

        &#level1 {
            top: -45px;
            left: 140px;
        }

        &#level2 {
            top: 30px;
            right: -40px;
        }

        &#level3 {
            top: 116px;
            right: -44px;
        }

        &#level4 {
            top: 180px;
            right: -29px;
        }

        &#level5 {
            top: 239px;
            right: 21px;
        }
    }
`