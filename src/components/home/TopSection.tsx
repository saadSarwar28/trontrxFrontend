import { TopSectionStyled, ContentColumn, Text, Buttons, YellowButton, WhiteButton, SocialIcons, ImageColumn, MainImage } from '@/styles/pages/components/home/TopSection.styled'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router';


const TopSection = ({ content }: any) => {
    const [animate, setAnimate] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true);
        }, 3000)
    }, [])

    const gotoDashboard = () => {
        router.push('/dashboard/deposit')
    }

    const gotoWhitepaper = () => {
        router.push('/whitepaper')
    }

    return (
        <TopSectionStyled id="home" style={{
            backgroundImage: `url("/assets/images/home/topSection/background.png")`
        }}>
            <ContentColumn>
                <div>
                    <Text>
                        <h1>{content.topSection.heading}</h1>
                        <h3>{content.topSection.title}</h3>
                        <p>{content.topSection.desc}</p>
                    </Text>
                    <Buttons className={animate ? 'animate' : ''}>
                        <YellowButton onClick={gotoDashboard}>{content.topSection.buttons[0]}</YellowButton>
                        <WhiteButton onClick={gotoWhitepaper}>{content.topSection.buttons[1]}</WhiteButton>
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
                <MainImage>
                    <img src="/assets/images/home/topSection/mainImage/base-img.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/pillar-img.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/middle-img.svg" alt="..." />

                    {/* Lines */}
                    <img src="/assets/images/home/topSection/mainImage/line-1.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/line-2.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/line-3.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/line-4.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/line-5.svg" alt="..." />

                    <img src="/assets/images/home/topSection/mainImage/rotating-img.svg" alt="..." />
                    <img src="/assets/images/home/topSection/mainImage/E-img.svg" alt="..." />

                    {/* Left */}
                    <img src="/assets/images/home/topSection/main-left.png" alt="..." />

                    {/* Right */}
                    <img src="/assets/images/home/topSection/main-right.png" alt="..." />

                    {/* Moving Right */}
                    <img src="/assets/images/home/topSection/main-left.png" alt="..." />

                    {/* Moving Left */}
                    <img src="/assets/images/home/topSection/mainImage/moving-left.png" alt="..." />
                </MainImage>
            </ImageColumn>
        </TopSectionStyled>
    )
}

export default TopSection
