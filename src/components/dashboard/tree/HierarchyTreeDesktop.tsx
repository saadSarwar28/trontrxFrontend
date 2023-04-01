import { Tree, TreeNode } from 'react-organizational-chart'
import CustomNode from "./CustomNode"


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
    return (
        <div>
            <Tree
                lineWidth={'8px'}
                lineHeight={'50px'}
                lineColor={'#FBBD18'}
                lineBorderRadius={'10px'}
                nodePadding={'10px'}
                label={
                    <CustomNode
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>
                {/* child 1 */}
                <TreeNode label={
                    <CustomNode
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>
                    {/* grandchildren */}
                    {treeData.map((item, index) => (
                        <TreeNode key={index} label={
                            <CustomNode
                                profileBg={item.images.profileBg}
                                profileImg={item.images.profile}
                                address={item.address}
                                amount={item.amount}
                            />}>

                            {/* great grandchildren */}
                            {treeData.map((item2, index) => (
                                <TreeNode key={index} label={
                                    <CustomNode
                                        profileBg={item2.images.profileBg}
                                        profileImg={item2.images.profile}
                                        address={item2.address}
                                        amount={item2.amount}
                                    />}>

                                    {/* great great grandchildren */}
                                    {treeData.map((item2, index) => (
                                        <TreeNode key={index} label={
                                            <CustomNode
                                                profileBg={item2.images.profileBg}
                                                profileImg={item2.images.profile}
                                                address={item2.address}
                                                amount={item2.amount}
                                            />}>
                                        </TreeNode>
                                    ))}

                                </TreeNode>
                            ))}

                        </TreeNode>
                    ))}
                </TreeNode>

                {/* child 2 */}
                <TreeNode label={
                    <CustomNode
                        profileBg={treeData[0].images.profileBg}
                        profileImg={treeData[0].images.profile}
                        address={treeData[0].address}
                        amount={treeData[0].amount}
                    />
                }>
                    {/* grandchildren */}
                    {treeData.map((item, index) => (
                        <TreeNode key={index} label={
                            <CustomNode
                                profileBg={item.images.profileBg}
                                profileImg={item.images.profile}
                                address={item.address}
                                amount={item.amount}
                            />}>

                            {/* great grandchildren */}
                            {treeData.map((item2, index) => (
                                <TreeNode key={index} label={
                                    <CustomNode
                                        profileBg={item2.images.profileBg}
                                        profileImg={item2.images.profile}
                                        address={item2.address}
                                        amount={item2.amount}
                                    />}>

                                    {/* great great grandchildren */}
                                    {treeData.map((item2, index) => (
                                        <TreeNode key={index} label={
                                            <CustomNode
                                                profileBg={item2.images.profileBg}
                                                profileImg={item2.images.profile}
                                                address={item2.address}
                                                amount={item2.amount}
                                            />}>
                                        </TreeNode>
                                    ))}

                                </TreeNode>
                            ))}

                        </TreeNode>
                    ))}
                </TreeNode>
            </Tree>
        </div>
    )
}

export default HierarchyTreeDesktop