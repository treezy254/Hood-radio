import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer--main'>
        <div className='footer--form'>
            <form>
                <input type="text" placeholder="Enter your email here" id="a-little-toy"/><br/>
                <button id="a-little-joy">Subscribe Now</button><br />
                {/* <span>Thanks for submitting</span> */}
            </form>
        </div>
        <div className='footer--cont'>
            <p>© 2022 by YG-400 Jr. Proudly created by Sam</p>
        </div>
    </div>
  )
}

export default Footer