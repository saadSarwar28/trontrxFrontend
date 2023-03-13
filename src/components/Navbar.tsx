import { NavbarStyled, LogoSection, LinksSection, MobileNavbar } from "@/styles/components/Navbar.styled"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import NavItem from '@/components/NavItem';


const Navbar = ({ content }: any) => {

    const [navbarClass, setNavbarClass] = useState('')
    // change navbar bg to dark on scroll

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= 400) {
                setNavbarClass('black')
            } else {
                setNavbarClass('')
            }
        }
    }, [])


    const toggleNavbar = () => {
        const mobileNavbar = document.getElementById('mobileNavbar');
        mobileNavbar?.classList.contains('show') ? mobileNavbar?.classList.remove('show') : mobileNavbar?.classList.add('show')
    }

    return (
        <NavbarStyled id="navbar" className={navbarClass}>
            <LogoSection>
                <div>
                    <img src="/assets/images/navbar/logo.svg" alt="..." />
                </div>
                <div>
                    <h1 id="navbarTitle">{Object.keys(content).length && content.navbar.navTitle}</h1>
                    <p id="navbarDesc">{Object.keys(content).length && content.navbar.navDesc}</p>
                </div>
            </LogoSection>
            <LinksSection>
                <div onClick={toggleNavbar}>
                    <img src="/assets/images/navbar/menu-icon.svg" alt="..." />
                </div>
                <MobileNavbar id="mobileNavbar">
                    <ul id="links">
                        <div>
                            <img src="/assets/images/navbar/home-icon.svg" alt="..." />
                            <NavItem text={'HOME'} link="#home" />
                        </div>
                        <div>
                            <img src="/assets/images/navbar/about-icon.svg" alt="..." />
                            <NavItem text={'ABOUT US'} link="#howInvest" />
                        </div>
                        <div>
                            <img src="/assets/images/navbar/how-works-icon.svg" alt="..." />
                            <NavItem text={'HOW IT WORKS'} link="#whyChoose" />
                        </div>
                        <div>
                            <img src="/assets/images/navbar/benefits-icon.svg" alt="..." />
                            <NavItem text={'BENEFITS'} link="#benefits" />
                        </div>
                        <div>
                            <img src="/assets/images/navbar/faqs-icon.svg" alt="..." />
                            <NavItem text={'FAQs'} link="#faqs" />
                        </div>
                        <div>
                            <img src="/assets/images/navbar/dashboard-icon.svg" alt="..." />
                            <NavItem text={'DASHBOARD'} link="#" />
                        </div>
                    </ul>
                </MobileNavbar>
            </LinksSection>
        </NavbarStyled>
    )
}

const mapStateToProps = (state: any) => {
    return {
        content: state.home.homeItems
    }
}

export default connect(mapStateToProps)(Navbar)
