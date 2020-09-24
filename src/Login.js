import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import { actionTypes } from "./reducer"
import { useStateValue } from './StateProvider'

function Login() {
    // 1. define StateProvider with useContext()
    // 2. define reducer and use it in the first step
    // 3. wrap up App component with StateProvider on index.js page
    // 4. dispatch it on the relevant page(Login)
    // 5. push the data(user) inside the data layer with useStateValue() on wherever we need it like App.js page, Header.js page, etc
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
            .then(result => { 
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
                    alt=""
                />
                <img 
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
