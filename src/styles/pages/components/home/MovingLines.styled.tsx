import styled from "styled-components"


export const MovingLinesStyled = styled.div`
    position: absolute;
    /* bottom: -15px; */
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 150px;
    height: 5px;
    border-radius: 5px;
    overflow: hidden;

    > div:first-child {
        width: 130px;
        height: 5px;
        background: ${({ theme }) => theme.colors.mainYellow};
        border-radius: 5px;

        // animation
        position: absolute;
        animation: left 1.75s ease 4s infinite;
        @keyframes left {
            0% {left: -120px}
            25% {left: -65px}
            50% {left: -15px}
            75% {left: -65px}
            100%  {left: -120px}
        }
    }

    > div:last-child {
        width: 130px;
        height: 5px;
        background: ${({ theme }) => theme.colors.mainYellow};
        border-radius: 5px;

        // animation
        position: absolute;
        animation: right 1.75s ease 4s infinite;
        @keyframes right {
            0% {right: -20px}
            25% {right: -70px}
            50% {right: -120px}
            75% {right: -70px}
            100%  {right: -20px}
        }
    }

    @media (max-width: 1200px) {
        height: 3px;
    }
`