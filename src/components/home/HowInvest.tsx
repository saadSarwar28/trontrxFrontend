import { HowInvestStyled, HowInvestHeading, LeftColumn, RightColumn, HeadingMobile, Section } from "@/styles/pages/components/home/HowInvest.styled"
import { useState, useEffect } from "react"


const HowInvest = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/howInvest/download.svg",
        "/assets/images/home/howInvest/getTron.svg",
        "/assets/images/home/howInvest/deposit.svg",
        "/assets/images/home/howInvest/start-earning.svg"
    ]

    const [animateClass, setAnimateClass] = useState(false);
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.innerWidth <= 1200) {
                if (window.scrollY >= 900 && window.scrollY <= 1010) {
                    setAnimateClass(true);
                } else if (window.scrollY < 900) {
                    setAnimateClass(false);
                }
            } else {
                if (window.scrollY >= 300 && window.scrollY <= 410) {
                    setAnimateClass(true);
                } else if (window.scrollY < 300) {
                    setAnimateClass(false);
                }
            }
        })
    }, [])

    return (
        <>
            <HowInvestStyled id="howInvest">
                <HowInvestHeading className={animateClass ? 'animate' : ''}>
                    {content.howInvest.mainHeading[0]}
                    <span>{content.howInvest.mainHeading[1]}</span>
                </HowInvestHeading>
                <div>
                    <LeftColumn>
                        <img src="/assets/images/home/howInvest/greyImage.png" />
                        <iframe height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    </LeftColumn>
                    <RightColumn>
                        <HeadingMobile className={animateClass ? 'animate' : ''}>
                            {content.howInvest.mainHeading[0]}
                            <span>{content.howInvest.mainHeading[1]}</span>
                        </HeadingMobile>
                        <div>
                            {content.howInvest.rightSections.map((section: any, index: number) => (
                                <Section key={index} id={`investSection${index}`} className={animateClass ? 'animate' : ''}>
                                    <h2>{section.title}</h2>
                                    <div>
                                        <img src={sectionImages[index]} alt="..." id={`investImg${index}`} />
                                        <p>{section.desc}</p>
                                    </div>
                                </Section>
                            ))}
                        </div>
                    </RightColumn>
                </div>
            </HowInvestStyled>
        </>
    )
}

export default HowInvest