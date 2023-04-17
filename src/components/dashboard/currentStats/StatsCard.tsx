import { StatsCardStyled, StatsButton, CardsContainer, Card } from "@/styles/pages/components/dashboard/currentStats/StatsCard.styled"
import { CONTENT as content } from '@/content/content';
import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import {selectUserAccount} from '@/store/accountSlice';


const StatsCard = () => {
    const accountState = useSelector(selectUserAccount)

    const cardImages = [
        "/assets/images/dashboard/currentStats/statsCard1.svg",
        "/assets/images/dashboard/currentStats/statsCard2.svg",
        "/assets/images/dashboard/currentStats/statsCard3.svg",
        "/assets/images/dashboard/currentStats/statsCard4.svg",
        "/assets/images/dashboard/currentStats/statsCard5.svg",
        "/assets/images/dashboard/currentStats/statsCard6.svg"
    ];

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [statsButtonClass, setStatsButtonClass] = useState(false);
    // cards
    const [statsCard1Class, setStatsCard1Class] = useState(false);
    const [statsCard2Class, setStatsCard2Class] = useState(false);
    const [statsCard3Class, setStatsCard3Class] = useState(false);
    const [statsCard4Class, setStatsCard4Class] = useState(false);
    const [statsCard5Class, setStatsCard5Class] = useState(false);
    const [statsCard6Class, setStatsCard6Class] = useState(false);

    useEffect(() => {
        const statsButton = document.querySelectorAll('.statsButton');
        // cards
        const statsCard1 = document.querySelectorAll('.statsCard1');
        const statsCard2 = document.querySelectorAll('.statsCard2');
        const statsCard3 = document.querySelectorAll('.statsCard3');
        const statsCard4 = document.querySelectorAll('.statsCard4');
        const statsCard5 = document.querySelectorAll('.statsCard5');
        const statsCard6 = document.querySelectorAll('.statsCard6');

        document.addEventListener('scroll', () => {
            if (!statsButtonClass) {
                animate(setStatsButtonClass, statsButton[0]);
            }
            if (!statsCard1Class) {
                animate(setStatsCard1Class, statsCard1[0]);
            }
            if (!statsCard2Class) {
                animate(setStatsCard2Class, statsCard2[0]);
            }
            if (!statsCard3Class) {
                animate(setStatsCard3Class, statsCard3[0]);
            }
            if (!statsCard4Class) {
                animate(setStatsCard4Class, statsCard4[0]);
            }
            if (!statsCard5Class) {
                animate(setStatsCard5Class, statsCard5[0]);
            }
            if (!statsCard6Class) {
                animate(setStatsCard6Class, statsCard6[0]);
            }
        })
    }, [])

    return (
        <StatsCardStyled>
            <StatsButton type="button" className={`statsButton ${statsButtonClass ? 'animate' : ''}`}>{content.dashboard.currentStats.statsCard.yellowButton}</StatsButton>
            <CardsContainer>
                <div>
                    <Card className={`statsCard1 ${statsCard1Class ? 'animate' : ''}`}>
                        <img src={cardImages[0]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[0].title}</p>
                        <div>{accountState.account.level == 0 ? 1 : accountState.account.level}</div>
                    </Card>
                    <Card className={`statsCard2 ${statsCard2Class ? 'animate' : ''}`}>
                        <img src={cardImages[1]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[1].title}</p>
                        <div>{accountState.account.directRefs}</div>
                    </Card>
                    <Card className={`statsCard3 ${statsCard3Class ? 'animate' : ''}`}>
                        <img src={cardImages[2]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[2].title}</p>
                        <div>{accountState.account.totalRefs}</div>
                    </Card>
                </div>
                <div>
                    <Card className={`statsCard4 ${statsCard4Class ? 'animate' : ''}`}>
                        <img src={cardImages[3]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[3].title}</p>
                        <div>{accountState.account.totalDeposited}</div>
                    </Card>
                    <Card className={`statsCard5 ${statsCard5Class ? 'animate' : ''}`}>
                        <img src={cardImages[4]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[4].title}</p>
                        <div>{accountState.account.totalTeamDeposit}</div>
                    </Card>
                    <Card className={`statsCard6 ${statsCard6Class ? 'animate' : ''}`}>
                        <img src={cardImages[5]} alt="..." />
                        <p>{content.dashboard.currentStats.statsCard.cards[5].title}</p>
                        <div>{accountState.account.totalWithdrawn}</div>
                    </Card>
                </div>
            </CardsContainer>
        </StatsCardStyled>
    )
}

export default StatsCard
