import styled from 'styled-components'


export const HierarchyTreeDesktopStyled = styled.div`
    // animation
    /* transform: scale(0);
    &.animate {
        animation: tree 2s ease 0.25s 1 normal forwards;
        @keyframes tree {
            0% {transform: scale(0);}
            100% {transform: scale(1);}
        }
    } */

    @media (max-width: 768px) {
        display: none;
    }
`
