import React from 'react'
import './LandingPage.css'
import logo from '.././../assets/Israel Tic Tac Toe.png'

function LandingPage() {
  return (
    <div className='LandingPage'>
        <div id='rel'>
            <img src={logo} alt="..." id='imageLogo' />
        </div>
    </div>
  )
}

export default LandingPage