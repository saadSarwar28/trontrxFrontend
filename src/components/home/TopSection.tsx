import { TopSectionStyled, ContentColumn, Text, Buttons, YellowButton, WhiteButton, SocialIcons, ImageColumn } from '@/styles/pages/components/home/TopSection.styled'


const TopSection = ({ data }: any) => {
    return (
        <TopSectionStyled style={{
            backgroundImage: `url(${data.topSection.bgImage})`
        }}>
            <ContentColumn>
                <div>
                    <Text>
                        <h1>{data.topSection.heading}</h1>
                        <h3>{data.topSection.title}</h3>
                        <p>{data.topSection.desc}</p>
                    </Text>
                    <Buttons>
                        <YellowButton>contract statistics</YellowButton>
                        <WhiteButton>whitepaper</WhiteButton>
                    </Buttons>
                    <SocialIcons>
                        <div>
                            <img src={data.topSection.socialIcons[0]} alt="..." />
                        </div>
                        <div>
                            <img src={data.topSection.socialIcons[1]} alt="..." />
                        </div>
                    </SocialIcons>
                </div>
            </ContentColumn>
            <ImageColumn>
                <div>
                    <img src={data.topSection.mainLeft} alt="..." />
                    <img src={data.topSection.mainImage} alt="..." />
                    <img src={data.topSection.mainRight} alt="..." />
                </div>
            </ImageColumn>
        </TopSectionStyled>
    )
}

export default TopSection