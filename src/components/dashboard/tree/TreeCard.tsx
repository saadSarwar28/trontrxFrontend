import { TreeCardStyled, HierarchyButton, HierarchyTreeStyled } from "@/styles/pages/components/dashboard/tree/TreeCard.styled"
import HierarchyTree from "./HierarchyTree"


const TreeCard = () => {

    return (
        <TreeCardStyled>
            <HierarchyButton>Your Hierarchy</HierarchyButton>
            <HierarchyTreeStyled>
                <HierarchyTree />
            </HierarchyTreeStyled>
        </TreeCardStyled >
    )
}

export default TreeCard