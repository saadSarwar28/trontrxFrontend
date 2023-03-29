import { HowInvestStyled, HowInvestHeading, LeftColumn, RightColumn, HeadingMobile, Section } from "@/styles/pages/components/home/HowInvest.styled"
import { useState, useEffect } from "react"
import MovingLines from "./MovingLines"


const HowInvest = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/howInvest/download.svg",
        "/assets/images/home/howInvest/getTron.svg",
        "/assets/images/home/howInvest/deposit.svg",
        "/assets/images/home/howInvest/start-earning.svg"
    ]

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 100) {
            setAnimationClass(false);
        }
    }
    const [headingClass, setHeadingClass] = useState(false);
    const [section0Class, setSection0Class] = useState(false);
    const [section1Class, setSection1Class] = useState(false);
    const [section2Class, setSection2Class] = useState(false);
    const [section3Class, setSection3Class] = useState(false);
    useEffect(() => {
        const headingDesktop = document.querySelectorAll('.investHeadingDesktop');
        const headingMobile = document.querySelectorAll('.investHeadingMobile');
        const section0 = document.querySelectorAll('.investSection0');
        const section1 = document.querySelectorAll('.investSection1');
        const section2 = document.querySelectorAll('.investSection2');
        const section3 = document.querySelectorAll('.investSection3');

        document.addEventListener('scroll', () => {
            if (!headingClass) {
                if (window.innerWidth > 1200) {
                    animate(setHeadingClass, headingDesktop[0]);
                } else {
                    animate(setHeadingClass, headingMobile[0]);
                }
            }
            if (!section0Class) {
                animate(setSection0Class, section0[0]);
            }
            if (!section1Class) {
                animate(setSection1Class, section1[0]);
            }
            if (!section2Class) {
                animate(setSection2Class, section2[0]);
            }
            if (!section3Class) {
                animate(setSection3Class, section3[0]);
            }
        })
    }, [])


    return (
        <>
            <HowInvestStyled id="howInvest">
                <HowInvestHeading className={`investHeadingDesktop ${headingClass ? 'animate' : ''}`}>
                    {content.howInvest.mainHeading[0]}
                    <span>{content.howInvest.mainHeading[1]}</span>
                </HowInvestHeading>
                <div>
                    <LeftColumn>
                        <img src="/assets/images/home/howInvest/greyImage.png" />
                        <iframe height="463" src="https://www.youtube.com/embed/ebnQsTk9s-s"></iframe>
                    </LeftColumn>
                    <RightColumn>
                        <HeadingMobile className={`investHeadingMobile ${headingClass ? 'animate' : ''}`}>
                            {content.howInvest.mainHeading[0]}
                            <span>{content.howInvest.mainHeading[1]}</span>
                        </HeadingMobile>
                        <div>
                            <Section id="investSection0" className={`investSection0 ${section0Class ? 'animate' : ''}`}>
                                <h2>
                                    {content.howInvest.rightSections[0].title}
                                    <MovingLines />
                                </h2>
                                <div>
                                    <img src={sectionImages[0]} alt="..." id={`investImg0`} />
                                    <p>{content.howInvest.rightSections[0].desc}</p>
                                </div>
                            </Section>
                            <Section id="investSection1" className={`investSection1 ${section1Class ? 'animate' : ''}`}>
                                <h2>
                                    {content.howInvest.rightSections[1].title}
                                    <MovingLines />
                                </h2>
                                <div>
                                    <img src={sectionImages[1]} alt="..." id={`investImg1`} />
                                    <p>{content.howInvest.rightSections[1].desc}</p>
                                </div>
                            </Section>
                            <Section id="investSection2" className={`investSection2 ${section2Class ? 'animate' : ''}`}>
                                <h2>
                                    {content.howInvest.rightSections[2].title}
                                    <MovingLines />
                                </h2>
                                <div>
                                    <img src={sectionImages[2]} alt="..." id={`investImg2`} />
                                    <p>{content.howInvest.rightSections[2].desc}</p>
                                </div>
                            </Section>
                            <Section id="investSection3" className={`investSection3 ${section3Class ? 'animate' : ''}`}>
                                <h2>
                                    {content.howInvest.rightSections[3].title}
                                    <MovingLines />
                                </h2>
                                <div>
                                    <img src={sectionImages[3]} alt="..." id={`investImg3`} />
                                    <p>{content.howInvest.rightSections[3].desc}</p>
                                </div>
                            </Section>
                        </div>
                    </RightColumn>
                </div>
            </HowInvestStyled>
        </>
    )
}

export default HowInvest