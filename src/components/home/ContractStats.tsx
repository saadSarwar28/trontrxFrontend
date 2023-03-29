import { ContractStatsStyled, StatsLeft, StatsRight, Section } from "@/styles/pages/components/home/ContractStats.styled"
import { useEffect, useState } from "react"


const ContractStats = ({ content }: any) => {

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        // console.log(elementBottomPosition, 'stats');
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            // console.log('animated');
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [headingClass, setHeadingClass] = useState(false);
    const [statsClass, setStatsClass] = useState(false);
    useEffect(() => {
        const heading = document.querySelectorAll('.contStatsHeading');
        const stats = document.querySelectorAll('.stats');
        document.addEventListener('scroll', () => {
            if (!headingClass) {
                animate(setHeadingClass, heading[0]);
            }
            if (!statsClass) {
                animate(setStatsClass, stats[0]);
                animate(setStatsClass, stats[1]);
            }
        })
    }, [])

    return (
        <ContractStatsStyled>
            <StatsLeft className={`contStatsHeading ${headingClass ? 'animate' : ''}`}>
                <div>
                    <img src="/assets/images/home/contractStats/arrows-icon.svg" alt="..." />
                    <h2>Contract Statistics</h2>
                </div>
                <img src="/assets/images/home/contractStats/right-arrow-icon.svg" alt="..." />
            </StatsLeft>
            <StatsRight>
                <div className={`stats ${statsClass ? 'animate' : ''}`}>
                    <Section>
                        <div>
                            <h2>{content.contractStats.stats[0].title}</h2>
                            <p>{content.contractStats.stats[0].desc}</p>
                        </div>
                        <img src="/assets/images/home/contractStats/line-icon.svg" alt="..." />
                    </Section>
                    <Section>
                        <div>
                            <h2>{content.contractStats.stats[1].title}</h2>
                            <p>{content.contractStats.stats[1].desc}</p>
                        </div>
                        <img src="/assets/images/home/contractStats/line-icon.svg" alt="..." />
                    </Section>
                </div>
                <div className={`stats ${statsClass ? 'animate' : ''}`}>
                    <Section>
                        <div>
                            <h2>{content.contractStats.stats[2].title}</h2>
                            <p>{content.contractStats.stats[2].desc}</p>
                        </div>
                        <img src="/assets/images/home/contractStats/line-icon.svg" alt="..." id="line2" />
                    </Section>
                    <Section>
                        <div>
                            <h2>{content.contractStats.stats[3].title}</h2>
                            <p>{content.contractStats.stats[3].desc}</p>
                        </div>
                    </Section>
                </div>
            </StatsRight>
        </ContractStatsStyled>
    )
}

export default ContractStats