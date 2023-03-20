import { CurrentStatsStyled, Main, Page, InfoCard, StatsCard, YellowButton1, BlackButton1, YellowButton2, BlackButton2, CardText, CopyButton } from "@/styles/pages/components/dashboard/CurrentStats.styled"
import Header from "@/components/dashboard/Header"
import { useState } from "react"
import SidebarMobile from '../../components/dashboard/SidebarMobile'
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import Link from "next/link"


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
                    <InfoCard>
                        <YellowButton1 type="button">WALLET INFO</YellowButton1>
                        <BlackButton1 type="button">
                            <span>your trx wallet address</span>
                            <span>TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s</span>
                        </BlackButton1>
                        <YellowButton2 type="button">
                            <span>Upline Partner Wallet</span>
                            <span>TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s</span>
                        </YellowButton2>
                        <BlackButton2 type="button">
                            <span>Your Referral Link</span>
                            <Link href="https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s">https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s</Link>
                        </BlackButton2>
                        <CardText>
                            Share this link with your partners to get referral rewards. You should have active deposit to unlock affiliate bonuses!
                        </CardText>
                        <CopyButton>Copy</CopyButton>
                    </InfoCard>
                    <StatsCard>

                    </StatsCard>
                </Page>
            </Main>
        </CurrentStatsStyled>
    )
}

export default CurrentStats