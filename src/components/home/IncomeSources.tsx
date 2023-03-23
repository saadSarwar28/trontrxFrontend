import { IncomeSourcesStyled, CardsContainer, Card, CardTop, CardBottom } from "@/styles/pages/components/home/IncomeSources.styled"
import { useState, useEffect } from "react"


const IncomeSources = ({ content }: any) => {
    const cardImages = [
        "/assets/images/home/incomeSources/daily-roi.svg",
        "/assets/images/home/incomeSources/matching-income.svg",
        "/assets/images/home/incomeSources/referral-income.svg",
    ]

    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200) {
                if (window.scrollY >= 3000 && window.scrollY <= 3610) {
                    setAnimateClass(true);
                }
            } else {
                if (window.scrollY >= 2100 && window.scrollY <= 2310) {
                    setAnimateClass(true);
                }
            }
        })
    }, [])

    return (
        <IncomeSourcesStyled id="benefits">
            <h1>
                {content.incomeSources.mainHeading[0]}
                <span>{content.incomeSources.mainHeading[1]}</span>
            </h1>
            <CardsContainer>
                {content.incomeSources.cards.map((card: any, index: any) => (
                    <Card key={index} className={animateClass ? 'animate' : ''}>
                        <CardTop>
                            <img src={cardImages[index]} alt="..." />
                            <h2>{card.title}</h2>
                        </CardTop>
                        <CardBottom>
                            <p>{card.desc}</p>
                        </CardBottom>
                    </Card>
                ))}
            </CardsContainer>
        </IncomeSourcesStyled>
    )
}

export default IncomeSources