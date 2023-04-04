import {
    TreeCardStyled,
    HierarchyButton,
    HierarchyTreeStyled
} from "@/styles/pages/components/dashboard/tree/TreeCard.styled"
import dynamic from 'next/dynamic';



const TreeCard = () => {

    const HierarchyTreeDesktop = dynamic(() => import("./HierarchyTreeDesktop"), { ssr: false });
    const HierarchyTreeMobile = dynamic(() => import("./HierarchyTreeMobile"), { ssr: false });

    return (
        <TreeCardStyled>
            <HierarchyButton>Your Hierarchy</HierarchyButton>
            <HierarchyTreeStyled>
                <HierarchyTreeDesktop />
                <HierarchyTreeMobile />
            </HierarchyTreeStyled>
        </TreeCardStyled>
    )
}

export default TreeCard
