import styled from "styled-components"

export const HR = styled.div`
    position: relative;

    img:first-child {
        width: 100%;
    }

    img:last-child {
        height: 34.68px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 1200px) {
        img:last-child {
            height: 25px;
        }
    }

    @media (max-width: 768px) {
        img:last-child {
            height: 14px;
            top: 7px;
        }
    }
`