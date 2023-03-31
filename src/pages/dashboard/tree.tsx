import { TreeStyled, Main, Page } from "@/styles/pages/components/dashboard/tree/Tree.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useState } from "react"
import TreeCard from "@/components/dashboard/tree/TreeCard"


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
                    <TreeCard />
                </Page>
            </Main>
        </TreeStyled>
    )
}

export default Tree