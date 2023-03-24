import { CurrentStatsStyled, Main, Page } from "@/styles/pages/components/dashboard/currentStats/CurrentStats.styled"
import Header from "@/components/dashboard/Header"
import { useState } from "react"
import SidebarMobile from '../../components/dashboard/SidebarMobile'
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import InfoCard from "@/components/dashboard/currentStats/InfoCard"
import StatsCard from "@/components/dashboard/currentStats/StatsCard"


const CurrentStats = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <CurrentStatsStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="currentStats" />
            <Main>
                <SidebarDesktop activeLink="currentStats" />
                <Page>
                    <InfoCard />
                    <StatsCard />
                </Page>
            </Main>
        </CurrentStatsStyled>
    )
}

export default CurrentStats