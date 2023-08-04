import { ContractStatsStyled, StatsLeft, StatsRight, Section } from "@/styles/pages/components/home/ContractStats.styled"
import { useEffect, useState } from "react"


const ContractStats = () => {

    // const animate = (setAnimationClass: any, element: any) => {
    //     const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
    //     // console.log(elementBottomPosition, 'stats');
    //     if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
    //         // console.log('animated');
    //         setAnimationClass(true);
    //     }
    //     if (elementBottomPosition > 50) {
    //         setAnimationClass(false);
    //     }
    // }
    const [headingClass, setHeadingClass] = useState(false);
    const [statsClass, setStatsClass] = useState(false);
    useEffect(() => {
        const heading = document.querySelectorAll('.contStatsHeading');
        const stats = document.querySelectorAll('.stats');
        document.addEventListener('scroll', () => {
            if (!headingClass) {
                // animate(setHeadingClass, heading[0]);
            }
            if (!statsClass) {
                // animate(setStatsClass, stats[0]);
                // animate(setStatsClass, stats[1]);
            }
        })
    }, [])

    return (
        <ContractStatsStyled>
            <StatsLeft>
                <div>
                    <img src="/assets/images/home/contractStats/arrows-icon.svg" alt="..." />
                    <h2>Buy Trx</h2>
                </div>
                <img src="/assets/images/home/contractStats/right-arrow-icon.svg" alt="..." />
            </StatsLeft>
            <StatsRight>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder='none'
                    style={{ border: 'none' }}
                    allow="camera"
                    src="https://widget.changelly.com?from=*&to=*&amount=100&address=&fromDefault=usd&toDefault=trx&merchant_id=WRDLy9l8o7fykC8I&payment_id=&v=3&type=no-rev-share&color=f9861b&headerId=1&logo=hide&buyButtonTextId=1"
                >Can't load widget
                </iframe>
                {/* <div className={`stats ${statsClass ? 'animate' : ''}`}>
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
                </div> */}
            </StatsRight>
        </ContractStatsStyled>
    )
}

export default ContractStats