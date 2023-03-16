import { TreeStyled } from "@/styles/pages/components/dashboard/Tree.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import { useState } from "react"


const Tree = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <TreeStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="tree" />
            Tree
        </TreeStyled>
    )
}

export default Tree