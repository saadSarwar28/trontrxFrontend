import React from 'react'
import styled from "styled-components"

export const NodeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transform: translate(4px, -2px);
`

export const NodeImage = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    transform: rotate(90deg);

    > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    > img:first-child {
        width: 40px;
        height: 40px;
    }

    > img:last-child {
        width: 16px;
        height: 16px;
    }
`

export const NodeBody = styled.div`
    width: 22px;
    height: 75px;
    background: #000000;
    box-shadow: 0px 2.77496px 0.426917px #FBBD18;
    border-radius: 14.9421px;
    padding: 16px 10px 6px;
    margin-top: -12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > p, > div {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 10px;
        line-height: 10px;
        text-transform: uppercase;
        color: #FBBD18;
        writing-mode: vertical-rl;
    }
`

interface CustomNodeProps {
    profileBg: string,
    profileImg: string,
    address: string,
    amount: number
}

const CustomNodeMobile: React.FC<CustomNodeProps> = ({ profileBg, profileImg, address, amount }) => {

    return (
        <NodeStyled>
            <NodeImage>
                <img src={profileBg} alt="..." />
                <img src={profileImg} alt="..." />
            </NodeImage>
            <NodeBody>
                <p>{address}</p>
                <div>{amount}</div>
            </NodeBody>
        </NodeStyled>
    )
}

export default CustomNodeMobile