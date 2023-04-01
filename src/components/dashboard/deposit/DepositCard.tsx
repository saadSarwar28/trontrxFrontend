import { DepositCardStyled, ContributionButton, AmountButton, AmountSection, CardsSection, Card, Paragraphs, Paragraph, DepositButton } from "@/styles/pages/components/dashboard/deposit/DepositCard.styled"
import content from "../../../content/content.json"
import { useState, useEffect } from "react";


const DepositCard = () => {

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [paraDepositClass, setParaDepositClass] = useState(false);
    const [depositButtonClass, setDepositButtonClass] = useState(false);
    useEffect(() => {
        const paraDeposit = document.querySelectorAll('.paraDeposit');
        const depositButton = document.querySelectorAll('.depositButton');
        document.addEventListener('scroll', () => {
            if (!paraDepositClass) {
                animate(setParaDepositClass, paraDeposit[0]);
            }
            if (!depositButtonClass) {
                animate(setDepositButtonClass, depositButton[0]);
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
                <Paragraph className={`paraDeposit ${paraDepositClass ? 'animate' : ''}`}>
                    <img src="/assets/images/dashboard/deposit/exclamation.svg" alt="..." />
                    <p>{content.dashboard.deposit.firstPara}</p>
                </Paragraph>
                {content.dashboard.deposit.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`} className={`paraDeposit ${paraDepositClass ? 'animate' : ''}`}>
                        <img src="/assets/images/dashboard/deposit/check.png" alt="..." />
                        <p>{paragraph}</p>
                    </Paragraph>
                ))}
            </Paragraphs>
            <DepositButton className={`depositButton ${depositButtonClass ? 'animate' : ''}`}>
                <button>{content.dashboard.deposit.depositButton}</button>
            </DepositButton>
        </DepositCardStyled>
    )
}

export default DepositCard