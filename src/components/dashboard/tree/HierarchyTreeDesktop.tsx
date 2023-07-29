import { Tree } from 'react-organizational-chart'
import CustomNodeDesktop from "./CustomNodeDesktop"
import { HierarchyTreeDesktopStyled } from '@/styles/pages/components/dashboard/tree/HierarchyTreeDesktop.styled'
import { useSelector } from 'react-redux';
import {
    selectUserAccount,
} from '@/store/accountSlice';

const HierarchyTreeDesktop = () => {

    const accountState = useSelector(selectUserAccount)
    
    return (
        <HierarchyTreeDesktopStyled className={false ? '' : 'animate'}>
            <Tree
                lineWidth={'5px'}
                lineHeight={'50px'}
                lineColor={'#FBBD18'}
                lineBorderRadius={'10px'}
                nodePadding={'20px'}
                label={ <CustomNodeDesktop address={accountState.account.address} /> }>
            </Tree>
        </HierarchyTreeDesktopStyled>
    )
}

export default HierarchyTreeDesktop
