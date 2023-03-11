import { HowInvestStyled, LeftColumn, RightColumn, Section } from "@/styles/pages/components/home/HowInvest.styled"
import { HR } from "@/styles/pages/components/home/WhyChoose.styled"


const HowInvest = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/howInvest/download.svg",
        "/assets/images/home/howInvest/getTron.svg",
        "/assets/images/home/howInvest/deposit.svg",
        "/assets/images/home/howInvest/start-earning.svg"
    ]

    return (
        <>
            <HowInvestStyled>
                <h1>
                    {content.howInvest.mainHeading[0]}
                    <span>{content.howInvest.mainHeading[1]}</span>
                </h1>
                <div>
                    <LeftColumn>
                        <img src="/assets/images/home/howInvest/greyImage.png" />
                        <img src="/assets/images/home/howInvest/videoImage.png" />
                    </LeftColumn>
                    <RightColumn>
                        <div>
                            {content.howInvest.rightSections.map((section: any, index: number) => (
                                <Section key={index}>
                                    <h2>{section.title}</h2>
                                    <div>
                                        <img src={sectionImages[index]} alt="..." />
                                        <p>{section.desc}</p>
                                    </div>
                                </Section>
                            ))}
                        </div>
                    </RightColumn>
                </div>
            </HowInvestStyled>
            <HR>
                <img src="/assets/images/home/lines.svg" alt="..." />
                <img src="/assets/images/home/diamond.svg" alt="..." />
            </HR>
        </>
    )
}

export default HowInvest