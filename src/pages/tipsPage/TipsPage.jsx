import React from 'react'
import EmptyBoard from '../../assets/Images/EmptyBoard.png'
import TipsGif from '../../assets/Gifs/TipsGif.gif'
import './TipsPage.css'

function TipsPage(props) {
    function buttonO(){
        props.addChoice()
        props.close()
        props.refresh();
    }
    function buttonX() {
        //...
        props.close()
        props.refresh();
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
                <p id='tallyInd'>Choose First Player Tally </p>
            <div id='buttonCont'>
                <button className='button' id='buttX' onClick={buttonX}>X</button> 
                <button className='button' id='buttO' onClick={buttonO}>O</button>
                </div>
        </div>
    </div>
  )
}

export default TipsPage