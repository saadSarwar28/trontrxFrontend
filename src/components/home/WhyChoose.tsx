import { WhyChooseStyled, WhyChooseDesktop, Sections, TopSection, CentralSection, BottomSection, MainImage, Section } from "@/styles/pages/components/home/WhyChoose.styled"
import { WhyChooseMobile, MobileSectionContainer, MobileSection } from "@/styles/pages/components/home/WhyChoose.styled"
import { useEffect, useState } from "react"
import MovingLines from "./MovingLines"


const WhyChoose = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/whyChoose/decentralized.svg",
        "/assets/images/home/whyChoose/transparency.svg",
        "/assets/images/home/whyChoose/projectInsurance.svg",
        "/assets/images/home/whyChoose/longevity1.svg",
        "/assets/images/home/whyChoose/aps.svg",
        "/assets/images/home/whyChoose/immutability.svg"
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
    const [whyHeadingClass, setWhyHeadingClass] = useState(false);
    const [whyMainImageClass, setWhyMainImageClass] = useState(false);
    // sections desktop
    const [decentralizedClass, setDecentralizedClass] = useState(false);
    const [transparecyClass, setTransparecyClass] = useState(false);
    const [projectInsuranceClass, setProjectInsuranceClass] = useState(false);
    const [apsClass, setApsClass] = useState(false);
    const [immutabilityClass, setImmutabilityClass] = useState(false);
    const [longevityClass, setLongevityClass] = useState(false);
    // sections mobile
    const [decentralizedMobileClass, setDecentralizedMobileClass] = useState(false);
    const [transparecyMobileClass, setTransparecyMobileClass] = useState(false);
    const [projectInsuranceMobileClass, setProjectInsuranceMobileClass] = useState(false);
    const [apsMobileClass, setApsMobileClass] = useState(false);
    const [immutabilityMobileClass, setImmutabilityMobileClass] = useState(false);
    const [longevityMobileClass, setLongevityMobileClass] = useState(false);

    useEffect(() => {
        const headingDesktop = document.querySelectorAll('.whyHeadingDesktop');
        const whyMainImage = document.querySelectorAll('.whyMainImage');
        const headingMobile = document.querySelectorAll('.whyHeadingMobile');
        // sections desktop
        const decentralized = document.querySelectorAll('.decentralized');
        const transparecy = document.querySelectorAll('.transparecy');
        const projectInsurance = document.querySelectorAll('.projectInsurance');
        const aps = document.querySelectorAll('.aps');
        const immutability = document.querySelectorAll('.immutability');
        const longevity = document.querySelectorAll('.longevity');
        // sections mobile
        const decentralizedMobile = document.querySelectorAll('.decentralizedMobile');
        const transparecyMobile = document.querySelectorAll('.transparecyMobile');
        const projectInsuranceMobile = document.querySelectorAll('.projectInsuranceMobile');
        const apsMobile = document.querySelectorAll('.apsMobile');
        const immutabilityMobile = document.querySelectorAll('.immutabilityMobile');
        const longevityMobile = document.querySelectorAll('.longevityMobile');

        document.addEventListener('scroll', () => {
            if (!whyHeadingClass) {
                if (window.innerWidth > 1200) {
                    animate(setWhyHeadingClass, headingDesktop[0]);
                } else {
                    animate(setWhyHeadingClass, headingMobile[0]);
                }
            }
            if (!whyMainImageClass) {
                if (window.innerWidth > 1200) {
                    animate(setWhyMainImageClass, whyMainImage[0]);
                }
            }

            // sections 
            if (!decentralizedClass) {
                if (window.innerWidth > 1200) {
                    animate(setDecentralizedClass, decentralized[0]);
                } else {
                    animate(setDecentralizedMobileClass, decentralizedMobile[0])
                }
            }
            if (!transparecyClass) {
                if (window.innerWidth > 1200) {
                    animate(setTransparecyClass, transparecy[0]);
                } else {
                    animate(setTransparecyMobileClass, transparecyMobile[0]);
                }
            }
            if (!projectInsuranceClass) {
                if (window.innerWidth > 1200) {
                    animate(setProjectInsuranceClass, projectInsurance[0]);
                } else {
                    animate(setProjectInsuranceMobileClass, projectInsuranceMobile[0]);
                }
            }
            if (!apsClass) {
                if (window.innerWidth > 1200) {
                    animate(setApsClass, aps[0]);
                } else {
                    animate(setApsMobileClass, apsMobile[0]);
                }
            }
            if (!immutabilityClass) {
                if (window.innerWidth > 1200) {
                    animate(setImmutabilityClass, immutability[0]);
                } else {
                    animate(setImmutabilityMobileClass, immutabilityMobile[0]);
                }
            }
            if (!longevityClass) {
                if (window.innerWidth > 1200) {
                    animate(setLongevityClass, longevity[0]);
                } else {
                    animate(setLongevityMobileClass, longevityMobile[0]);
                }
            }
        })
    }, [])


    return (
        <WhyChooseStyled id="whyChoose">
            {/* Desktop */}
            <WhyChooseDesktop id="whyChooseDesktop">
                <h1 className={`whyHeadingDesktop ${whyHeadingClass ? 'animate' : ''}`}>
                    {content.whyChoose.mainHeading[0]}
                    <span>{content.whyChoose.mainHeading[1]}</span>
                    {content.whyChoose.mainHeading[2]}
                </h1>
                <Sections>
                    <TopSection>
                        {/* Decentralized */}
                        <Section id="whySection0" className={`decentralized ${decentralizedClass ? 'animate' : ''}`}>
                            <div>
                                <h2>
                                    {content.whyChoose.sections[0].title}
                                    <MovingLines />
                                </h2>
                                <p>{content.whyChoose.sections[0].desc}</p>
                            </div>
                            <img src={sectionImages[0]} alt="..." />
                        </Section>
                    </TopSection>
                    <CentralSection>
                        <div>
                            {/* Transparency */}
                            <Section id="whySection1" className={`transparecy ${transparecyClass ? 'animate' : ''}`}>
                                <div>
                                    <h2>
                                        {content.whyChoose.sections[1].title}
                                        <MovingLines />
                                    </h2>
                                    <p>{content.whyChoose.sections[1].desc}</p>
                                </div>
                                <img src={sectionImages[1]} alt="..." />
                            </Section>
                            {/* Project Insurance */}
                            <Section id="whySection2" className={`projectInsurance ${projectInsuranceClass ? 'animate' : ''}`}>
                                <div>
                                    <h2>
                                        {content.whyChoose.sections[2].title}
                                        <MovingLines />
                                    </h2>
                                    <p>{content.whyChoose.sections[2].desc}</p>
                                </div>
                                <img src={sectionImages[2]} alt="..." />
                            </Section>
                        </div>

                        <MainImage className={`whyMainImage ${whyMainImageClass ? 'animate' : ''}`}>
                            <img src="/assets/images/home/whyChoose/main1.svg" alt="..." id="main1" />
                            <img src="/assets/images/home/whyChoose/main2.svg" alt="..." id="main2" />
                            <img src="/assets/images/home/whyChoose/main3.svg" alt="..." id="main3" />
                            <img src="/assets/images/home/whyChoose/main4.svg" alt="..." id="main4" />
                        </MainImage>

                        <div>
                            {/*  APS */}
                            <Section id="whySection4" className={`aps ${apsClass ? 'animate' : ''}`}>
                                <div>
                                    <h2>
                                        {content.whyChoose.sections[4].title}
                                        <MovingLines />
                                    </h2>
                                    <p>{content.whyChoose.sections[4].desc}</p>
                                </div>
                                <img src={sectionImages[4]} alt="..." />
                            </Section>
                            {/* Immutability */}
                            <Section id="whySection5" className={`immutability ${immutabilityClass ? 'animate' : ''}`}>
                                <div>
                                    <h2>
                                        {content.whyChoose.sections[5].title}
                                        <MovingLines />
                                    </h2>
                                    <p>{content.whyChoose.sections[5].desc}</p>
                                </div>
                                <img src={sectionImages[5]} alt="..." />
                            </Section>
                        </div>
                    </CentralSection>
                    <BottomSection>
                        {/* Longevity */}
                        <Section id="whySection3" className={`longevity ${longevityClass ? 'animate' : ''}`}>
                            <div>
                                <h2>
                                    {content.whyChoose.sections[3].title}
                                    <MovingLines />
                                </h2>
                                <p>{content.whyChoose.sections[3].desc}</p>
                            </div>
                            <div id="longevityImages">
                                <img src={sectionImages[3]} alt="..." />
                                <img src="/assets/images/home/whyChoose/longevity2.svg" alt="..." />
                            </div>
                        </Section>
                    </BottomSection>
                </Sections>
            </WhyChooseDesktop>

            {/* Mobile */}
            <WhyChooseMobile id="whyChooseMobile">
                <h1 className={`whyHeadingMobile ${whyHeadingClass ? 'animate' : ''}`}>
                    {content.whyChoose.mainHeading[0]}
                    <span>{content.whyChoose.mainHeading[1]}</span>
                    {content.whyChoose.mainHeading[2]}
                </h1>
                <MobileSectionContainer>
                    <div>
                        <MobileSection id="whySectionMobile0" className={`decentralizedMobile ${decentralizedMobileClass ? 'animate' : ''}`}>
                            <img src={sectionImages[0]} alt="..." />
                            <h2>
                                {content.whyChoose.sections[0].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[0].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile1" className={`transparecyMobile ${transparecyMobileClass ? 'animate' : ''}`}>
                            <img src={sectionImages[1]} alt="..." />
                            <h2>
                                {content.whyChoose.sections[1].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[1].desc}</p>
                        </MobileSection>
                    </div>
                    <div>
                        <MobileSection id="whySectionMobile2" className={`projectInsuranceMobile ${projectInsuranceMobileClass ? 'animate' : ''}`}>
                            <img src={sectionImages[2]} alt="..." />
                            <h2>
                                {content.whyChoose.sections[2].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[2].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile3" className={`longevityMobile ${longevityMobileClass ? 'animate' : ''}`}>
                            <div id="longevityImages">
                                <img src={sectionImages[3]} alt="..." />
                                <img src="/assets/images/home/whyChoose/longevity2.svg" alt="..." />
                            </div>
                            <h2>
                                {content.whyChoose.sections[3].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[3].desc}</p>
                        </MobileSection>
                    </div>
                    <div>
                        <MobileSection id="whySectionMobile4" className={`apsMobile ${apsMobileClass ? 'animate' : ''}`}>
                            <img src={sectionImages[4]} alt="..." />
                            <h2>
                                {content.whyChoose.sections[4].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[4].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile5" className={`immutabilityMobile ${immutabilityMobileClass ? 'animate' : ''}`}>
                            <img src={sectionImages[5]} alt="..." />
                            <h2>
                                {content.whyChoose.sections[5].title}
                                <MovingLines />
                            </h2>
                            <p>{content.whyChoose.sections[5].desc}</p>
                        </MobileSection>
                    </div>
                </MobileSectionContainer>
            </WhyChooseMobile>
        </WhyChooseStyled>
    )
}

export default WhyChoose