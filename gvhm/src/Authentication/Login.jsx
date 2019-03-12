import React, {useState} from 'react'
import axios from 'axios'
import './auth.css'

const Login = (props) => {
    const [usernameInput, updateUsernameInput, setUsernameText] = useInput()
    const [passInput, updatePassInput, setPassText] = useInput()
    const user = {
        username: usernameInput,
        password: passInput,
    }

    const loginRegister = e => {
        e.preventDefault()
        // axios.post(`http://localhost:5000/api/${ e.target.className !== 'registration-button' ? 'login' : 'register'}`, user)
        //     .then(res => {localStorage.setItem('token', res.data.payload); this.props.history.push('/')})
        //     .catch(err => console.log(err))
            localStorage.setItem('token', 'bsToken')
            console.log(e.target)
            setPassText('');
            setUsernameText('')
        }


    return ( 
        <div className='login'>
            <h3>Please Enter a username and password</h3>
            <h4>No Account?</h4>
            <h4>No Problem</h4>
            <h4>Just Submit the Login Creds and We Will Make One For You</h4>
            <form onSubmit={(e) => loginRegister(e)} >
                <input
                    type="text"
                    name="username"
                    value={usernameInput}
                    onChange={e => updateUsernameInput(e)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={passInput}
                    onChange={e => updatePassInput(e)}
                    required
                />
                <button>Log in</button>
            </form>
            <button className='register-button' onClick={()=>{}}>Register</button>
        </div>
     );
}

const useInput = () =>{
    const [inputText, setInputText] = useState('')

    const updateInput = (e) => {
        setInputText(e.target.value)
    }

    return[
        inputText,
        updateInput,
        setInputText
    ]
    
}

export default Login;


