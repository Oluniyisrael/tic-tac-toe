import AwardWin from "../awardWin/AwardWin";

function DeclearWin(props) {
        const squares = document.getElementsByClassName('tableData');
        if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== '' 
            ){
          console.log(' Case1 win');
          document.getElementById('line').style.display = 'block'
          AwardWin(2,props)
          props.addChoice()
        }
        else if(squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''){
          console.log(' Case2 win')
          document.getElementById('line2').style.display = 'block'
          AwardWin(6,props)
        }
        else if(squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case3 win')
          document.getElementById('line7Dec').style.display = 'block'
          AwardWin(8,props)
        }
        else if(squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[7].innerText !== ''){
          console.log(' Case4 win')
          document.getElementById('line4').style.display = 'block'
          AwardWin(7,props)
        }
        else if(squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case5 win')
          document.getElementById('line5').style.display = 'block'
          AwardWin(8,props)
        }
        else if(squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[5].innerText !== ''){
          console.log(' Case6 win')
          document.getElementById('line3').style.display = 'block'
          AwardWin(5,props)
        }
        else if(squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case7 win')
          document.getElementById('line6').style.display = 'block'
          AwardWin(8,props)
        }
        else if(squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[6].innerText !== ''){
          console.log(' Case8 win')
          document.getElementById('line8Dec').style.display = 'block'
          AwardWin(6,props)
        }
        else{console.log('No one won')
    }
      }   

export default DeclearWin