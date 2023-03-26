import { MatchingIncomeStyled, Paragraphs, LevelsSection, Level } from "@/styles/pages/components/home/MatchingIncome.styled"
import { useState, useEffect } from "react"


const MatchingIncome = ({ content }: any) => {
    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200) {
                if (window.scrollY >= 3200 && window.scrollY <= 3310) {
                    setAnimateClass(true);
                } else if (window.scrollY < 3200) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth <= 992) {
                if (window.scrollY >= 4400 && window.scrollY <= 4510) {
                    setAnimateClass(true);
                } else if (window.scrollY < 4400) {
                    setAnimateClass(false);
                }
            }

            if (window.innerWidth > 1200) {
                if (window.scrollY >= 2700 && window.scrollY <= 2810) {
                    setAnimateClass(true);
                } else if (window.scrollY < 2700) {
                    setAnimateClass(false);
                }
            }
        })
    }, [])

    return (
        <MatchingIncomeStyled>
            <h1 className={animateClass ? 'animate' : ''}>
                {content.matchingIncome.mainHeading[0]}
                <span>{content.matchingIncome.mainHeading[1]}</span>
                {content.matchingIncome.mainHeading[2]}
            </h1>
            <Paragraphs>
                {content.matchingIncome.paragraphs.map((para: any, index: any) => (
                    <li key={index} className={animateClass ? 'animate' : ''}>
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