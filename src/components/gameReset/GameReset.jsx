function GameReset() {
        var squares = document.getElementsByClassName('tableData')
        var lines = document.querySelectorAll('hr');
        var writeHere = document.getElementsByClassName('changeNode');
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
              squares[i].childNodes[1].nodeValue = ''
            //  = '';
            lines[i].style.display = 'none';
          }  
          for (let i = 0; i < 4; i++) {

            writeHere[i].className = 'writeHere'
            //true and falsify xando component 
          }                                                                            
        //   window.document.location.reload()
          }, 1500);
        // for (i=0;i<9;i++){document.getElementsByClassName('tableData')[i].innerText = ''
        //          document.getElementsByClassName('tableData')[i].innerHTML = '<span class="writeHere"></span>'
        //          document.querySelectorAll('hr')[i].style.display= 'none'} document.getElementsByClassName('tableData')[i].childNodes[1].nodeValue
} 

export default GameReset