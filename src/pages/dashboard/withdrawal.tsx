import { WithdrawalStyled, Main, Page } from "@/styles/pages/components/dashboard/withdrawal/Withdrawal.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useEffect, useState } from "react"
import WithdrawalCard from "@/components/dashboard/withdrawal/WithdrawalCard"
import { useDispatch, useSelector } from 'react-redux';
import { getUserAccountDetails, selectUserAccount } from '@/store/accountSlice';
import { connectWallet } from '@/utils/wallet';


const Withdrawal = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    }, [])

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
        <WithdrawalStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="withdrawal" />
            <Main>
                <SidebarDesktop activeLink="withdrawal" />
                <Page>
                    <WithdrawalCard />
                </Page>
            </Main>
        </WithdrawalStyled>
    )
}

export default Withdrawal
