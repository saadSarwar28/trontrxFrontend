import { ContractStatsCardStyled, ContractStatsButton, ContractAddressButton, ContractCardsContainer, ContractCard } from "@/styles/pages/components/dashboard/contractStats/ContractStatsCard.styled"
import { useEffect, useState } from "react"
import { CONTENT as content } from '@/content/content';
import { CONSTANTS } from '../../../utils/constants'


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

    return (
        <ContractStatsCardStyled>
            <ContractStatsButton type="button">{content.dashboard.contractStats.mainHeading}</ContractStatsButton>
            <ContractAddressButton type="button">
                <span>{content.dashboard.contractStats.subHeading}</span>
                <span>{CONSTANTS.contractAddress}</span>
            </ContractAddressButton>
            <ContractCardsContainer>
                <ContractCard>
                    <p>{content.dashboard.contractStats.stats[1].title}</p>
                    <div>{content.dashboard.contractStats.stats[0].desc}</div>
                </ContractCard>
                <ContractCard>
                    <p>{content.dashboard.contractStats.stats[2].title}</p>
                    <div>{content.dashboard.contractStats.stats[1].desc}</div>
                </ContractCard>
                <ContractCard>
                    <p>{content.dashboard.contractStats.stats[3].title}</p>
                    <div>{content.dashboard.contractStats.stats[2].desc}</div>
                </ContractCard>
            </ContractCardsContainer>
        </ContractStatsCardStyled>
    )
}

export default ContractStatsCard
