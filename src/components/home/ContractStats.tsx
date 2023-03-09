import { ContractStatsStyled, StatsLeft, StatsRight } from "@/styles/pages/components/home/ContractStats.styled"


const ContractStats = ({ data }: any) => {
    return (
        <ContractStatsStyled>
            <StatsLeft>
                <div>
                    <img src={data.contractStats.icons[0]} alt="..." />
                    <h2>Contract Statistics</h2>
                </div>
                <img src={data.contractStats.icons[1]} alt="..." />
            </StatsLeft>
            <StatsRight>
                {data.contractStats.stats.map((item: any, index: any) => (
                    <div key={index}>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                        <img src={data.contractStats.icons[2]} alt="..." />
                    </div>
                ))}
            </StatsRight>
        </ContractStatsStyled>
    )
}

export default ContractStats