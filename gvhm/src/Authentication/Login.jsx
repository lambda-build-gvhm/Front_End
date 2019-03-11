import React from 'react'
import { Redirect } from 'react-router-dom'

import './auth.css'

const Login = (props) => {

    // login = (e) =>{
    //     axios.post('http://localhost:5000/api/login', creds)
    //     .then(res => {localStorage.setItem('token', res.data.payload)})
    //     .catch(err => console.log(err))
    //     .then(() => this.props.history.push('/'))
    // }

    return ( 
        <div className='login'>
            <h3>Please Enter a username and password</h3>
            <h4>I don't know why you would need one either.... you can leave it blank lol.</h4>
            <form onSubmit={(e) => localStorage.setItem('token', 'bsToken') }>
                <input
                    type="text"
                    name="username"
                />
                <input
                    type="password"
                    name="password"
                />
                <button>Log in</button>
            </form>
        </div>
     );
}
 
export default Login;


