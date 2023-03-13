import { IncomeSourcesStyled, CardsContainer, Card, CardTop, CardBottom } from "@/styles/pages/components/home/IncomeSources.styled"


const IncomeSources = ({ content }: any) => {
    const cardImages = [
        "/assets/images/home/incomeSources/daily-roi.svg",
        "/assets/images/home/incomeSources/matching-income.svg",
        "/assets/images/home/incomeSources/referral-income.svg",
    ]

    return (
        <IncomeSourcesStyled id="benefits">
            <h1>
                {content.incomeSources.mainHeading[0]}
                <span>{content.incomeSources.mainHeading[1]}</span>
            </h1>
            <CardsContainer>
                {content.incomeSources.cards.map((card: any, index: any) => (
                    <Card key={index}>
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