import { WhyChooseStyled, WhyChooseDesktop, Sections, TopSection, CentralSection, BottomSection, MainImage, Section } from "@/styles/pages/components/home/WhyChoose.styled"
import { WhyChooseMobile, MobileSectionContainer, MobileSection } from "@/styles/pages/components/home/WhyChoose.styled"


const WhyChoose = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/whyChoose/decentralized.svg",
        "/assets/images/home/whyChoose/transparency.svg",
        "/assets/images/home/whyChoose/projectInsurance.svg",
        "/assets/images/home/whyChoose/longevity1.svg",
        "/assets/images/home/whyChoose/aps.svg",
        "/assets/images/home/whyChoose/immutability.svg"
    ]

    return (
        <WhyChooseStyled id="whyChoose">
            {/* Desktop */}
            <WhyChooseDesktop id="whyChooseDesktop">
                <h1>
                    {content.whyChoose.mainHeading[0]}
                    <span>{content.whyChoose.mainHeading[1]}</span>
                    {content.whyChoose.mainHeading[2]}
                </h1>
                <Sections>
                    <TopSection>
                        {/* Decentralized */}
                        <Section id="whySection0">
                            <div>
                                <h2>{content.whyChoose.sections[0].title}</h2>
                                <p>{content.whyChoose.sections[0].desc}</p>
                            </div>
                            <img src={sectionImages[0]} alt="..." />
                        </Section>
                    </TopSection>

                    <CentralSection>
                        <div>
                            {/* Transparency */}
                            <Section id="whySection1">
                                <div>
                                    <h2>{content.whyChoose.sections[1].title}</h2>
                                    <p>{content.whyChoose.sections[1].desc}</p>
                                </div>
                                <img src={sectionImages[1]} alt="..." />
                            </Section>
                            {/* Project Insurance */}
                            <Section id="whySection2">
                                <div>
                                    <h2>{content.whyChoose.sections[2].title}</h2>
                                    <p>{content.whyChoose.sections[2].desc}</p>
                                </div>
                                <img src={sectionImages[2]} alt="..." />
                            </Section>
                        </div>

                        <MainImage>
                            <img src="/assets/images/home/whyChoose/main1.svg" alt="..." id="main1" />
                            <img src="/assets/images/home/whyChoose/main2.svg" alt="..." id="main2" />
                            <img src="/assets/images/home/whyChoose/main3.svg" alt="..." id="main3" />
                            <img src="/assets/images/home/whyChoose/main4.svg" alt="..." id="main4" />
                        </MainImage>

                        <div>
                            {/*  APS */}
                            <Section id="whySection4">
                                <div>
                                    <h2>{content.whyChoose.sections[4].title}</h2>
                                    <p>{content.whyChoose.sections[4].desc}</p>
                                </div>
                                <img src={sectionImages[4]} alt="..." />
                            </Section>
                            {/* Immutability */}
                            <Section id="whySection5">
                                <div>
                                    <h2>{content.whyChoose.sections[5].title}</h2>
                                    <p>{content.whyChoose.sections[5].desc}</p>
                                </div>
                                <img src={sectionImages[5]} alt="..." />
                            </Section>
                        </div>
                    </CentralSection>

                    <BottomSection>
                        {/* Longevity */}
                        <Section id="whySection3">
                            <div>
                                <h2>{content.whyChoose.sections[3].title}</h2>
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
                <h1>
                    {content.whyChoose.mainHeading[0]}
                    <span>{content.whyChoose.mainHeading[1]}</span>
                    {content.whyChoose.mainHeading[2]}
                </h1>
                <MobileSectionContainer>
                    <div>
                        <MobileSection id="whySectionMobile0">
                            <img src={sectionImages[0]} alt="..." />
                            <h2>{content.whyChoose.sections[0].title}</h2>
                            <p>{content.whyChoose.sections[0].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile1">
                            <img src={sectionImages[1]} alt="..." />
                            <h2>{content.whyChoose.sections[1].title}</h2>
                            <p>{content.whyChoose.sections[1].desc}</p>
                        </MobileSection>
                    </div>
                    <div>
                        <MobileSection id="whySectionMobile2">
                            <img src={sectionImages[2]} alt="..." />
                            <h2>{content.whyChoose.sections[2].title}</h2>
                            <p>{content.whyChoose.sections[2].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile3">
                            <div id="longevityImages">
                                <img src={sectionImages[3]} alt="..." />
                                <img src="/assets/images/home/whyChoose/longevity2.svg" alt="..." />
                            </div>
                            <h2>{content.whyChoose.sections[3].title}</h2>
                            <p>{content.whyChoose.sections[3].desc}</p>
                        </MobileSection>
                    </div>
                    <div>
                        <MobileSection id="whySectionMobile4">
                            <img src={sectionImages[4]} alt="..." />
                            <h2>{content.whyChoose.sections[4].title}</h2>
                            <p>{content.whyChoose.sections[4].desc}</p>
                        </MobileSection>
                        <MobileSection id="whySectionMobile5">
                            <img src={sectionImages[5]} alt="..." />
                            <h2>{content.whyChoose.sections[5].title}</h2>
                            <p>{content.whyChoose.sections[5].desc}</p>
                        </MobileSection>
                    </div>
                </MobileSectionContainer>
            </WhyChooseMobile>
        </WhyChooseStyled>
    )
}

export default WhyChoose