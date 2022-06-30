import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
      <div id="login--title">
        <h1>Log In</h1>
      </div>

      <div id="login--main">
        <div id="login--query">
          <span>New to this site?</span>
          <button id="query--btn">Sign Up</button>
        </div>

        <div id="login--form">
          <div >
            <icon />
            <button id="facebook--btn">Log in with Facebook</button>
          </div>

          <div >
            <icon />
            <button id="google--btn">Log in with Google</button>
          </div>

        </div>

        <div id="login--or">
          <span id="or-span">or</span>
        </div>

        <div email--btn>
          <button id="email">Log in with Email</button>
        </div>
      </div>
    </div>
  )
}

export default Login