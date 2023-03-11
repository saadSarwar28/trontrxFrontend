import { TopSectionStyled, ContentColumn, Text, Buttons, YellowButton, WhiteButton, SocialIcons, ImageColumn } from '@/styles/pages/components/home/TopSection.styled'



const TopSection = ({ content }: any) => {
    return (
        <TopSectionStyled style={{
            backgroundImage: `url("/assets/images/home/topSection/background.png")`
        }}>
            <ContentColumn>
                <div>
                    <Text>
                        <h1>{content.topSection.heading}</h1>
                        <h3>{content.topSection.title}</h3>
                        <p>{content.topSection.desc}</p>
                    </Text>
                    <Buttons>
                        <YellowButton>{content.topSection.buttons[0]}</YellowButton>
                        <WhiteButton>{content.topSection.buttons[1]}</WhiteButton>
                    </Buttons>
                    <SocialIcons>
                        <div>
                            <img src="/assets/images/home/topSection/telegram-icon.svg" alt="..." />
                        </div>
                        <div>
                            <img src="/assets/images/home/topSection/youtube-icon.svg" alt="..." />
                        </div>
                    </SocialIcons>
                </div>
            </ContentColumn>
            <ImageColumn>
                <div>
                    <img src="/assets/images/home/topSection/main-left.png" alt="..." />
                    <img src="/assets/images/home/topSection/main.png" alt="..." />
                    <img src="/assets/images/home/topSection/main-right.png" alt="..." />
                </div>
            </ImageColumn>
        </TopSectionStyled>
    )
}

export default TopSection