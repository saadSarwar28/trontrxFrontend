import { HowInvestStyled, LeftColumn, RightColumn, Section } from "@/styles/pages/components/home/HowInvest.styled"


const HowInvest = ({ content }: any) => {
    const sectionImages = [
        "/assets/images/home/howInvest/download.svg",
        "/assets/images/home/howInvest/getTron.svg",
        "/assets/images/home/howInvest/deposit.svg",
        "/assets/images/home/howInvest/start-earning.svg"
    ]

    const sectionVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1
            }
        },

    }

    return (
        <>
            <HowInvestStyled id="howInvest">
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
                        <h1>
                            {content.howInvest.mainHeading[0]}
                            <span>{content.howInvest.mainHeading[1]}</span>
                        </h1>
                        <div>
                            {content.howInvest.rightSections.map((section: any, index: number) => (
                                <Section key={index}
                                    variants={sectionVariants}
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    viewport={{ once: true }}
                                >
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