import { CurrentStatsStyled } from "@/styles/pages/components/dashboard/CurrentStats.styled"
import Header from "@/components/dashboard/Header"
import { useState } from "react"
import SidebarMobile from '../../components/dashboard/SidebarMobile';


const CurrentStats = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }
    return (
        <CurrentStatsStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="currentStats" />
            <div>
                CurrentStats
            </div>
        </CurrentStatsStyled>
    )
}

export default CurrentStats