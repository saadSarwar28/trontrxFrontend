import { LoginStyled } from "@/styles/pages/Login.styled"
import { connect } from 'react-redux'
import { login } from "@/store/actions/authActions"


const Login = ({ login, user }: any) => {
    console.log(user)

    return (
        <LoginStyled>
            <button onClick={() => login({ username: 'abc', password: 123 })}>Login</button>
        </LoginStyled>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { login })(Login)