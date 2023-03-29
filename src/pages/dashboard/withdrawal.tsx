import { WithdrawalStyled, Main, Page } from "@/styles/pages/components/dashboard/withdrawal/Withdrawal.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useState } from "react"
import WithdrawalCard from "@/components/dashboard/withdrawal/WithdrawalCard"


const Withdrawal = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <WithdrawalStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="withdrawal" />
            <Main>
                <SidebarDesktop activeLink="withdrawal" />
                <Page>
                    <WithdrawalCard />
                </Page>
            </Main>
        </WithdrawalStyled>
    )
}

export default Withdrawal