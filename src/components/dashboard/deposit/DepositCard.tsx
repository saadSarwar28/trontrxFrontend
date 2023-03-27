import { DepositCardStyled, ContributionButton, AmountButton, AmountSection, CardsSection, Card, Paragraphs, Paragraph, DepositButton } from "@/styles/pages/components/dashboard/deposit/DepositCard.styled"
import content from "../../../content/content.json"
import { useState, useEffect } from "react";


const DepositCard = () => {
    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200 && window.innerWidth > 992) {
                if (window.scrollY >= 100 && window.scrollY <= 210) {
                    setAnimateClass(true);
                } else if (window.scrollY < 100) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth > 1200) {
                if (window.scrollY >= 100 && window.scrollY <= 210) {
                    setAnimateClass(true);
                } else if (window.scrollY < 100) {
                    setAnimateClass(false);
                }
            }
        })
    }, [])

    return (
        <DepositCardStyled>
            <ContributionButton>{content.dashboard.deposit.yellowButton}</ContributionButton>
            <AmountButton>
                <span>{content.dashboard.deposit.blackButton}</span>
                <AmountSection>
                    <div>100</div>
                    <div>
                        <img src="/assets/images/dashboard/deposit/plus.svg" alt="..." />
                    </div>
                    <div>
                        <img src="/assets/images/dashboard/deposit/minus.svg" alt="..." />
                    </div>
                </AmountSection>
            </AmountButton>
            <CardsSection>
                {content.dashboard.deposit.cards.map((card, index) => (
                    <Card key={index}>
                        <div>
                            <p>{card.title}</p>
                            <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                        </div>
                        <div>{card.amount}</div>
                    </Card>
                ))}
            </CardsSection>
            <Paragraphs>
                <Paragraph className={animateClass ? 'animate' : ''}>
                    <img src="/assets/images/dashboard/deposit/exclamation.svg" alt="..." />
                    <p>{content.dashboard.deposit.firstPara}</p>
                </Paragraph>
                {content.dashboard.deposit.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`} className={animateClass ? 'animate' : ''}>
                        <img src="/assets/images/dashboard/deposit/check.png" alt="..." />
                        <p>{paragraph}</p>
                    </Paragraph>
                ))}
            </Paragraphs>
            <DepositButton className={animateClass ? 'animate' : ''}>
                <button>{content.dashboard.deposit.depositButton}</button>
            </DepositButton>
        </DepositCardStyled>
    )
}

export default DepositCard