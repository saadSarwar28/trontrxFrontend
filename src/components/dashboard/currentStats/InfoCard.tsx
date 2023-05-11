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

    const accountState = useSelector(selectUserAccount)
    const [showMessage, setShowMessage] = useState(false);
    const dispatch = useDispatch()
    const [_isMobile, setIsMobile] = useState(isMobile)
    const [referralLink, setReferralLink] = useState('https://trontrx.world/?ref=')
    const [background, setBackground] = useState('transparent')

    useEffect(() => {
        if (accountState.account.address !== '') {
            setReferralLink('https://trontrx.world/?ref=' + accountState.account.address)
        }
    }, [accountState.account.address])

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000)
    }

    const _connectWallet = () => {
        if (!accountState.account.walletConnected) {
            connectWallet()
                .then((address: string) => {
                    // @ts-ignore
                    dispatch(getUserAccountDetails(address))
                })
        }
    }

    const selectTextOnclick = (event: any) => {
        // console.log(event.target.id, ' <<< ')
        event.target.select()
        // setBackground('lightgrey')
    }

    const deselectText = (event: any) => {
        if (event.target.id !== 'referral') {
            setBackground('transparent')
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", deselectText)
    }, [])

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
                <span style={{ textTransform: 'none' }}>{accountState.account.referrer === undefined ? 'No Upline Yet' : accountState.account.referrer}</span>
            </YellowDiv2>
            <BlackDiv2>
                <span>{content.dashboard.currentStats.infoCard.blackButton2.span1}</span>
                <input type={'text'} id="referral" value={referralLink} onClick={selectTextOnclick} style={{background: background}} readOnly={true}/>
                {/*<span style={{ textTransform: 'none' }} onClick={selectContents}>*/}
                {/*    {*/}
                {/*        "https://trontrx.world/?ref=" + accountState.account.address*/}
                {/*    }*/}
                {/*</span>*/}
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
