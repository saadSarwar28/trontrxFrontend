import { WithdrawalStyled, Main, Page } from "@/styles/pages/components/dashboard/Withdrawal.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useState } from "react"


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
                    withdrawal
                </Page>
            </Main>
        </WithdrawalStyled>
    )
}

export default Withdrawal