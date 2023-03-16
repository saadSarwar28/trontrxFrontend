import { FooterStyled, LogoSectionFooter, Links, SocialLinks } from "@/styles/pages/components/home/Footer.styled"
import content from '../../content/content.json'
import FooterNavItem from "../FooterNavItem"


const Footer = () => {
    return (
        <FooterStyled>
            <LogoSectionFooter>
                <div>
                    <img src="/assets/images/navbar/logo.svg" alt="..." />
                </div>
                <div>
                    <h1>{content.footer.footerTitle}</h1>
                    <p>{content.footer.footerDesc}</p>
                </div>
            </LogoSectionFooter>
            <Links>
                <div>
                    <FooterNavItem text={content.footer.footerLinks[0]} link={`#${content.footer.footerLinks[0].toLowerCase()}`} />
                    <FooterNavItem text={content.footer.footerLinks[1]} link={`#${content.footer.footerLinks[1].toLowerCase()}`} />
                    <FooterNavItem text={content.footer.footerLinks[2]} link={`#${content.footer.footerLinks[2].toLowerCase()}`} />
                </div>
                <div>
                    <FooterNavItem text={content.footer.footerLinks[3]} link={`#${content.footer.footerLinks[3].toLowerCase()}`} />
                    <FooterNavItem text={content.footer.footerLinks[4]} link={`#${content.footer.footerLinks[4].toLowerCase()}`} />
                </div>
            </Links>
            <SocialLinks>
                <img src="/assets/images/footer/facebook.svg" alt="..." />
                <img src="/assets/images/footer/twitter.svg" alt="..." />
                <img src="/assets/images/footer/telegram.svg" alt="..." />
                <img src="/assets/images/footer/B.svg" alt="..." />
                <img src="/assets/images/footer/youtube.svg" alt="..." />
            </SocialLinks>
        </FooterStyled>
    )
}

export default Footer