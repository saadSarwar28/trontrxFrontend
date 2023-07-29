import React from 'react'
import styled from "styled-components"
import { useEffect, useState } from "react";
import { CONSTANTS } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { selectUserAccount } from '@/store/accountSlice';
// @ts-ignore
import TronWeb from 'tronweb';
import { TreeNode } from 'react-organizational-chart';
import { ethers } from 'ethers';


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
    address: string,
}

const CustomNodeMobile: React.FC<CustomNodeProps> = ({ address }) => {

    const accountState = useSelector(selectUserAccount)
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false);
    const [treeNodes, setTreeNodes] = useState<any>([]);

    useEffect(() => {
        if (address !== '') {
            getBalance()
        }
    }, [address])

    const getBalance = async () => {
        const tronWeb = new TronWeb({
            fullHost: 'https://api.trongrid.io',
            headers: { "TRON-PRO-API-KEY": CONSTANTS.api_key },
            // privateKey: 'your private key'
        })
        const contract = await tronWeb.contract().at(CONSTANTS.contractAddress);
        let result = await contract.users(address).call();
        if (Number(result?.depositsLength.toString()) > 0) {
            let deposit = await contract.userDeposits(address, Number(result?.depositsLength.toString()) - 1).call()
            setAmount(Number(Number(ethers.formatUnits(deposit?.amount.toString(), 6)).toFixed(2)));
        }
    }

    const getDownlines = async () => {
        if (
            accountState.account.address !== null ||
            accountState.account.address !== undefined ||
            accountState.account.address !== '' ||
            treeNodes.length === 0
        ) {
            setLoading(true);
            const tronWeb = new TronWeb({
                fullHost: 'https://api.trongrid.io',
                headers: { "TRON-PRO-API-KEY": CONSTANTS.api_key },
                // privateKey: 'your private key'
            })

            const trontrxContract = await tronWeb.contract().at(CONSTANTS.contractAddress);
            let downlines = []
            let index = 0
            while (true) {
                try {
                    const downline = await trontrxContract.userDownlines(accountState.account.address, 0, index).call({ from: accountState.account.address });
                    // console.log(downline, ' <<<<');
                    downlines.push(downline);
                    index++;
                } catch {
                    break;
                }
            }
            setTreeNodes(downlines)
            setLoading(false)
        }
    }

    return (
        <>
            {
                loading ?
                    <div>Loading Downlines...</div> :
                    <>
                        <NodeStyled onClick={getDownlines}>
                            <NodeImage>
                                <img src={CONSTANTS.treeImages.profileBg} alt="..." />
                                <img src={CONSTANTS.treeImages.profile} alt="..." />
                            </NodeImage>
                            <NodeBody>
                                <p>{address.slice(0, 3)}</p>
                                <div>{amount.toFixed(2)}</div>
                            </NodeBody>
                        </NodeStyled>
                        {
                            // @ts-ignore
                            treeNodes.map((item, index) => (
                                <TreeNode key={index} label={
                                    <CustomNodeMobile
                                        address={item}
                                    />}>
                                </TreeNode>
                            ))
                        }
                    </>
            }
        </>
    )
}

export default CustomNodeMobile