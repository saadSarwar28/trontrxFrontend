import { ContractStatsStyled, Main, Page } from "@/styles/pages/components/dashboard/contractStats/ContractStats.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useState, useEffect } from 'react'
import ContractStatsCard from "@/components/dashboard/contractStats/ContractStatsCard"


const contractstats = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }, [])

    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    return (
        <ContractStatsStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="contractStats" />
            <Main>
                <SidebarDesktop activeLink="contractStats" />
                <Page>
                    <ContractStatsCard />
                </Page>
            </Main>
        </ContractStatsStyled>
    )
}

export default contractstats