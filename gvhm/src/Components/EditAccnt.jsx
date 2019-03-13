import React, {useState}from 'react'

import NavBar from './NavBar'
import axios from 'axios';

const EditAccnt = (props) => {
    /* This is the state for the user input fields handled with a custom React Hook  */
    /* These are destructed arrays from the Custom react Hook below the Component mapped for use. Order matters*/
    const [usernameInput, updateUsernameInput] = useInput()
    const [prevPassInput, updatePrevPassInput] = useInput()
    const [newPassInput, updateNewPassInput] = useInput()
    
    const activeUser = {
        user: localStorage.getItem("userName"),
        id: localStorage.getItem('id')
    }
    const deleteAccnt = () => {
        axios.delete(`https://gvheatmap.herokuapp.com/api/update/delete${activeUser.id}`, {headers:{Authorization:localStorage.getItem('token')}})
            .then(res=> {} )
            .catch(error => {} )
      }

    // const updateAccnt = () =>{
    //     axios.put(`https://gvheatmap.herokuapp.com/api/update${activeUser.id}`, {headers:{Authorization:localStorage.getItem('token')}},)
    //         .then(res => {localStorage.setItem('username', res.data.username); props.history.push('/')})
    //         .catch(err => { alert(`Failed to Update. Due to ${err}`); })
    // }


    return ( 
        <>
        <NavBar {...props } />
        <form className='update-form' onSubmit={() => {}}>
            <input 
                type="text"
                name="username"
                placeholder={activeUser.user}
                value={usernameInput}
                onChange={e => updateUsernameInput(e)}
                required
            />
            <input 
                type="password"
                name="password"
                placeholder="Confirm Previous Password"
                value={prevPassInput}
                onChange={e => updatePrevPassInput(e)}
                required
            />
            <input 
                type="password"
                name="password"
                placeholder="New Password"
                value={newPassInput}
                onChange={e => updateNewPassInput(e)}
                
            />
            <button>Update</button>
        </form>
        <button onClick={() => deleteAccnt}>Hell Just Delete All My shit you are depressing</button>
        </>
     );
}
/* Custom Input Hook to be used as Modular input change handling. Apply naming convention when creating variable names, for each input through destructuring returns.
    When used Be sure to Map the variables inputText <which by default is an empty string>, as well as updateInput <which is the change handler>
    these variables should be mapped to custom names, using user preferred naming convention for use in multiple locations on a single form or page.
        * The optional setInputText function is a method that can be used to set or reset the value of the input text without the changeHandler. *
                                         ***  THIS WILL RESET THE WHOLE VALUE OF THE INPUT. NOT MODIFY  ***
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