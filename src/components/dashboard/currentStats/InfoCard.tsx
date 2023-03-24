import { InfoCardStyled, YellowButton1, BlackButton1, YellowButton2, BlackButton2, CopyMessage, CardText, CopyButton } from "@/styles/pages/components/dashboard/currentStats/InfoCard.styled"
import { useState } from "react"
import Link from "next/link"
import content from '../../../content/content.json'


const InfoCard = () => {
    const [showMessage, setShowMessage] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText('https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s');
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000)
    }

    return (
        <InfoCardStyled>
            <YellowButton1 type="button">{content.dashboard.currentStats.infoCard.yellowButton1}</YellowButton1>
            <BlackButton1 type="button">
                <span>{content.dashboard.currentStats.infoCard.blackButton1.span1}</span>
                <span>{content.dashboard.currentStats.infoCard.blackButton1.span2}</span>
            </BlackButton1>
            <YellowButton2 type="button">
                <span>{content.dashboard.currentStats.infoCard.yellowButton2.span1}</span>
                <span>{content.dashboard.currentStats.infoCard.yellowButton2.span2}</span>
            </YellowButton2>
            <BlackButton2 type="button">
                <span>{content.dashboard.currentStats.infoCard.blackButton2.span1}</span>
                <Link href="https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s">{content.dashboard.currentStats.infoCard.blackButton2.link}</Link>
            </BlackButton2>
            <CardText>
                {content.dashboard.currentStats.infoCard.card1Text}
            </CardText>
            <CopyButton onClick={copyLink}>
                <p>{content.dashboard.currentStats.infoCard.copyButton}</p>
                <CopyMessage className={showMessage ? "shown" : ""}>Link Copied</CopyMessage>
            </CopyButton>
        </InfoCardStyled>
    )
}

export default InfoCard