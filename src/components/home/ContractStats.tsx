import { ContractStatsStyled, StatsLeft, StatsRight, Section } from "@/styles/pages/components/home/ContractStats.styled"


const ContractStats = ({ content }: any) => {
    return (
        <ContractStatsStyled>
            <StatsLeft>
                <div>
                    <img src="/assets/images/home/contractStats/arrows-icon.svg" alt="..." />
                    <h2>Contract Statistics</h2>
                </div>
                <img src="/assets/images/home/contractStats/right-arrow-icon.svg" alt="..." />
            </StatsLeft>
            <StatsRight>
                <div>
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
                <div>
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