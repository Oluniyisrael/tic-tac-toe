import AwardWin from "../awardWin/AwardWin";

function DeclearWin(props,setState) {
  function addChoice() {
    props.addChoice()
  }
  function setStateTrue(){
    setState(true)
  }
        const squares = document.getElementsByClassName('tableData');
        if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== '' 
            ){
          setStateTrue()
          document.getElementById('line').style.display = 'block'
          AwardWin(2,props)
          addChoice()
        }
        else if(squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''){
          setStateTrue()
          document.getElementById('line2').style.display = 'block'
          AwardWin(6,props)
          addChoice()
        }
        else if(squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''){
          setStateTrue()
          document.getElementById('line7Dec').style.display = 'block'
          AwardWin(8,props)
          addChoice()
        }
        else if(squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[7].innerText !== ''){
          setStateTrue()
          document.getElementById('line4').style.display = 'block'
          AwardWin(7,props)
          addChoice()
        }
        else if(squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[8].innerText !== ''){
          setStateTrue()
          document.getElementById('line5').style.display = 'block'
          AwardWin(8,props)
          addChoice()
        }
        else if(squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[5].innerText !== ''){
          setStateTrue()
          document.getElementById('line3').style.display = 'block'
          AwardWin(5,props)
          addChoice()
        }
        else if(squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[8].innerText !== ''){
          setStateTrue()
          document.getElementById('line6').style.display = 'block'
          AwardWin(8,props)
          addChoice()
        }
        else if(squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[6].innerText !== ''){
          setStateTrue()
          document.getElementById('line8Dec').style.display = 'block'
          AwardWin(6,props)
          addChoice()
        }
        else{
    }
          // setState(false)
      }   

export default DeclearWin