import React, {useState}from 'react'

import NavBar from './NavBar'
import axios from 'axios';

const EditAccnt = (props) => {
    /* This is the state for the user input fields handled with a custom React Hook  */
    /* These are destructed arrays from the Custom react Hook below the Component mapped for use. Order matters*/
    const [usernameInput, updateUsernameInput] = useInput()
    const [newPassInput, updateNewPassInput] = useInput()
    const [confirmPassInput, updateConfirmPassInput] = useInput()
    
    const activeUser = {
        user: localStorage.getItem("username"),
        id: localStorage.getItem('userID')
    }

    const updatedUser = {
        username: usernameInput,
        password: newPassInput,
    }

    const deleteAccnt = () => {
        axios.delete(`https://gvheatmap.herokuapp.com/api/delete/delete/${activeUser.id}`, { headers: {Authorization:localStorage.getItem('token')} })
            .then(res => {alert(`${res.data.message}`); localStorage.clear(); props.history.push('/')} )
            .catch(err => console.log(err))   
      }

    const updateAccnt = (e) =>{
        console.log(activeUser.id);
        e.preventDefault()
        axios.put(`https://gvheatmap.herokuapp.com/api/update/${activeUser.id}`, updatedUser)
            .then(res => {localStorage.setItem('username', res.data.username); props.history.push('/')})
            .catch(err => console.log(err))
    }

    return ( 
        <>
        <NavBar {...props } />
        <form className='update-form' onSubmit={e => updateAccnt(e)}>
            <input 
                type="text"
                name="username"
                placeholder={activeUser.user}
                value={usernameInput}
                onChange={e => updateUsernameInput(e)}
            />
            <input 
                type="password"
                name="password"
                placeholder="New Password"
                value={newPassInput}
                onChange={e => updateNewPassInput(e)}
            />
            <input 
                type="password"
                name="password"
                placeholder="Confirm Password"
                value={confirmPassInput}
                onChange={e => updateConfirmPassInput(e)}
                
            />
            <button>Update</button>
        </form>
        <button onClick={() => deleteAccnt()}>Hell Just Delete All My shit you are depressing</button>
        </>
     );
}
/* Custom Input Hook to be used as Modular input change handling. Apply naming convention when creating variable names, for each input through destructuring returns.
    When used Be sure to Map the variables inputText <which by default is an empty string>, as well as updateInput <which is the change handler>
    these variables should be mapped to custom names, using user preferred naming convention for use in multiple locations on a single form or page.
        * The optional setInputText function is a method that can be used to set or reset the value of the input text without the changeHandler. *
                                         ***  THIS WILL REPLACE THE WHOLE VALUE OF THE INPUT. NOT MODIFY  ***
*/
const useInput = () =>{
    const [inputText, setInputText] = useState('')

    const updateInput = (e) => {
        setInputText(e.target.value)
    }

    return[
        inputText,
        updateInput,
/* This method is optional if used will be the same as setInputText taking in a argument used to set the input text to that value.
    it is not necessary to pull and map this when using the hook
*/
        setInputText
    ]
    
}
 
export default EditAccnt;