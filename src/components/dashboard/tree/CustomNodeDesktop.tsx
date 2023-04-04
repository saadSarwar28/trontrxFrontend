import React from 'react'
import styled from "styled-components"

export const NodeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NodeImage = styled.div`
    position: relative;
    width: 86.88px;
    height: 86.88px;

    > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const NodeBody = styled.div`
    width: 140px;
    height: 43.97px;
    background: #000000;
    box-shadow: 2.77496px 0px 0.426917px #FBBD18;
    border-radius: 14.9421px;
    margin-left: -20px;
    padding: 0 11px 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > p, > div {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 14.052px;
        line-height: 21px;
        text-transform: uppercase;
        color: #FBBD18;
    }
`

interface CustomNodeProps {
    profileBg: string,
    profileImg: string,
    address: string,
    amount: number
}

const CustomNodeDesktop: React.FC<CustomNodeProps> = ({ profileBg, profileImg, address, amount }) => {

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

export default CustomNodeDesktop