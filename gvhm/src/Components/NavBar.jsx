import React from 'react';
import user from '../Authentication/Login'

const NavBar = (props) => {

    const logout = () =>{
        localStorage.clear();
        props.history.push('/')
    }
    return ( 
        <header className='header'>
            <h1>Gun Violence Heat Map</h1>
            <span>{user.username}</span>
            <button onClick={() => logout()}>Logout</button>
        </header>
     );
}
 
export default NavBar;