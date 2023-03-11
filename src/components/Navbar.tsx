import { NavbarStyled, LogoSection, LinksSection, MobileNavbar } from "@/styles/components/Navbar.styled"
import { connect } from "react-redux"
import Link from "next/link"
import { useEffect } from "react"


const Navbar = ({ content }: any) => {
    useEffect(() => {
        // make link active when it is clicked
        const links = document.querySelectorAll('ul a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach(item => {
                    if (item.innerText === e.currentTarget.innerText) {
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })
            })
        })

        console.log(window.innerWidth)
        if (window.innerWidth > 992) {
            // change navbar bg to dark on scroll
            const navbar = document.getElementById('navbar');
            window.onscroll = () => {
                if (window.scrollY >= 400) {
                    navbar.classList.add('black')
                } else {
                    navbar.classList.remove('black')
                }
            }
        }
    }, [])

    return (
        <NavbarStyled id="navbar">
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
                <div>
                    <img src="/assets/images/navbar/menu-icon.svg" alt="..." />
                </div>
                <MobileNavbar>
                    <ul id="links">
                        <li>
                            {Object.keys(content).length && <img src="/assets/images/navbar/home-icon.svg" alt="..." />}
                            <Link href="#" className="active">{Object.keys(content).length && content.navbar.navLinks[0]}</Link>
                        </li>
                        <li>
                            {Object.keys(content).length && <img src="/assets/images/navbar/how-works-icon.svg" alt="..." />}
                            <Link href="#">{Object.keys(content).length && content.navbar.navLinks[1]}</Link>
                        </li>
                        <li>
                            {Object.keys(content).length && <img src="/assets/images/navbar/home-icon.svg" alt="..." />}
                            <Link href="#">{Object.keys(content).length && content.navbar.navLinks[2]}</Link>
                        </li>
                        <li>
                            {Object.keys(content).length && <img src="/assets/images/navbar/home-icon.svg" alt="..." />}
                            <Link href="#">{Object.keys(content).length && content.navbar.navLinks[3]}</Link>
                        </li>
                        <li>
                            {Object.keys(content).length && <img src="/assets/images/navbar/home-icon.svg" alt="..." />}
                            <Link href="#">{Object.keys(content).length && content.navbar.navLinks[4]}</Link>
                        </li>
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