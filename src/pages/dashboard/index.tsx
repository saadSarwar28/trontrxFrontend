import { CurrentStatsStyled, Main, Page, InfoCard, YellowButton1, BlackButton1, YellowButton2, BlackButton2, CardText, CopyButton, StatsCard, StatsButton, CardsContainer, Card } from "@/styles/pages/components/dashboard/CurrentStats.styled"
import Header from "@/components/dashboard/Header"
import { useState } from "react"
import SidebarMobile from '../../components/dashboard/SidebarMobile'
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import Link from "next/link"
import content from '../../content/content.json'


const CurrentStats = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    const cardImages = [
        "/assets/images/dashboard/currentStats/statsCard1.svg",
        "/assets/images/dashboard/currentStats/statsCard2.svg",
        "/assets/images/dashboard/currentStats/statsCard3.svg",
        "/assets/images/dashboard/currentStats/statsCard4.svg",
        "/assets/images/dashboard/currentStats/statsCard5.svg",
        "/assets/images/dashboard/currentStats/statsCard6.svg"
    ]

    return (
        <CurrentStatsStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="currentStats" />
            <Main>
                <SidebarDesktop activeLink="currentStats" />
                <Page>
                    <InfoCard>
                        <YellowButton1 type="button">{content.dashboard.currentStats.infoCard.yellowButton1}</YellowButton1>
                        <BlackButton1 type="button">
                            <span>{content.dashboard.currentStats.infoCard.blackButton1.span1}</span>
                            <span>{content.dashboard.currentStats.infoCard.blackButton1.span2}</span>
                        </BlackButton1>
                        <YellowButton2 type="button">
                            <span>{content.dashboard.currentStats.infoCard.yellowButton2.span1}</span>
                            <span>{content.dashboard.currentStats.infoCard.yellowButton2.span2}</span>
                        </YellowButton2>
                        <BlackButton2 type="button">
                            <span>{content.dashboard.currentStats.infoCard.blackButton2.span1}</span>
                            <Link href="https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s">{content.dashboard.currentStats.infoCard.blackButton2.link}</Link>
                        </BlackButton2>
                        <CardText>
                            {content.dashboard.currentStats.infoCard.card1Text}
                        </CardText>
                        <CopyButton>{content.dashboard.currentStats.infoCard.copyButton}</CopyButton>
                    </InfoCard>
                    <StatsCard>
                        <StatsButton type="button">{content.dashboard.currentStats.statsCard.yellowButton}</StatsButton>
                        <CardsContainer>
                            <div>
                                <Card>
                                    <img src={cardImages[0]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[0].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[0].number}</div>
                                </Card>
                                <Card>
                                    <img src={cardImages[1]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[1].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[1].number}</div>
                                </Card>
                                <Card>
                                    <img src={cardImages[2]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[2].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[2].number}</div>
                                </Card>
                            </div>
                            <div>
                                <Card>
                                    <img src={cardImages[3]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[3].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[3].number}</div>
                                </Card>
                                <Card>
                                    <img src={cardImages[4]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[4].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[4].number}</div>
                                </Card>
                                <Card>
                                    <img src={cardImages[5]} alt="..." />
                                    <p>{content.dashboard.currentStats.statsCard.cards[5].title}</p>
                                    <div>{content.dashboard.currentStats.statsCard.cards[5].number}</div>
                                </Card>
                            </div>
                        </CardsContainer>
                    </StatsCard>
                </Page>
            </Main>
        </CurrentStatsStyled>
    )
}

export default CurrentStats