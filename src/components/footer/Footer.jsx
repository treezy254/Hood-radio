import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer--main'>
        <div className='footer--form'>
            <form>
                <input type="text" placeholder="Enter you Email" id="email"/><br/>
                <button>Subscribe Now</button><br />
                <span>Thanks for submitting</span>
            </form>
        </div>
        <div className='footer--cont'>
            <span>copyright &copy by YG-400 jr.
            Proudly created by Sam</span>
        </div>
    </div>
  )
}

export default Footer