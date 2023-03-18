import { TreeStyled, Main, Page } from "@/styles/pages/components/dashboard/Tree.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
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
            <Main>
                <SidebarDesktop activeLink="tree" />
                <Page>
                    Tree
                </Page>
            </Main>
        </TreeStyled>
    )
}

export default Tree