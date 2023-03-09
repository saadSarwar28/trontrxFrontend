import { NavbarStyled, LogoSection, LinksSection } from "@/styles/components/Navbar.styled"
import { connect } from "react-redux"
import Link from "next/link"
import { useEffect } from "react"


const Navbar = ({ data }: any) => {
    useEffect(() => {
        // make link active when it is clicked
        const links = document.querySelectorAll('ul a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach(item => {
                    if (item.innerText === e.currentTarget.innerText) {
                        item.classList.add('active')
                        console.log(e.currentTarget.innerText)
                    } else {
                        item.classList.remove('active')
                    }
                })
            })
        })

        // change navbar bg to dark on scroll
        const navbar = document.getElementById('navbar');
        window.onscroll = () => {
            if (window.scrollY >= 400) {
                navbar.classList.add('black')
            } else {
                navbar.classList.remove('black')
            }
        }
    }, [])

    return (
        <NavbarStyled id="navbar">
            <LogoSection>
                <div>
                    {Object.keys(data).length && <img src={data.navbar.logo} alt="..." />}
                </div>
                <div>
                    <h1 id="navbarTitle">Tron Trx</h1>
                    <p id="navbarDesc">King of all contracts</p>
                </div>
            </LogoSection>
            <LinksSection>
                <ul id="links">
                    <li>
                        <Link href="#" className="active">ABOUT US</Link>
                    </li>
                    <li>
                        <Link href="#">HOW IT WORKS</Link>
                    </li>
                    <li>
                        <Link href="#">BENEFITS</Link>
                    </li>
                    <li>
                        <Link href="#">FAQs</Link>
                    </li>
                    <li>
                        <Link href="#">DASHBOARD</Link>
                    </li>
                </ul>
            </LinksSection>
        </NavbarStyled>
    )
}

const mapStateToProps = (state: any) => {
    return {
        data: state.home.homeItems
    }
}

export default connect(mapStateToProps)(Navbar)