// noinspection DuplicatedCode

import { TreeStyled, Main, Page } from "@/styles/pages/components/dashboard/tree/Tree.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import { useEffect, useState } from "react"
import TreeCard from "@/components/dashboard/tree/TreeCard"
import { useDispatch, useSelector } from 'react-redux';
import { getUserAccountDetails, selectUserAccount } from '@/store/accountSlice';


const Tree = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            // @ts-ignore
            behavior: 'instant'
        })
    }, [])

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
            await window.tronLink.request({ method: 'tron_requestAccounts' });
            // @ts-ignore
            const { name, base58 } = await window.tronWeb.defaultAddress;
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
        <TreeStyled>
            <Header toggleSidebar={toggleSidebar} />
            <SidebarMobile sidebarClass={sidebarClass} activeLink="tree" />
            <Main>
                <SidebarDesktop activeLink="tree" />
                <Page>
                    <div style={{color: 'white', fontSize: '18px', fontWeight: 'bold', height: '500px', textAlign: 'center', marginTop: '50px', fontFamily: 'Poppins'}}>Tree will be available soon!</div>
                    {/*<TreeCard/>*/}
                </Page>
            </Main>
        </TreeStyled>
    )
}

export default Tree
