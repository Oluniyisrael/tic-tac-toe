import React,{useState} from 'react'
import './NavBar.css'
import logo from '../../assets/Israel Tic Tac Toe.png'

function NavBar() {
    var showScore = true
    const [xScore, setXScore]= useState([0])
    const [oScore, setOScore]= useState([0])
  return (
    <nav id='gameNav'>
        <div>
            <img src={logo} alt="logo" id='logo'/>
        </div>
        {showScore && <div id='scoreBoard'> <span id='x'>X</span> : {xScore}   <span id='o'>O</span>: {oScore}</div>}
    </nav>
    )
}

export default NavBar