import React from 'react'
import "./main.css"

const Main = () => {
  return (
    <div className='main--main'>
        <div className='main--img'>
            <img src="./assets/orange.jpg" alt=""/>image
        </div>
        <div className='main--content'>
            <div className='main--title'>
                <h1>HOOD RADIO</h1>
            </div>
            <div className='main--love'>
                <h1>Love Radio</h1>
                <p>Wanna reconcile with your love. Here is your chance to finally meet your Ex on air.</p>
                <p>Every friday at 4pm on the BOYZ HUB with host Richelle Mbugua.</p>
            </div>
            <div className='main--air'>
                <h1>ON AIR</h1>
                <p>Are you a local artist? Let us play your song. Dm us on instagram @hood_radio110</p>
            </div>
        </div>
    </div>
  )
}

export default Main