import { DepositStyled } from "@/styles/pages/components/dashboard/Deposit.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import { useState } from "react"


const Deposit = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <DepositStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="deposit" />
            Deposit
        </DepositStyled>
    )
}

export default Deposit