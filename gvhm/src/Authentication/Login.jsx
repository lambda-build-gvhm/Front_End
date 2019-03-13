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
        axios.post(`https://gvheatmap.herokuapp.com/api/${ e.target.className !== 'register-button' ? 'login' : 'register'}`, user)
            .then(res => {localStorage.setItem('token', res.data); props.history.push('/')})
            .catch(err => { alert(`Failed to login. Due to ${err}`);setPassText('');setUsernameText('') })
        }


    return ( 
        <div className='login'>
            <h2>Please Enter Your Username and Password</h2>
            <form onSubmit={(e) => loginRegister(e)} >
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={usernameInput}
                    onChange={e => updateUsernameInput(e)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={passInput}
                    onChange={e => updatePassInput(e)}
                    required
                />
                <button>Log in</button>
            </form>
            <h4>No Account?</h4>
            <h4>No Problem</h4>
            <h4>Just Submit the Login Creds and We Will Make One For You</h4>
            <button className='register-button' onClick={e => loginRegister(e)}>Sign Me Up!</button>  
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


