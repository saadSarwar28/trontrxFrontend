import { TreeCardStyled, HierarchyButton, HierarchyTreeStyled } from "@/styles/pages/components/dashboard/tree/TreeCard.styled"
import HierarchyTreeDesktop from "./HierarchyTreeDesktop"


const TreeCard = () => {

    return (
        <TreeCardStyled>
            <HierarchyButton>Your Hierarchy</HierarchyButton>
            <HierarchyTreeStyled>
                <HierarchyTreeDesktop />
            </HierarchyTreeStyled>
        </TreeCardStyled >
    )
}

export default TreeCard