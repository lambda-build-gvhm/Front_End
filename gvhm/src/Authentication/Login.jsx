import React from 'react'



const Login = (props) => {

    return ( 
        <>
        <form onSubmit={() => localStorage.setItem('token', 'bsToken') }>
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
        </>
     );
}
 
export default Login;


