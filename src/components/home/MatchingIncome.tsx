import { MatchingIncomeStyled, Paragraphs, LevelsSection, Level } from "@/styles/pages/components/home/MatchingIncome.styled"
import { useState, useEffect } from "react"


const MatchingIncome = ({ content }: any) => {
    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200) {
                if (window.scrollY >= 4900 && window.scrollY <= 5010) {
                    setAnimateClass(true);
                }
            } else {
                if (window.scrollY >= 3000 && window.scrollY <= 3110) {
                    setAnimateClass(true);
                }
            }
        })
    }, [])

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
                    <img src="/assets/images/home/matchingIncome/main.png" className={animateClass ? 'animate' : ''} />
                    {content.matchingIncome.levels.map((level: any, index: any) => (
                        <Level key={index} id={`level${index}`} className={animateClass ? 'animate' : ''}>
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