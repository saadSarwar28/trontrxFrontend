import { Tree, TreeNode } from 'react-organizational-chart'
import CustomNodeDesktop from "./CustomNodeDesktop"
import { HierarchyTreeDesktopStyled } from '@/styles/pages/components/dashboard/tree/HierarchyTreeDesktop.styled'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAccountDetails,
    selectUserAccount,
} from '@/store/accountSlice';
import { CONSTANTS } from '@/utils/constants';
// @ts-ignore
import TronWeb from 'tronweb';
import { ethers } from 'ethers';


const HierarchyTreeDesktop = () => {

    const accountState = useSelector(selectUserAccount)
    const [loading, setLoading] = useState(true);
    const [treeNodes, setTreeNodes] = useState<any>([]);

    const getDownlines = async () => {
        if (
            accountState.account.address !== null ||
            accountState.account.address !== undefined ||
            accountState.account.address !== '' ||
            treeNodes.length === 0
        ) {

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

    useEffect(() => {
        getDownlines()
    }, [])


    return (
        <>
            {
                !loading ?
                    <HierarchyTreeDesktopStyled className={loading ? '' : 'animate'}>
                        <Tree
                            lineWidth={'5px'}
                            lineHeight={'50px'}
                            lineColor={'#FBBD18'}
                            lineBorderRadius={'10px'}
                            nodePadding={'20px'}
                            label={
                                <CustomNodeDesktop
                                    address={accountState.account.address}
                                />
                            }>
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
                        </Tree>
                    </HierarchyTreeDesktopStyled> : <div>Loading Tree</div>
            }
        </>
    )
}

export default HierarchyTreeDesktop
