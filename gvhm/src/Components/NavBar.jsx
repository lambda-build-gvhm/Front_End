import React from 'react';

import { Link } from 'react-router-dom'

const NavBar = (props) => {

    const logout = () =>{
        localStorage.clear();
        props.history.push('/')
    }

    return ( 
        <header className='header'>
            <h1>Gun Violence Heat Map</h1>
            <div className='button-container'>
                {props.match.path !== "/editaccnt" 
                    ? <Link className='accnt-link' to='/editaccnt'><button>Account</button></Link> 
                    : <Link className='accnt-link' to='/'><button>Home</button></Link>}
                <button onClick={() => logout()}>Logout</button>
            </div>
        </header>
     );
}
 
export default NavBar;