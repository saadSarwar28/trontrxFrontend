import { MatchingIncomeStyled, Paragraphs, LevelsSection, Level } from "@/styles/pages/components/home/MatchingIncome.styled"


const MatchingIncome = ({ content }: any) => {
    return (
        <MatchingIncomeStyled>
            <h1>
                {content.matchingIncome.mainHeading[0]}
                <span>{content.matchingIncome.mainHeading[1]}</span>
                {content.matchingIncome.mainHeading[2]}
            </h1>
            <Paragraphs>
                {content.matchingIncome.paragraphs.map((para: any, index: any) => (
                    <li key={index}>
                        {para}
                    </li>
                ))}
            </Paragraphs>
            <LevelsSection>
                <div>
                    <img src="/assets/images/home/matchingIncome/main.png" />
                    {content.matchingIncome.levels.map((level: any, index: any) => (
                        <Level key={index} id={`level${index}`}>
                            <p>{level.percentage}</p>
                            <p>{level.level}</p>
                        </Level>
                    ))}
                </div>
            </LevelsSection>
        </MatchingIncomeStyled>
    )
}

export default MatchingIncome