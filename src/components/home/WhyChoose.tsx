import { WhyChooseStyled, Sections, Section } from "@/styles/pages/components/home/WhyChoose.styled"
import Divider from "./Divider"


const WhyChoose = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/whyChoose/decentralized.svg",
        "/assets/images/home/whyChoose/immutability.svg",
        "/assets/images/home/whyChoose/aps.svg",
        "/assets/images/home/whyChoose/longevity1.svg",
        "/assets/images/home/whyChoose/projectInsurance.svg",
        "/assets/images/home/whyChoose/transparency.svg"
    ]

    return (
        <WhyChooseStyled id="whyChoose">
            <h1>
                {content.whyChoose.mainHeading[0]}
                <span>{content.whyChoose.mainHeading[1]}</span>
                {content.whyChoose.mainHeading[2]}
            </h1>
            <Sections>
                <img src="/assets/images/home/whyChoose/main1.svg" alt="..." id="main1" />
                <img src="/assets/images/home/whyChoose/main2.svg" alt="..." id="main2" />
                <img src="/assets/images/home/whyChoose/main3.svg" alt="..." id="main3" />
                <img src="/assets/images/home/whyChoose/main4.svg" alt="..." id="main4" />
                <div>
                    {content.whyChoose.sections.map((section: any, index: number) => (
                        <Section key={index} id={`whySection${index}`}>
                            <div>
                                <h2>{section.title}</h2>
                                <div>
                                    <p>{section.desc}</p>
                                </div>
                            </div>
                            <img src={sectionImages[index]} alt="..." />
                        </Section>
                    ))}
                    <img src="/assets/images/home/whyChoose/longevity2.svg" alt="..." id="longevityImg2" />
                </div>
            </Sections>
            <Divider />
        </WhyChooseStyled>
    )
}

export default WhyChoose