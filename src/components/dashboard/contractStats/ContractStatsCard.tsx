import { ContractStatsCardStyled, ContractStatsButton, ContractAddressButton, ContractCardsContainer, ContractCard } from "@/styles/pages/components/dashboard/contractStats/ContractStatsCard.styled"
import { useEffect, useState } from "react"
import { CONTENT as content } from '@/content/content';
import { CONSTANTS } from '../../../utils/constants'
import {useDispatch, useSelector} from 'react-redux';
import {getUserAccountDetails, selectUserAccount} from '@/store/accountSlice';
import {ethers} from 'ethers';


const ContractStatsCard = () => {
    // const animate = (setAnimationClass: any, element: any) => {
    //     const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
    //     if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
    //         setAnimationClass(true);
    //     }
    //     if (elementBottomPosition > 50) {
    //         setAnimationClass(false);
    //     }
    // }
    // const [contractStatsButtonClass, setContractStatsButtonClass] = useState(false);
    // // cards
    // const [contractStatsCard1Class, setContractStatsCard1Class] = useState(false);
    // const [contractStatsCard2Class, setContractStatsCard2Class] = useState(false);
    // const [contractStatsCard3Class, setContractStatsCard3Class] = useState(false);

    // useEffect(() => {
    //     const contractStatsButton = document.querySelectorAll('.contractStatsButton');
    //     // cards
    //     const contractStatsCard1 = document.querySelectorAll('.contractStatsCard1');
    //     const contractStatsCard2 = document.querySelectorAll('.contractStatsCard2');
    //     const contractStatsCard3 = document.querySelectorAll('.contractStatsCard3');

    //     document.addEventListener('scroll', () => {
    //         if (!contractStatsButtonClass) {
    //             animate(setContractStatsButtonClass, contractStatsButton[0]);
    //         }
    //         if (!contractStatsCard1Class) {
    //             animate(setContractStatsCard1Class, contractStatsCard1[0]);
    //         }
    //         if (!contractStatsCard2Class) {
    //             animate(setContractStatsCard2Class, contractStatsCard2[0]);
    //         }
    //         if (!contractStatsCard3Class) {
    //             animate(setContractStatsCard3Class, contractStatsCard3[0]);
    //         }
    //     })
    // }, [])

    const account = useSelector(selectUserAccount)
    const dispatch = useDispatch()
    const [totalDeposited, setTotalDeposited] = useState(0)
    const [totalWithdrawn, setTotalWithdrawn] = useState(0)

    const connectWallet = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            // @ts-ignore
            await window.tronLink.request({ method: 'tron_requestAccounts' });
            // @ts-ignore
            const { name, base58 } = await window.tronWeb.defaultAddress;
            // @ts-ignore
            dispatch(getUserAccountDetails(base58))
        }
    }
    useEffect(() => {
        if (!account.account.walletConnected) {
            connectWallet()
        }
    }, [])

    const fetchContractStats = async () => {
        // @ts-ignore
        let contract = await window.tronWeb.contract().at(CONSTANTS.contractAddress);
        const totalInvestment = await contract.totalInvested().call();
        setTotalDeposited(Number(ethers.formatUnits(totalInvestment.toString(), 6)))
        const totalWithdrawn = await contract.totalWithdrawn().call();
        setTotalWithdrawn(Number(ethers.formatUnits(totalWithdrawn.toString(), 6)))
    }

    useEffect(() => {
        // @ts-ignore
        if (window.tronWeb && totalWithdrawn === 0 && totalDeposited === 0) {
            fetchContractStats()
        }
    }, [])


    return (
        <ContractStatsCardStyled>
            <ContractStatsButton type="button">{content.dashboard.contractStats.mainHeading}</ContractStatsButton>
            <ContractAddressButton type="button">
                <span>{content.dashboard.contractStats.subHeading}</span>
                <span>{CONSTANTS.contractAddress}</span>
            </ContractAddressButton>
            <ContractCardsContainer>
                <ContractCard>
                    <p>{totalDeposited.toFixed(2)}</p>
                    <div>{content.dashboard.contractStats.stats[1].desc}</div>
                </ContractCard>
                <ContractCard>
                    <p>{totalWithdrawn.toFixed(2)}</p>
                    <div>{content.dashboard.contractStats.stats[2].desc}</div>
                </ContractCard>
                <ContractCard>
                    <p>{account.account.projectInsurance.toFixed(2)}</p>
                    <div>{content.dashboard.contractStats.stats[3].desc}</div>
                </ContractCard>
            </ContractCardsContainer>
        </ContractStatsCardStyled>
    )
}

export default ContractStatsCard
