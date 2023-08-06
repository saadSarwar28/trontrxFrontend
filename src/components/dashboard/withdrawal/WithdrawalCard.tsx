import {
    WithdrawalCardStyled, InfoButton,
    CardsSectionDesktop, ThreeCardsDesktop, TwoCardsDesktop, CardDesktop, CardsSectionMobile, CardMobile,
    TimerSection, Paragraphs, Paragraph, WithdrawButton, ConnectWalletButton
} from "@/styles/pages/components/dashboard/withdrawal/WithdrawalCard.styled"
import { CONTENT as content } from '@/content/content';
import { useState, useEffect } from "react"
import Timer from './Timer'
import { useSelector } from 'react-redux';
import { getUserAccountDetails, selectUserAccount } from '@/store/accountSlice';
import { connectWallet } from '@/utils/wallet';
import { CONSTANTS } from '@/utils/constants';
import timer from './Timer';


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
    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         // console.log(window.scrollY);
    //         if (window.innerWidth <= 1200 && window.innerWidth > 992) {
    //             if (window.scrollY >= 100 && window.scrollY <= 210) {
    //                 setAnimateClass(true);
    //             }
    //             // else if (window.scrollY < 100) {
    //             //     setAnimateClass(false);
    //             // }
    //         }

    //         if (window.innerWidth > 1200) {
    //             if (window.scrollY >= 100 && window.scrollY <= 210) {
    //                 setAnimateClass(true);
    //             }
    //             // else if (window.scrollY < 100) {
    //             //     setAnimateClass(false);
    //             // }
    //         }
    //     })
    // }, [])

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [timerWithdrawalClass, setTimerWithdrawalClass] = useState(false);
    const [withdrawButtonClass, setWithdrawButtonClass] = useState(false);
    const [paraWithdrawalClass, setParaWithdrawalClass] = useState(false);
    const [dailyRoi, setDailyRoi] = useState(0)

    useEffect(() => {
        const timerWithdrawal = document.querySelectorAll('.timerWithdrawal');
        const withdrawButton = document.querySelectorAll('.withdrawButton');
        const paraWithdrawal = document.querySelectorAll('.paraWithdrawal');
        document.addEventListener('scroll', () => {
            if (!timerWithdrawalClass) {
                animate(setTimerWithdrawalClass, timerWithdrawal[0]);
            }
            if (!withdrawButtonClass) {
                animate(setWithdrawButtonClass, withdrawButton[0]);
            }
            if (!paraWithdrawalClass) {
                animate(setParaWithdrawalClass, paraWithdrawal[0]);
            }
        })
    }, [])

    const accountState = useSelector(selectUserAccount)

    const _connectWallet = () => {
        if (!accountState.account.walletConnected) {
            connectWallet()
                .then((address: string) => {
                    // @ts-ignore
                    dispatch(getUserAccountDetails(address))
                })
        }
    }

    const withdraw = async () => {
        // console.log(' withdraw ')
        // alert('Please goto https://tronscan.org/#/contract/TA6K7bdkY5hy4UVmFuFNCnK5699doLteqN/code to deposit. Sorry for the inconvenience, we are working on the issue and it will soon be resolved. Thanks for your patience and cooperation.')
        // return
        if (Math.floor(Date.now() / 1000) < (accountState.account.lastWithdrawn + CONSTANTS.timeStep)) {
            alert('Cannot withdraw yet')
            return
        }

        // @ts-ignore
        if (window.tronWeb) {
            try {
                // @ts-ignore
                let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
                let result = await contract.withdraw().send(
                    {
                        callValue: '1000000',
                        from: accountState.account.address,
                        feeLimit: 2000000000
                    }
                );
                alert('Transaction broadcast, Trx id : ' + String(result));
            } catch (error) {
                // console.log(error)
                alert('Transaction declined!')
            }
        }
    }

    const timerCallback = () => {
        // console.log('its time')
        // setCanWithdraw(true)
    }

    return (
        <WithdrawalCardStyled>
            <InfoButton>Withdrawal Info</InfoButton>
            {/* Cards Desktop */}
            <CardsSectionDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[0]} alt="..." />
                        {/*current active deposit*/}
                        <p>{content.dashboard.withdrawal.cards[0].title}</p>
                        <div>{accountState.account.activeDeposit}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[1]} alt="..." />
                        {/*daily ROI*/}
                        <p>{content.dashboard.withdrawal.cards[1].title}</p>
                        <div>
                            {
                                accountState.account.activeDepositWithdrawn >= (((accountState.account.activeDeposit * 310)) / 100) ? '0.00' : ((accountState.account.activeDeposit) / 100).toFixed(2)
                            }
                        </div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[2]} alt="..." />
                        {/*DIRECT REFERRAL INCOME*/}
                        <p>{content.dashboard.withdrawal.cards[2].title}</p>
                        <div>{Number(accountState.account.directCommission - accountState.account.directCommissionDebt).toFixed(2)}</div>
                    </CardDesktop>
                </ThreeCardsDesktop>
                <TwoCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[3]} alt="..." />
                        {/*MATCHING LEVEL INCOME*/}
                        <p>{content.dashboard.withdrawal.cards[3].title}</p>
                        <div>
                            {
                                accountState.account.levelIncome > 0 ? (accountState.account.levelIncome - accountState.account.levelIncomeDebt).toFixed(2) : '0.00'
                            }
                        </div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[4]} alt="..." />
                        {/*TOTAL WITHDRAWN*/}
                        <p>{content.dashboard.withdrawal.cards[4].title}</p>
                        <div>
                            {
                                accountState.account.activeDepositWithdrawn
                            }
                        </div>
                    </CardDesktop>
                </TwoCardsDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[5]} alt="..." />
                        {/*310% REMAINING INCOME LIMIT*/}
                        <p>{content.dashboard.withdrawal.cards[5].title}</p>
                        <div>
                            {
                                (accountState.account.address === CONSTANTS.adminId || accountState.account.address === CONSTANTS.topId) ? 'NA'
                                    : (((accountState.account.activeDeposit * 310) / 100) - accountState.account.activeDepositWithdrawn).toFixed(2)
                            }
                        </div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[6]} alt="..." />
                        {/*AVAILABLE TO WITHDRAW*/}
                        <p>{content.dashboard.withdrawal.cards[6].title}</p>
                        <div>
                            {
                                accountState.account.contractBalance < accountState.account.projectInsurance ? 0.00
                                    :
                                    <>
                                        {
                                            (accountState.account.address === CONSTANTS.topId || accountState.account.address === CONSTANTS.adminId) ?
                                                <>
                                                    {
                                                        Number((accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt)).toFixed(2)
                                                    }
                                                </> :
                                                <>
                                                    {
                                                        (((accountState.account.activeDeposit * 300)) / 100) === accountState.account.activeDepositWithdrawn ?
                                                            Number(accountState.account.directCommission - accountState.account.directCommissionDebt).toFixed(2)
                                                            :
                                                            <>
                                                                {
                                                                    (accountState.account.dailyRoi + (accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt) + accountState.account.activeDepositWithdrawn) > (accountState.account.activeDeposit * 300) / 100 ?
                                                                        ((accountState.account.activeDeposit * 300) / 100 - accountState.account.activeDepositWithdrawn).toFixed(2)
                                                                        :
                                                                        Number(accountState.account.dailyRoi + (accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt)).toFixed(2)
                                                                }
                                                            </>
                                                    }
                                                </>
                                        }
                                    </>
                            }
                        </div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[7]} alt="..." />
                        {/*LAST WITHDRAWN*/}
                        <p>{content.dashboard.withdrawal.cards[7].title}</p>
                        <div style={{ fontSize: '20px', whiteSpace: 'nowrap' }}>
                            {
                                accountState.account.lastWithdrawn === 0 ? 'NA' : new Date(accountState.account.lastWithdrawn * 1000).toLocaleDateString() + ' ' + new Date(accountState.account.lastWithdrawn * 1000).toLocaleTimeString()
                            }
                        </div>
                    </CardDesktop>
                </ThreeCardsDesktop>
            </CardsSectionDesktop>
            {/* Cards Mobile */}
            <CardsSectionMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[0].title}</p>
                    <div>{accountState.account.activeDeposit}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[1].title}</p>
                    <div>{accountState.account.activeDepositWithdrawn >= (((accountState.account.activeDeposit * 310)) / 100) ? '0.00' : ((accountState.account.activeDeposit) / 100).toFixed(2)}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[2].title}</p>
                    <div>{Number(accountState.account.directCommission - accountState.account.directCommissionDebt).toFixed(2)}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[3].title}</p>
                    <div>{accountState.account.levelIncome > 0 ? (accountState.account.levelIncome - accountState.account.levelIncomeDebt).toFixed(2) : '0.00'}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[4].title}</p>
                    <div>{accountState.account.activeDepositWithdrawn}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[5].title}</p>
                    <div>
                        {
                            (accountState.account.address === CONSTANTS.adminId || accountState.account.address === CONSTANTS.topId) ? 'NA'
                                : ((accountState.account.activeDeposit * 310) / 100) - accountState.account.activeDepositWithdrawn
                        }
                    </div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[6].title}</p>
                    <div>
                        {
                            accountState.account.contractBalance < accountState.account.projectInsurance ? 0.00
                                :
                                <>
                                    {
                                        (accountState.account.address === CONSTANTS.topId || accountState.account.address === CONSTANTS.adminId) ?
                                            <>
                                                {
                                                    Number((accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt)).toFixed(2)
                                                }
                                            </> :
                                            <>
                                                {
                                                    (((accountState.account.activeDeposit * 310)) / 100) === accountState.account.activeDepositWithdrawn ?
                                                        Number(accountState.account.directCommission - accountState.account.directCommissionDebt).toFixed(2)
                                                        :
                                                        <>
                                                            {
                                                                (accountState.account.dailyRoi + (accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt) + accountState.account.activeDepositWithdrawn) > (accountState.account.activeDeposit * 310) / 100 ?
                                                                    ((accountState.account.activeDeposit * 310) / 100 - accountState.account.activeDepositWithdrawn).toFixed(2)
                                                                    :
                                                                    Number(accountState.account.dailyRoi + (accountState.account.levelIncome - accountState.account.levelIncomeDebt) + (accountState.account.directCommission - accountState.account.directCommissionDebt)).toFixed(2)
                                                            }
                                                        </>
                                                }
                                            </>
                                    }
                                </>
                        }
                    </div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[7].title}</p>
                    <div>{accountState.account.lastWithdrawn === 0 ? 'NA' : new Date(accountState.account.lastWithdrawn * 1000).toLocaleDateString() + ' ' + new Date(accountState.account.lastWithdrawn * 1000).toLocaleTimeString()}</div>
                </CardMobile>
            </CardsSectionMobile>
            <TimerSection className={`timerWithdrawal ${timerWithdrawalClass ? 'animate' : ''}`}>
                <p>{content.dashboard.withdrawal.timerTitle}</p>
                {
                    accountState.account.lastWithdrawn === 0 ? null :
                        <Timer endTs={accountState.account.lastWithdrawn + CONSTANTS.timeStep}
                            callback={timerCallback} />
                }
            </TimerSection>
            <Paragraphs>
                {content.dashboard.withdrawal.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`}
                        className={`paraWithdrawal ${paraWithdrawalClass ? 'animate' : ''}`}>
                        <img src="/assets/images/dashboard/withdrawal/paragraph.svg" alt="..." />
                        <p style={{ fontWeight: 'bold' }}>{paragraph}</p>
                    </Paragraph>
                ))}
            </Paragraphs>
            {
                accountState.account.walletConnected ?
                    <WithdrawButton className={`withdrawButton ${withdrawButtonClass ? 'animate' : ''}`}
                        onClick={withdraw}>
                        <button>{content.dashboard.withdrawal.withdrawButton}</button>
                    </WithdrawButton> :
                    <ConnectWalletButton className={`withdrawButton ${withdrawButtonClass ? 'animate' : ''}`}
                        onClick={_connectWallet}>
                        <button>{content.dashboard.withdrawal.connectWalletButton}</button>
                    </ConnectWalletButton>
            }
        </WithdrawalCardStyled>
    )
}

export default WithdrawalCard
