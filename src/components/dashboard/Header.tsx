import { HeaderStyled, DashboardLogo, DashboardSection, HomeButton } from "@/styles/pages/components/dashboard/Header.styled"
import content from './../../content/content.json'
import React from "react"
import Link from 'next/link'


interface HeaderProps {
    toggleSidebar: Function
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    return (
        <HeaderStyled>
            <DashboardLogo>
                <div>
                    <img src="/assets/images/navbar/logo.svg" alt="..." />
                </div>
                <div>
                    <h1>{content.dashboard.header.title}</h1>
                    <p>{content.dashboard.header.desc}</p>
                </div>
            </DashboardLogo>
            <DashboardSection>
                <img src="/assets/images/dashboard/header/dashboard.svg" />
                <h1>{content.dashboard.header.heading}</h1>
            </DashboardSection>
            <HomeButton>
                <button type="button">
                    <img src="/assets/images/dashboard/header/home.svg" />
                    <Link href="/">
                        {content.dashboard.header.homeButton}
                    </Link>
                </button>
            </HomeButton>
            <img src="/assets/images/dashboard/header/menu.svg" onClick={() => toggleSidebar()} />
        </HeaderStyled>
    )
}

export default Header