import React from 'react';
import {
    ContractStatsCardStyled,
    ContractStatsButton,
    ContractAddressButton,
    ContractCardsContainer,
    ContractCard
} from "@/styles/pages/components/dashboard/contractStats/ContractStatsCard.styled"
import {CONTENT as content} from '@/content/content';
import {CONSTANTS} from '../../../utils/constants'
import {useRouter} from 'next/router';
import Timer from '@/components/dashboard/contractStats/Timer';

interface IContractStatsCard {
    totalDeposited: number,
    totalWithdrawn: number,
    contractInsurance: number,
}

const ContractStatsCard: React.FC<IContractStatsCard> = ({totalDeposited, totalWithdrawn, contractInsurance}) => {
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

    const handleClick = () => {
        window.open('https://tronscan.org/#/contract/TA6K7bdkY5hy4UVmFuFNCnK5699doLteqN')
    }

    return (
        <ContractStatsCardStyled>
            <ContractStatsButton type="button">{content.dashboard.contractStats.mainHeading}</ContractStatsButton>
            <ContractAddressButton type="button" onClick={handleClick}>
                <span>{content.dashboard.contractStats.subHeading}</span>
                <span style={{textTransform: 'none'}}>{CONSTANTS.contractAddress}</span>
            </ContractAddressButton>
            <ContractAddressButton type="button">
                <span>{content.dashboard.contractStats.subHeadingRunningSince}</span>
                <span style={{textTransform: 'none'}}><Timer/></span>
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
                    <p>{contractInsurance.toFixed(2)}</p>
                    <div>{content.dashboard.contractStats.stats[3].desc}</div>
                </ContractCard>
            </ContractCardsContainer>
        </ContractStatsCardStyled>
    )
}

export default ContractStatsCard
