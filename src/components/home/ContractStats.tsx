import { ContractStatsStyled, StatsLeft, StatsRight } from "@/styles/pages/components/home/ContractStats.styled"


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
                {content.contractStats.stats.map((item: any, index: any) => (
                    <div key={index}>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <img src="/assets/images/home/contractStats/line-icon.svg" alt="..." />
                    </div>
                ))}
            </StatsRight>
        </ContractStatsStyled>
    )
}

export default ContractStats