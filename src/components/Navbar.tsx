import { NavbarStyled, LogoSection, LinksSection, MobileNavbar } from "@/styles/components/Navbar.styled"
import { connect } from "react-redux"
import {useEffect, useState} from "react"
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

    return (
        <NavbarStyled id="navbar" className={navbarClass}>
            <LogoSection>
                <div>
                    {Object.keys(content).length && <img src="/assets/images/navbar/logo.svg" alt="..." />}
                </div>
                <div>
                    <h1 id="navbarTitle">{Object.keys(content).length && content.navbar.navTitle}</h1>
                    <p id="navbarDesc">King of all contracts</p>
                </div>
            </LogoSection>
            <LinksSection>
                <ul id="links">
                    <NavItem text={'HOME'} link="#"/>
                    <NavItem text={'ABOUT US'} link="#"/>
                    <NavItem text={'HOW IT WORKS'} link="#"/>
                    <NavItem text={'BENEFITS'} link="#"/>
                    <NavItem text={'FAQs'} link="#"/>
                    <NavItem text={'DASHBOARD'} link="#"/>
                </ul>
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
