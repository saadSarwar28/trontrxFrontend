import { HeaderStyled, DashboardLogo, DashboardSection, HomeButton } from "@/styles/pages/components/dashboard/Header.styled"
import { CONTENT as content } from '@/content/content';
import React from "react"
import Link from 'next/link'
import { useRouter } from "next/router";


interface HeaderProps {
    toggleSidebar: Function
}


const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
    const router = useRouter();

    return (
        <HeaderStyled>
            <DashboardLogo onClick={() => router.push('/')}>
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
                <Link href="/">
                    <img src="/assets/images/dashboard/header/home.svg" />
                    <span>
                        {content.dashboard.header.homeButton}
                    </span>
                </Link>
            </HomeButton>
            <img src="/assets/images/dashboard/header/menu.svg" onClick={() => toggleSidebar()} />
        </HeaderStyled>
    )
}

export default Header
