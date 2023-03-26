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
            if (window.innerWidth <= 1200 && window.innerWidth > 768) {
                if (window.scrollY >= 2600 && window.scrollY <= 2710) {
                    setAnimateClass(true);
                } else if (window.scrollY < 2600) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth <= 768) {
                if (window.scrollY >= 2800 && window.scrollY <= 2910) {
                    setAnimateClass(true);
                } else if (window.scrollY < 2750) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth > 1200) {
                if (window.scrollY >= 2100 && window.scrollY <= 2210) {
                    setAnimateClass(true);
                } else if (window.scrollY < 2100) {
                    setAnimateClass(false);
                }
            }
        })
    }, [])

    return (
        <IncomeSourcesStyled id="benefits">
            <h1 className={animateClass ? 'animate' : ''}>
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