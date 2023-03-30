import { IncomeSourcesStyled, CardsContainer, Card, CardTop, CardBottom } from "@/styles/pages/components/home/IncomeSources.styled"
import { useState, useEffect } from "react"
import MovingLines from "./MovingLines"


const IncomeSources = ({ content }: any) => {
    const cardImages = [
        "/assets/images/home/incomeSources/daily-roi.svg",
        "/assets/images/home/incomeSources/matching-income.svg",
        "/assets/images/home/incomeSources/referral-income.svg",
    ]

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 100) {
            setAnimationClass(false);
        }
    }
    const [incomeHeadingClass, setIncomeHeadingClass] = useState(false);
    const [incomeCardClass0, setIncomeCardClass0] = useState(false);
    const [incomeCardClass1, setIncomeCardClass1] = useState(false);
    const [incomeCardClass2, setIncomeCardClass2] = useState(false);
    useEffect(() => {
        const incomeHeading = document.querySelectorAll('.incomeHeading');
        const incomeCard = document.querySelectorAll('.incomeCard');

        document.addEventListener('scroll', () => {
            if (!incomeHeadingClass) {
                animate(setIncomeHeadingClass, incomeHeading[0]);
            }
            if (!incomeCardClass0) {
                animate(setIncomeCardClass0, incomeCard[0]);
            }
            if (!incomeCardClass1) {
                animate(setIncomeCardClass1, incomeCard[1]);
            }
            if (!incomeCardClass2) {
                animate(setIncomeCardClass2, incomeCard[2]);
            }
        })
    })

    return (
        <IncomeSourcesStyled id="benefits">
            <h1 className={`incomeHeading ${incomeHeadingClass ? 'animate' : ''}`}>
                {content.incomeSources.mainHeading[0]}
                <span>{content.incomeSources.mainHeading[1]}</span>
            </h1>
            <CardsContainer>
                <Card className={`incomeCard ${incomeCardClass0 ? 'animate' : ''}`}>
                    <CardTop>
                        <img src={cardImages[0]} alt="..." />
                        <h2>
                            {content.incomeSources.cards[0].title}
                            <MovingLines />
                        </h2>
                    </CardTop>
                    <CardBottom>
                        <p>{content.incomeSources.cards[0].desc}</p>
                    </CardBottom>
                </Card>
                <Card className={`incomeCard ${incomeCardClass1 ? 'animate' : ''}`}>
                    <CardTop>
                        <img src={cardImages[1]} alt="..." />
                        <h2>
                            {content.incomeSources.cards[1].title}
                            <MovingLines />
                        </h2>
                    </CardTop>
                    <CardBottom>
                        <p>{content.incomeSources.cards[1].desc}</p>
                    </CardBottom>
                </Card>
                <Card className={`incomeCard ${incomeCardClass2 ? 'animate' : ''}`}>
                    <CardTop>
                        <img src={cardImages[2]} alt="..." />
                        <h2>
                            {content.incomeSources.cards[2].title}
                            <MovingLines />
                        </h2>
                    </CardTop>
                    <CardBottom>
                        <p>{content.incomeSources.cards[2].desc}</p>
                    </CardBottom>
                </Card>
            </CardsContainer>
        </IncomeSourcesStyled>
    )
}

export default IncomeSources