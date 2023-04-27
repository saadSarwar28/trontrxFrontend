import {CurrentStatsStyled, Main, Page} from "@/styles/pages/components/dashboard/currentStats/CurrentStats.styled"
import Header from "@/components/dashboard/Header"
import {useEffect, useState} from "react"
import SidebarMobile from '../../components/dashboard/SidebarMobile'
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import InfoCard from "@/components/dashboard/currentStats/InfoCard"
import StatsCard from "@/components/dashboard/currentStats/StatsCard"
import Head from 'next/head';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAccountDetails, selectUserAccount} from '@/store/accountSlice';
import {connectWallet} from '@/utils/wallet';


const CurrentStats = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    const accountState = useSelector(selectUserAccount)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!accountState.account.walletConnected) {
            connectWallet()
                .then((address: string) => {
                    if (address !== undefined) {
                        // @ts-ignore
                        dispatch(getUserAccountDetails(address))
                    }
                })
        }
    }, [])

    return (
        <>
            <Head>
                <title>Trontrx</title>
                <meta name="TronTrx" content="TronTrx - King Of All Contracts"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <CurrentStatsStyled>
                <Header toggleSidebar={toggleSidebar}/>
                <SidebarMobile sidebarClass={sidebarClass} activeLink="currentStats"/>
                <Main>
                    <SidebarDesktop activeLink="currentStats"/>
                    <Page>
                        <InfoCard/>
                        <StatsCard/>
                    </Page>
                </Main>
            </CurrentStatsStyled>
        </>
    )
}

export default CurrentStats
