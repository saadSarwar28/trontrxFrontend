import { Tree, TreeNode } from 'react-organizational-chart'
import CustomNodeDesktop from "./CustomNodeDesktop"
import { HierarchyTreeDesktopStyled } from '@/styles/pages/components/dashboard/tree/HierarchyTreeDesktop.styled'
import { useEffect, useState } from "react";


const treeData = [
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 500
    },
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 500
    },
    {
        images: {
            profileBg: "/assets/images/dashboard/tree/profile-bg.png",
            profile: "/assets/images/dashboard/tree/profile.svg"
        },
        address: "TRX",
        amount: 500
    }
]

const HierarchyTreeDesktop = () => {
    const [loading, setLoading] = useState(false);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000)
    // }, [])


    return (
        <>
            {!loading && (
                <HierarchyTreeDesktopStyled className={loading ? '' : 'animate'}>
                    <Tree
                        lineWidth={'8px'}
                        lineHeight={'50px'}
                        lineColor={'#FBBD18'}
                        lineBorderRadius={'10px'}
                        nodePadding={'10px'}
                        label={
                            <CustomNodeDesktop
                                profileBg={treeData[0].images.profileBg}
                                profileImg={treeData[0].images.profile}
                                address={treeData[0].address}
                                amount={treeData[0].amount}
                            />
                        }>
                        {/* child 1 */}
                        <TreeNode label={
                            <CustomNodeDesktop
                                profileBg={treeData[0].images.profileBg}
                                profileImg={treeData[0].images.profile}
                                address={treeData[0].address}
                                amount={treeData[0].amount}
                            />
                        }>
                            {/* grandchildren */}
                            {treeData.map((item, index) => (
                                <TreeNode key={index} label={
                                    <CustomNodeDesktop
                                        profileBg={item.images.profileBg}
                                        profileImg={item.images.profile}
                                        address={item.address}
                                        amount={item.amount}
                                    />}>
                                </TreeNode>
                            ))}
                        </TreeNode>
                    </Tree>
                </HierarchyTreeDesktopStyled>
            )}
        </>
    )
}

export default HierarchyTreeDesktop
