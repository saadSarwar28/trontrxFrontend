import { SignupStyled } from "@/styles/pages/Signup.styled"
import { connect } from 'react-redux'
import { signup } from "@/store/actions/authActions"


const Signup = ({ signup, user }: any) => {
    console.log(user);

    return (
        <SignupStyled>
            <button onClick={() => signup({ username: 'abc', password: 123 })}>Signup</button>
        </SignupStyled>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { signup })(Signup)