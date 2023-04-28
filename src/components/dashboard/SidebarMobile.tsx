import { SidebarMobileStyled, HomeButtonMobile } from "@/styles/pages/components/dashboard/SidebarMobile.styled"
import FooterNavItem from "../FooterNavItem"
import { CONTENT as content } from '@/content/content';
import Link from "next/link"
import React from "react"


interface SidebarMobileProps {
    sidebarClass: boolean,
    activeLink: string
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ sidebarClass, activeLink }) => {
    return (
        <SidebarMobileStyled className={sidebarClass ? "show" : ""}>
            <ul>
                <div>
                    <img src="/assets/images/dashboard/header/dashboard.svg" alt="..." />
                    <FooterNavItem text={'DASHBOARD'} link="#" />
                </div>
                <div className={activeLink === "currentStats" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/currentStats.svg" alt="..." />
                    <FooterNavItem text={'PERSONAL STATS'} link="/dashboard" />
                </div>
                <div className={activeLink === "deposit" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/deposit.svg" alt="..." />
                    <FooterNavItem text={'DEPOSIT'} link="/dashboard/deposit" />
                </div>
                <div className={activeLink === "withdrawal" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/withdrawl.svg" alt="..." />
                    <FooterNavItem text={'WITHDRAWAL'} link="/dashboard/withdrawal" />
                </div>
                <div className={activeLink === "tree" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/tree.svg" alt="..." />
                    <FooterNavItem text={'TREE'} link="/dashboard/tree" />
                </div>
            </ul>
            <HomeButtonMobile>
                <button type="button">
                    <img src="/assets/images/dashboard/header/home.svg" />
                    <Link href="/">
                        {content.dashboard.header.homeButton}
                    </Link>
                </button>
            </HomeButtonMobile>
        </SidebarMobileStyled>
    )
}

export default SidebarMobile
