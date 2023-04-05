import { Tree, TreeNode } from 'react-organizational-chart'
import { HierarchyTreeMobileStyled } from "@/styles/pages/components/dashboard/tree/HierarchyTreeMobile.styled"
import CustomNodeMobile from './CustomNodeMobile'
import { useEffect, useState } from 'react'


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

const HierarchyTreeMobile = () => {
    const [loading, setLoading] = useState(false);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000)
    // }, [])

    return (
        <HierarchyTreeMobileStyled className={loading ? '' : 'animate'}>
            <Tree
                lineWidth={'4px'}
                lineHeight={'50px'}
                lineColor={'#FBBD18'}
                lineBorderRadius={'10px'}
                nodePadding={'10px'}
                label={
                    <CustomNodeMobile
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>

                <TreeNode label={
                    <CustomNodeMobile
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>
                    {treeData.map((item, index) => (
                        <TreeNode key={index} label={
                            <CustomNodeMobile
                                profileBg={item.images.profileBg}
                                profileImg={item.images.profile}
                                address={item.address}
                                amount={item.amount}
                            />}>

                            {treeData.map((item, index) => (
                                <TreeNode key={index} label={
                                    <CustomNodeMobile
                                        profileBg={item.images.profileBg}
                                        profileImg={item.images.profile}
                                        address={item.address}
                                        amount={item.amount}
                                    />}>
                                </TreeNode>
                            ))}

                        </TreeNode>
                    ))}
                </TreeNode>

                <TreeNode label={
                    <CustomNodeMobile
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>
                    {treeData.map((item, index) => (
                        <TreeNode key={index} label={
                            <CustomNodeMobile
                                profileBg={item.images.profileBg}
                                profileImg={item.images.profile}
                                address={item.address}
                                amount={item.amount}
                            />}>

                            {treeData.map((item, index) => (
                                <TreeNode key={index} label={
                                    <CustomNodeMobile
                                        profileBg={item.images.profileBg}
                                        profileImg={item.images.profile}
                                        address={item.address}
                                        amount={item.amount}
                                    />}>
                                </TreeNode>
                            ))}

                        </TreeNode>
                    ))}
                </TreeNode>

            </Tree>
        </HierarchyTreeMobileStyled>
    )
}

export default HierarchyTreeMobile