import { DepositStyled, Main, Page } from "@/styles/pages/components/dashboard/deposit/Deposit.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import {useEffect, useState} from "react"
import DepositCard from "@/components/dashboard/deposit/DepositCard"
import {getUserAccountDetails, selectUserAccount} from '@/store/accountSlice';
import {useDispatch, useSelector} from 'react-redux';


const Deposit = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }

    const accountState = useSelector(selectUserAccount)
    const dispatch = useDispatch()

    const connectWallet = async () => {
        // @ts-ignore
        if (window.tronWeb) {
            // @ts-ignore
            await window.tronLink.request({method: 'tron_requestAccounts'});
            // @ts-ignore
            const {name, base58} = await window.tronWeb.defaultAddress;
            // @ts-ignore
            dispatch(getUserAccountDetails(base58))
        }
    }
    useEffect(() => {
        if (!accountState.account.walletConnected) {
            connectWallet()
        }
    }, [])

    return (
        <DepositStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="deposit" />
            <Main>
                <SidebarDesktop activeLink="deposit" />
                <Page>
                    <DepositCard />
                </Page>
            </Main>
        </DepositStyled>
    )
}

export default Deposit
