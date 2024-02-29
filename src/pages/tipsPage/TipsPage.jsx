import React, { useState } from 'react'
import EmptyBoard from '../../assets/Images/EmptyBoard.png'
import TipsGif from '../../assets/Gifs/TipsGif.gif'
import './TipsPage.css'

function TipsPage(props) {
    function buttonO(){
        props.addChoice()
        props.close()
        // props.refresh();
        props.setFirstPlayerTally('O')
    }
    function buttonX() {
        //...
        props.close()
        // props.refresh();
        props.setFirstPlayerTally('X')
    }
    
    const [PVP,SetPVP] =useState(false)
    const [landing,setLanding] = useState(true)
    const [AImode, setAIMode] = useState(false)
    const [pvpMode,setPvpMode]=useState(false)
    function handlePVP(){
        setLanding(false)
        SetPVP(true)
    }
    function handleAI(params) {
        
    }
    function handleEasy(params) {
        
    }
    function handleMed(params) {
        
    }
    function handleHard(params) {
        
    }
    function handleOnline(params) {
        
    }
    function handlePhy(params) {
        SetPVP(false)
        setPvpMode(true)
    }
  return (
    <div id='page'>
        <div>
        </div>
        <div id='tipsCont'> 
            <div id='imageCont'>
                <div className='ImgText'>
                    <img src={EmptyBoard} alt="..." className='img'/>
                    <p>In Tic Tac Toe, You have 3 rows and 3 columns.</p>
                </div>
                <div className='ImgText'>
                    <img src={TipsGif} alt="..." className='img'/>
                    <p>The goal of the game is to have your tally 3 in a row horizontally,vertically or diagonaly.</p>
                </div>
                <div className='ImgText'>
                    <img src={EmptyBoard} alt="..." className='img'/>
                    <p>It is a two-player game, so you'll need another person to take turns with. </p>
                </div>
            </div>
            {AImode &&
            <div>
            <p id='tallyInd'>Choose Difficulty </p>
            <div id='buttonCont'>
            <button className='button' id='buttO' onClick={()=>handleEasy()}>Easy</button> 
            <button className='button' id='buttO' onClick={()=>handleMed()}>Medium</button> 
            <button className='button' id='buttO' onClick={()=>handleHard()}>Hard</button>    </div>    </div>     
            } 
            {landing &&
            <div>
            <p id='tallyInd'>Choose Mode </p>
            <div id='buttonCont'>
            <button className='button' id='buttO' onClick={()=>handlePVP()}>Player vs Player</button> 
            <button className='button' id='buttO' onClick={()=>handleAI()}>Player VS AI</button> 
            </div>
            </div>}
            {PVP && <div>
                <p id='tallyInd'>Choose PvP mode</p>
            <div id='buttonCont'>
                <button className='button' id='buttO' onClick={()=>handlePhy()}>Play turn by turn</button>
                <button className='button' id='buttX' onClick={()=>handleOnline()}>Online</button> 
                </div>
                </div>
            }
                {pvpMode && <div>
                <p id='tallyInd'>Choose First Player Tally </p>
            <div id='buttonCont'>
                <button className='button' id='buttX' onClick={buttonX}>X</button> 
                <button className='button' id='buttO' onClick={buttonO}>O</button>
                </div>
                </div>
            }
        </div>
    </div>
  )
}

export default TipsPage