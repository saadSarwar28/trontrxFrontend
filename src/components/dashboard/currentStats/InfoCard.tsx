import {
    InfoCardStyled,
    YellowDiv1,
    BlackDiv1,
    YellowDiv2,
    BlackDiv2,
    CopyMessage,
    CardText,
    CopyButton, ConnectWalletButton
} from "@/styles/pages/components/dashboard/currentStats/InfoCard.styled"
import { useEffect, useState } from "react"
import { CONTENT as content } from '@/content/content';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAccountDetails,
    selectUserAccount,
} from '@/store/accountSlice';
import { isMobile } from 'react-device-detect';
import { connectWallet } from '@/utils/wallet';

const InfoCard = () => {

    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch()
    const [_isMobile, setIsMobile] = useState(isMobile)

    const copyLink = () => {
        navigator.clipboard.writeText('https://trontrx.world/?ref=' + accountState.account.address);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000)
    }
    const accountState = useSelector(selectUserAccount)

    const _connectWallet = () => {
        if (!accountState.account.walletConnected) {
            connectWallet()
                .then((address: string) => {
                    // @ts-ignore
                    dispatch(getUserAccountDetails(address))
                })
        }
    }



    return (
        <InfoCardStyled>
            <YellowDiv1>{content.dashboard.currentStats.infoCard.yellowButton1}</YellowDiv1>
            <BlackDiv1>
                <span>{content.dashboard.currentStats.infoCard.blackButton1.span1}</span>
                <span style={{ textTransform: 'none' }}>
                    {accountState.account.address}
                </span>
            </BlackDiv1>
            <YellowDiv2>
                <span>{content.dashboard.currentStats.infoCard.yellowButton2.span1}</span>
                <span style={{ textTransform: 'none' }}>{accountState.account.referrer}</span>
            </YellowDiv2>
            <BlackDiv2>
                <span>{content.dashboard.currentStats.infoCard.blackButton2.span1}</span>
                <span style={{ textTransform: 'none' }}>
                    {
                        "https://trontrx.world/?ref=" + accountState.account.address
                    }
                </span>
            </BlackDiv2>
            <CardText>
                {content.dashboard.currentStats.infoCard.card1Text}
            </CardText>
            {
                _isMobile ? <CardText>{content.dashboard.currentStats.infoCard.card2Text}</CardText> : null
            }
            {
                accountState.account.walletConnected ?
                    <>
                        {
                            _isMobile ?
                                null
                                :
                                <CopyButton onClick={copyLink}>
                                    <p>{content.dashboard.currentStats.infoCard.copyButton}</p>
                                    <CopyMessage className={showMessage ? "shown" : ""}>Link Copied</CopyMessage>
                                </CopyButton>
                        }
                    </>
                    :
                    <ConnectWalletButton onClick={_connectWallet}>
                        <p>{content.dashboard.currentStats.infoCard.connectWalletButton}</p>
                        {/*<CopyMessage className={showMessage ? "shown" : ""}>Link Copied</CopyMessage>*/}
                    </ConnectWalletButton>
            }
        </InfoCardStyled>
    )
}

export default InfoCard
