import React from 'react';

import { Link } from 'react-router-dom'

const NavBar = (props) => {
    // Function that is invoked to Effectively logout when Invoked by button click
    const logout = () =>{
        // This clears all user data from the local storage, including auth token
        localStorage.clear();
        // This returns the user to the login page for re-authentication prior to being
        // able to access PrivateRoutes again with out authentication.
        props.history.push('/login')
    }

    return ( 
    // This is the NavBar holding the Title aswell as user action buttons.
        <header className='header'>
            <div className="header-content">
                        {/* Title */}
                <h1>Gun Violence Heat Map</h1>
                {/* Display div used to format the 2 buttons rendered with in. */}
                <div className='button-container'>
                    {/* This uses JS to determine the page the user is on, and conditionally 
                        render the button Link displayed by the log out 
                    */}
                    {props.match.path !== "/editaccnt" 
                        // Either button links to a propper ReactRouter path determined by the location the user is in.
                        ? <Link className='accnt-link' to='/editaccnt'><button>Account</button></Link> 
                        : <Link className='accnt-link' to='/'><button>Home</button></Link>
                    }
                    {/* Button to logout clears the local storage of all user data saved for the purpose of Authentication,
                        Effectively logging them out and forcing them to re-Authenticat before gaining access to PrivateRoutes
                        again.
                    */}
                    <button onClick={() => logout()}>Logout</button>
                </div>
            </div>
        </header>
     );
}
 
export default NavBar;