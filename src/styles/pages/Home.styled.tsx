import styled from "styled-components"

export const HomeStyled = styled.main`
    
    
`

export const UpArrow = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) => theme.colors.mainYellow};
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`