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
    align-items: center;
    justify-content: center;
    cursor: pointer;
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

const ErrorMessage = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
`

interface CustomNodeProps {
    address: string,
}

const CustomNodeDesktop: React.FC<CustomNodeProps> = ({ address }) => {

    const accountState = useSelector(selectUserAccount)
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false);
    const [treeNodes, setTreeNodes] = useState<any>([]);

    useEffect(() => {
        if (address === accountState.account.address) {
            setAmount(accountState.account.activeDeposit)
        } else {
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
                loading ? <ErrorMessage>Loading Downlines...</ErrorMessage> :
                    <>
                        {
                            treeNodes.length > 0 ?
                                <>
                                    {
                                        // @ts-ignore
                                        treeNodes.map((item, index) => (
                                            <TreeNode key={index} label={
                                                <CustomNodeDesktop
                                                    address={item}
                                                />}>
                                            </TreeNode>
                                        ))
                                    }
                                </> : <ErrorMessage>No More Downlines</ErrorMessage>
                        }
                    </>
            }
        </>
    )
}

export default CustomNodeDesktop