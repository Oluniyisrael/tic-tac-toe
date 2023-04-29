function DeclearWin() {

        var squares = document.getElementsByClassName('tableData');
    
        if(squares[0].innerText === squares[1].innerText && squares[1].innerText === squares[2].innerText && squares[2].innerText !== '' 
            ){
          console.log(' Case1 win');
          document.getElementById('line').style.display = 'block';
          return true;
          // props.addX()
        //   if (squares[0].innerText === 'X') {
          //   // console.log('Xwins')
          //   // letXadd = true;
          //return true   console.log(letXadd)
          //   return;
        //   }
          // else{console.log('O wins')}
    
          // so what i am to do now is to create a score board, find which winning cases bring out the possible variables and set scores coressponing to the variable outcome
        }
        else if(squares[0].innerText === squares[3].innerText && squares[3].innerText === squares[6].innerText && squares[6].innerText !== ''){
          console.log(' Case2 win')
          document.getElementById('line2').style.display = 'block'
          return true
        }
        else if(squares[0].innerText === squares[4].innerText && squares[4].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case3 win')
          document.getElementById('line7Dec').style.display = 'block'
          return true
        }
        else if(squares[1].innerText === squares[4].innerText && squares[4].innerText === squares[7].innerText && squares[7].innerText !== ''){
          console.log(' Case4 win')
          document.getElementById('line4').style.display = 'block'
          return true
        }
        else if(squares[2].innerText === squares[5].innerText && squares[5].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case5 win')
          document.getElementById('line5').style.display = 'block'
          return true
        }
        else if(squares[3].innerText === squares[4].innerText && squares[4].innerText === squares[5].innerText && squares[5].innerText !== ''){
          console.log(' Case6 win')
          document.getElementById('line3').style.display = 'block'
          return true
        }
        else if(squares[6].innerText === squares[7].innerText && squares[7].innerText === squares[8].innerText && squares[8].innerText !== ''){
          console.log(' Case7 win')
          document.getElementById('line6').style.display = 'block'
          return true
        }
        else if(squares[2].innerText === squares[4].innerText && squares[4].innerText === squares[6].innerText && squares[6].innerText !== ''){
          console.log(' Case8 win')
          document.getElementById('line8Dec').style.display = 'block'
          return true
        }
        else{console.log('No one won')
        return false
        
    }
    // GameReset()
      }   

export default DeclearWin