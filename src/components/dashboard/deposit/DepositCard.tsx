import {
    DepositCardStyled,
    ContributionButton,
    AmountButton,
    AmountSection,
    CardsSection,
    Card,
    Paragraphs,
    Paragraph,
    DepositButton,
    ContributionInput
} from "@/styles/pages/components/dashboard/deposit/DepositCard.styled"
import {CONTENT as content} from '@/content/content';
import { useState, useEffect } from "react";
// @ts-ignore
import TronWeb from "tronweb";
import {ethers} from 'ethers';


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
    const [amount, setAmount] = useState(100)

    const increaseAmount = () => {
        setAmount(amount + 50)
    }

    const decreaseAmount = () => {
        if (amount > 100) {
            setAmount(amount - 50)
        }
    }

    const adjustAmount = (event: any) => {
        setAmount(event.target.value)
    }

    const setDepositPlus50 = () => {
        setAmount(amount + 50)
    }

    const setDepositPlus100 = () => {
        setAmount(amount + 100)
    }

    const setDepositPlus500 = () => {
        setAmount(amount + 500)
    }

    const setDepositPlus1000 = () => {
        setAmount(amount + 1000)
    }

    const setDepositPlus5000 = () => {
        setAmount(amount + 5000)
    }

    const setDepositPlus10000 = () => {
        setAmount(amount + 10000)
    }

    return (
        <DepositCardStyled>
            <ContributionButton>{content.dashboard.deposit.yellowButton}</ContributionButton>
            <AmountButton>
                <span>{content.dashboard.deposit.blackButton}</span>
                <AmountSection>
                    <ContributionInput type={'number'} min="100" step="50" value={amount} onInput={adjustAmount}/>
                    <div style={{cursor: 'pointer'}} onClick={increaseAmount}>
                        <img src="/assets/images/dashboard/deposit/plus.svg" alt="..." />
                    </div>
                    <div style={{cursor: 'pointer'}} onClick={decreaseAmount}>
                        <img src="/assets/images/dashboard/deposit/minus.svg" alt="..." />
                    </div>
                </AmountSection>
            </AmountButton>
            <CardsSection>
                <Card onClick={setDepositPlus50}>
                    <div>
                        <p>{content.dashboard.deposit.cards[0].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[0].amount}</div>
                </Card>
                <Card onClick={setDepositPlus100}>
                    <div>
                        <p>{content.dashboard.deposit.cards[1].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[1].amount}</div>
                </Card>
                <Card onClick={setDepositPlus500}>
                    <div>
                        <p>{content.dashboard.deposit.cards[2].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[2].amount}</div>
                </Card>
                <Card onClick={setDepositPlus1000}>
                    <div>
                        <p>{content.dashboard.deposit.cards[3].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[3].amount}</div>
                </Card>
                <Card onClick={setDepositPlus5000}>
                    <div>
                        <p>{content.dashboard.deposit.cards[4].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[4].amount}</div>
                </Card>
                <Card onClick={setDepositPlus10000}>
                    <div>
                        <p>{content.dashboard.deposit.cards[5].title}</p>
                        <img src="/assets/images/dashboard/deposit/diamond.svg" alt="..." />
                    </div>
                    <div>{content.dashboard.deposit.cards[5].amount}</div>
                </Card>
            </CardsSection>
            <Paragraphs>
                <Paragraph className={`paraDeposit ${paraDepositClass ? 'animate' : ''}`}>
                    <img style={{marginTop: '10px'}} src="/assets/images/dashboard/deposit/exclamation.svg" alt="..." />
                    <p style={{color: 'red', fontWeight: 'bolder'}}>{content.dashboard.deposit.firstPara}</p>
                </Paragraph>
                {content.dashboard.deposit.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`} className={`paraDeposit ${paraDepositClass ? 'animate' : ''}`}>
                        <img src="/assets/images/dashboard/deposit/check.png" alt="..." />
                        <p style={{fontWeight: 'bold'}}>{paragraph}</p>
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
