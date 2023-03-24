import { StatsCardStyled, StatsButton, CardsContainer, Card } from "@/styles/pages/components/dashboard/currentStats/StatsCard.styled"
import content from '../../../content/content.json'
import { useState, useEffect } from "react";


const StatsCard = () => {
    const cardImages = [
        "/assets/images/dashboard/currentStats/statsCard1.svg",
        "/assets/images/dashboard/currentStats/statsCard2.svg",
        "/assets/images/dashboard/currentStats/statsCard3.svg",
        "/assets/images/dashboard/currentStats/statsCard4.svg",
        "/assets/images/dashboard/currentStats/statsCard5.svg",
        "/assets/images/dashboard/currentStats/statsCard6.svg"
    ];

    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200) {
                if (window.scrollY >= 100 && window.scrollY <= 210) {
                    setAnimateClass(true);
                }
            } else {
                if (window.scrollY >= 400 && window.scrollY <= 510) {
                    setAnimateClass(true);
                }
            }
        })
    }, [])

    return (
        <StatsCardStyled>
            <StatsButton type="button" className={animateClass ? 'animate' : ''}>{content.dashboard.currentStats.statsCard.yellowButton}</StatsButton>
            <CardsContainer>
                <div>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[0]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[0].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[0].number}</div>
                    </Card>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[1]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[1].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[1].number}</div>
                    </Card>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[2]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[2].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[2].number}</div>
                    </Card>
                </div>
                <div>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[3]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[3].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[3].number}</div>
                    </Card>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[4]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[4].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[4].number}</div>
                    </Card>
                    <Card className={animateClass ? 'animate' : ''}>
                        <img src={cardImages[5]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[5].title}</p>
                        <div>{content.dashboard.currentStats.statsCard.cards[5].number}</div>
                    </Card>
                </div>
            </CardsContainer>
        </StatsCardStyled>
    )
}

export default StatsCard