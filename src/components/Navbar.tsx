import { NavbarStyled } from "@/styles/components/Navbar.styled"
import { connect } from 'react-redux'
import Link from 'next/link'


const Navbar = ({ user }: any) => {
    console.log(user);

    return (
        <NavbarStyled>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <li>
                    <Link href="/signup">Signup</Link>
                </li>
            </ul>
        </NavbarStyled>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Navbar)