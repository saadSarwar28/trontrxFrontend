import {
    WithdrawalCardStyled, InfoButton,
    CardsSectionDesktop, ThreeCardsDesktop, TwoCardsDesktop, CardDesktop, CardsSectionMobile, CardMobile,
    TimerSection, Paragraphs, Paragraph, WithdrawButton
} from "@/styles/pages/components/dashboard/withdrawal/WithdrawalCard.styled"
import content from "../../../content/content.json"
import { useState, useEffect } from "react"
import Timer from './Timer'


const WithdrawalCard = () => {

    const cardImages = [
        "/assets/images/dashboard/withdrawal/cards/current-active.svg",
        "/assets/images/dashboard/withdrawal/cards/daily-roi.svg",
        "/assets/images/dashboard/withdrawal/cards/referral-income.svg",
        "/assets/images/dashboard/withdrawal/cards/matching-level.svg",
        "/assets/images/dashboard/withdrawal/cards/total-withdrawn.svg",
        "/assets/images/dashboard/withdrawal/cards/income-limit.svg",
        "/assets/images/dashboard/withdrawal/cards/available.svg",
        "/assets/images/dashboard/withdrawal/cards/last-withdrawn.svg"
    ]

    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200 && window.innerWidth > 992) {
                if (window.scrollY >= 100 && window.scrollY <= 210) {
                    setAnimateClass(true);
                }
                // else if (window.scrollY < 100) {
                //     setAnimateClass(false);
                // }
            }

            if (window.innerWidth > 1200) {
                if (window.scrollY >= 100 && window.scrollY <= 210) {
                    setAnimateClass(true);
                }
                // else if (window.scrollY < 100) {
                //     setAnimateClass(false);
                // }
            }
        })
    }, [])

    return (
        <WithdrawalCardStyled>
            <InfoButton>Withdrawal Info</InfoButton>
            {/* Cards Desktop */}
            <CardsSectionDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[0]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[0].title}</p>
                        <div>{content.dashboard.withdrawal.cards[0].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[1]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[1].title}</p>
                        <div>{content.dashboard.withdrawal.cards[1].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[2]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[2].title}</p>
                        <div>{content.dashboard.withdrawal.cards[2].amount}</div>
                    </CardDesktop>
                </ThreeCardsDesktop>
                <TwoCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[3]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[3].title}</p>
                        <div>{content.dashboard.withdrawal.cards[3].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[4]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[4].title}</p>
                        <div>{content.dashboard.withdrawal.cards[4].amount}</div>
                    </CardDesktop>
                </TwoCardsDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[5]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[5].title}</p>
                        <div>{content.dashboard.withdrawal.cards[5].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[6]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[6].title}</p>
                        <div>{content.dashboard.withdrawal.cards[6].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[7]} alt="..." />
                        <p>{content.dashboard.withdrawal.cards[7].title}</p>
                        <div>{content.dashboard.withdrawal.cards[7].amount}</div>
                    </CardDesktop>
                </ThreeCardsDesktop>
            </CardsSectionDesktop>
            {/* Cards Mobile */}
            <CardsSectionMobile>
                {content.dashboard.withdrawal.cards.map((card, index) => (
                    <CardMobile key={index}>
                        <p>{card.title}</p>
                        <div>{card.amount}</div>
                    </CardMobile>
                ))}
            </CardsSectionMobile>
            <TimerSection>
                <p>{content.dashboard.withdrawal.timerTitle}</p>
                <Timer timerMinutes={1} />
            </TimerSection>
            <Paragraphs>
                {content.dashboard.withdrawal.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`} className={animateClass ? 'animate' : ''}>
                        <img src="/assets/images/dashboard/withdrawal/paragraph.svg" alt="..." />
                        <p>{paragraph}</p>
                    </Paragraph>
                ))}
            </Paragraphs>
            <WithdrawButton className={animateClass ? 'animate' : ''}>
                <button>{content.dashboard.withdrawal.withdrawButton}</button>
            </WithdrawButton>
        </WithdrawalCardStyled>
    )
}

export default WithdrawalCard