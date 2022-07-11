import React from 'react'
import "./main.css"

const Home = () => {
  return (
    <div className='home'>

        <div className='home--img'>
            <img src="/assets/images/mic.webp" alt="" id="home--img" />
            <div id='home--title'>
                <h1 id="home--tt">HOOD<br/> RADIO</h1>
                <p id="home--out">OUT NOW</p>
                <p id="home--agh">ALL GOOD IN THE HOOD</p>
                <button id="home--btn">LISTEN</button>
            </div>
        </div>


        <div className='main--content'>

            <div className='main--love'>
                <div id="love--f">
                    <h1 id="love--tt">Love<br/>Radio</h1>
                    <img src="/assets/images/love.webp" alt="" id="love--img"/>
                </div>
                <p id="love--p">Wanna reconcile with your love. Here is your chance<br/> to finally meet your Ex on air.<br/>
                    Every friday at 4pm on the BOYZ HUB with host<br/> Richelle Mbugua.</p>
            </div>

            <div className='main--air'>
                    <h1 id="air--h">ON AIR</h1>
                    <img src="/assets/images/disc.jpeg" alt="" id="air--img"/>
                    <p>Are you a local artist? Let us play your song. <br/>Dm us on instagram @hood_radio110</p>
            </div>
        </div>
    </div>
  )
}

export default Home