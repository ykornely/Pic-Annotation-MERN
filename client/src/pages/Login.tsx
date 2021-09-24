import { useState } from 'react'
import { login } from '../api'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import joi from 'joi'

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [serverError, setServerError] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        
        try {
            joi.assert(email, joi.string().email({ tlds: { allow: false } }))
        } catch (error) {
            setEmailError('invalid-email')
        }

        try {
            joi.assert(password, joi.string().min(4))
        } catch (error) {
            setPasswordError('min-4-char')
        }

        try {
            const { token } = await login({ email, password })
            localStorage.setItem('token', token)
            history.push('/pictures')
        } catch (error) {
            setServerError('wrong-credentials')
         }

    }

    return (
        <div className="wrapper">
            <div id="formContent">
            <Link to="/login">
                <h2 className="active">Sign In</h2>
            </Link>
            <Link to="/signup">
                <h2 className="underlineHover">Sign Up</h2>
            </Link>
                <div>
                    <img src="/img/single_user.png" id="icon" alt="User Icon" />
                </div>
                <form id="signInForm" onSubmit={handleSubmit}>
                    <input id="email" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(''); setServerError('') }} type="text" name="email" placeholder="Email" />
                    <div>{emailError === 'invalid-email' && <label className="validation-message">Invalid email address.</label>}</div>
                    <input id="password" value={password} onChange={(event) => { setPassword(event.target.value); setPasswordError(''); setServerError('') }} type="password" name="password" placeholder="Password" required />
                    <div>{passwordError === 'min-4-char' && <label className="validation-message">Minimum 4 characters.</label>}</div>
                    <div>{serverError === 'wrong-credentials' && <label className="validation-message">Wrong email or password.</label>}</div>
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        </div>
    )
}

export default Login
