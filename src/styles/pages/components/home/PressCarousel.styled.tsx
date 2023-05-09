import styled from "styled-components";


export const PressCarouselStyled = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 10%;
    padding-right: 10%;

    /* carousel container */
    > div:last-child {
        transform: translateX(-100vw);
        &.animate {
            // animation
            animation-name: pressLinks;
            animation-duration: 1s;
            animation-delay: 0.25s;
            animation-fill-mode: forwards;
            @keyframes pressLinks {
                0% {
                    transform: translateX(-100vw);
                }
                100% {
                    transform: translateX(0);
                }
            }
        }

    }

    a {
        display: inline-block;
        width: 75%;
        height: 70px;
        margin-bottom: 70px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .react-multi-carousel-dot--active {
        > button {
            background: ${({ theme }) => theme.colors.mainYellow};
        }
    }

    // dots
    .react-multi-carousel-dot-list {
        gap: 20px;
    }


    @media (max-width: 992px) {
        padding-top: 50px;
        padding-bottom: 80px;
    }

    @media (max-width: 576px) {
        padding-top: 50px;
        padding-bottom: 80px;
        padding-left: 5%;
        padding-right: 5%;

        a {
            width: 100%;
            text-align: center;
            margin-bottom: 75px;

            img {
                width: 90%;
            }
        }

        // dots
        .react-multi-carousel-dot-list {
            gap: 16px;
        }
    }
`

export const PressHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 114.5%;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.blackFont};
    margin-bottom: 50px;
    text-align: center;

    transform: scale(0);
    &.animate {
        // animation
        animation-name: pressHeading;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        @keyframes pressHeading {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    }

    span {
        color: ${({ theme }) => theme.colors.mainYellow};
    }

    @media (max-width: 992px) {
        font-size: 38px;
    }   
    
    @media (max-width: 300px) {
        font-size: 30px;
    }   
`