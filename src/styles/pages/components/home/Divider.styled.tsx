import styled from "styled-components"

export const HR = styled.div`
    position: relative;
    z-index: 1;
    height: 15px;

    img:first-child {
        width: 100%;
        height: 5px;
        position: absolute;
        z-index: 2;
    }

    img:last-child {
        height: 40px;
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
    }

    @media (max-width: 1200px) {
        img:last-child {
            height: 25px;
            top: -10px;
        }
    }

    @media (max-width: 768px) {
        img:last-child {
            height: 14px;
            top: -5px;
        }
    }
`