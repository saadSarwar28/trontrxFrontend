import styled from "styled-components"

export const HomeStyled = styled.main`
    
    
`

export const UpArrow = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    /* background: ${({ theme }) => theme.colors.mainYellow}; */
    background: rgba(251, 189, 24, 0.75);
    opacity: 0.5;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }

    @media (max-width: 576px) {
        right: 15px;
        padding: 5px;

        img {
            width: 20px;
            height: 20px;
        }
    }
`