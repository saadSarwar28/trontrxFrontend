import styled from "styled-components"


export const HierarchyTreeMobileStyled = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        transform: rotate(-90deg) translate(-22.5%, 22%);
    }

    @media (max-width: 576px) {
        transform: rotate(-90deg) translate(-22.5%, 32%);
    }

    @media (max-width: 300px) {
        transform: rotate(-90deg) translate(-22.5%, 37%);
    }
`