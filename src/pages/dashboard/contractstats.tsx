import {ContractStatsStyled, Main, Page} from "@/styles/pages/components/dashboard/contractStats/ContractStats.styled"
import Header from "@/components/dashboard/Header"
import SidebarMobile from "@/components/dashboard/SidebarMobile"
import SidebarDesktop from "@/components/dashboard/SidebarDesktop"
import {useState} from 'react'
import ContractStatsCard from "@/components/dashboard/contractStats/ContractStatsCard"
import {useSelector} from 'react-redux';
import {selectUserAccount} from '../../store/accountSlice';


const ContractStats = () => {
    const [sidebarClass, setSidebarClass] = useState(false);
    const toggleSidebar = () => {
        setSidebarClass(!sidebarClass);
    }
    const accountSelector = useSelector(selectUserAccount)

    return (
        <ContractStatsStyled>
            <Header toggleSidebar={toggleSidebar}/>
            <SidebarMobile sidebarClass={sidebarClass} activeLink="contractStats"/>
            <Main>
                <SidebarDesktop activeLink="contractStats"/>
                <Page>
                    {
                        accountSelector.account.contractTotalDeposited && accountSelector.account.contractTotalWithdrawn && accountSelector.account.projectInsurance ?
                        <ContractStatsCard
                            totalDeposited={accountSelector.account.contractTotalDeposited}
                            totalWithdrawn={accountSelector.account.contractTotalWithdrawn}
                            contractInsurance={accountSelector.account.projectInsurance}
                        /> : null
                    }
                </Page>
            </Main>
        </ContractStatsStyled>
    )
}

export default ContractStats
