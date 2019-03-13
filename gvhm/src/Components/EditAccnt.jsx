import React, {useState}from 'react'

import NavBar from './NavBar'

const EditAccnt = (props) => {
    const [usernameInput, updateUsernameInput, setUsernameText] = useInput()
    const [passInput, updatePassInput, setPassText] = useInput()

    // const deleteAccnt = id => {
    //     axios.delete(`${}`)
    //         .then(res=> {} )
    //         .catch(error => {} )
    //   }

    return ( 
        <>
        <NavBar {...props } />
        <form className='update-form' onSubmit={()=>{}}>
            <input 
                type="text"
                name="username"
                placeholder="old username"
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
            <button>Update</button>
        </form>
        <button>Hell Just Delete All My shit you are depressing</button>
        </>
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
 
export default EditAccnt;