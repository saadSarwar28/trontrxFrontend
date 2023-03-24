import { DepositStyled, Main, Page } from "@/styles/pages/components/dashboard/deposit/Deposit.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useState } from "react"
import DepositCard from "@/components/dashboard/deposit/DepositCard"


const Deposit = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <DepositStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="deposit" />
            <Main>
                <SidebarDesktop activeLink="deposit" />
                <Page>
                    <DepositCard />
                </Page>
            </Main>
        </DepositStyled>
    )
}

export default Deposit