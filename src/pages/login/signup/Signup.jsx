import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Already a meber?<a href='#'>Log In</a></p><br/>
      <button>Sign up with Facebook</button><br/>
      <button>Sign up with Google</button><br/>
      <hr /><br/>
      or<br/>
      <button>Sign up with email</button><br/>
      <span for="cheka">Join this sites community. <a href='#'>Read more</a></span><br/>
      <input type="checkbox" id="cheka" /><br/>
    </div>
  )
}

export default Signup