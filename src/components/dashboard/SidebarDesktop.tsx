import { SidebarDesktopStyled, LinkStyled } from "@/styles/pages/components/dashboard/SidebarDesktop.styled"
import FooterNavItem from "../FooterNavItem"
import React from "react"


interface SidebarMobileProps {
    activeLink: string
}

const SidebarDesktop: React.FC<SidebarMobileProps> = ({ activeLink }) => {
    return (
        <SidebarDesktopStyled>
            <ul>
                <LinkStyled className={activeLink === "currentStats" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/currentStats.svg" alt="..." />
                    <FooterNavItem text={'CURRENT STATS'} link="/dashboard" />
                </LinkStyled>
                <LinkStyled className={activeLink === "deposit" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/deposit.svg" alt="..." />
                    <FooterNavItem text={'DEPOSIT'} link="/dashboard/deposit" />
                </LinkStyled>
                <LinkStyled className={activeLink === "withdrawal" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/withdrawl.svg" alt="..." />
                    <FooterNavItem text={'WITHDRAWAL'} link="/dashboard/withdrawal" />
                </LinkStyled>
                <LinkStyled className={activeLink === "tree" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/tree.svg" alt="..." />
                    <FooterNavItem text={'TREE'} link="/dashboard/tree" />
                </LinkStyled>
                <LinkStyled className={activeLink === "contractStats" ? "active" : ""}>
                    <img src="/assets/images/dashboard/sidebar/currentStats.svg" alt="..." />
                    <FooterNavItem text={'CONTRACT STATS'} link="/dashboard/contractstats" />
                </LinkStyled>
            </ul>
        </SidebarDesktopStyled>
    )
}

export default SidebarDesktop