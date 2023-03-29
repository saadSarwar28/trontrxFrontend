import styled from "styled-components"

export const HR = styled.div`
    position: relative;
    z-index: 1;
    height: 3px;

    // animation
    &.animate {
        // diamond
        > img {
            animation-name: diamond;
            animation-duration: 1s;
            @keyframes diamond {
                0% {transform: scale(0);}
                100% {transform: scale(1);}
            }
        }

        // lines
        > div {
            animation-name: line;
            animation-duration: 1s;
            @keyframes line {
                0% {width: 0;}
                100% {width: calc(50% - 30px);}
            }
        }

        @media (max-width: 1200px) {
             // lines
            > div {
                animation-name: line;
                animation-duration: 1s;
                @keyframes line {
                    0% {width: 0;}
                    100% {width: calc(50% - 10px);}
                }
            }
        }

        @media (max-width: 768px) {
             // lines
            > div {
                animation-name: line;
                animation-duration: 1s;
                @keyframes line {
                    0% {width: 0;}
                    100% {width: calc(50% - 5px);}
                }
            }
        }
    }
    // animation ends

    // lines
    > div {
        height: 3px;
        background: ${({ theme }) => theme.colors.mainYellow};
        position: absolute;
        top: 0;
    }

    // diamond
    > img {
        width: 32px;
        height: 40px;
        position: absolute;
        top: -15px;
        left: 49%;
    }

    @media (max-width: 1200px) {
        > img {
            width: 22px;
            height: 25px;
            top: -10px;
        }
    }

    @media (max-width: 768px) {
        > img {
            width: 16px;
            height: 14px;
            top: -5px;
        }
    }
`

export const LeftLine = styled.div`
    width: calc(50% - 30px);
    right: calc(50% + 30px);

    @media (max-width: 1200px) {
        width: calc(50% - 22px);
        right: calc(50% + 22px);
    }

    @media (max-width: 768px) {
        width: calc(50% - 10px);
        right: calc(50% + 10px);
    }
`

export const RightLine = styled.div`
    width: calc(50% - 30px);
    left: calc(50% + 30px);

    @media (max-width: 1200px) {
        width: calc(50% - 22px);
        left: calc(50% + 22px);
    }

    @media (max-width: 768px) {
        width: calc(50% - 15px);
        left: calc(50% + 15px);
    }
`