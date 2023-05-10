import React from 'react'
import EmptyBoard from '../../assets/Images/EmptyBoard.png'
import TipsGif from '../../assets/Gifs/TipsGif.gif'
import './TipsPage.css'

function TipsPage() {
  return (
    <div id='page'>
        <div id='tipsCont'> 
            <div id='imageCont'>
                <div className='ImgText'>
                    <img src={EmptyBoard} alt="..." className='img'/>
                    <p>In Tic Tac Toe, You have 3 rows and 3 columns</p>
                </div>
                <div className='ImgText'>
                    <img src={TipsGif} alt="..." className='img'/>
                    <p>The goal of the game is to have your tally 3 in a row vertically, horizontally or diagonaly.</p>
                </div>
                <div className='ImgText'>
                    <img src={EmptyBoard} alt="..." className='img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TipsPage