import { Tree } from 'react-organizational-chart'
import { HierarchyTreeMobileStyled } from "@/styles/pages/components/dashboard/tree/HierarchyTreeMobile.styled"
import CustomNodeMobile from './CustomNodeMobile'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import {
    selectUserAccount,
} from '@/store/accountSlice';

const HierarchyTreeMobile = () => {

    const accountState = useSelector(selectUserAccount)
    
    return (
        <HierarchyTreeMobileStyled className={false ? '' : 'animate'}>
            <Tree
                lineWidth={'4px'}
                lineHeight={'50px'}
                lineColor={'#FBBD18'}
                lineBorderRadius={'10px'}
                nodePadding={'10px'}
                label={
                    <CustomNodeMobile
                        address={accountState.account.address}
                    />
                }>
            </Tree>
        </HierarchyTreeMobileStyled >
    )
}

export default HierarchyTreeMobile