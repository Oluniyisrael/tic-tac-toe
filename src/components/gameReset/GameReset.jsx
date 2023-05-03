function GameReset() {
        var squares = document.getElementsByClassName('tableData')
        var lines = document.querySelectorAll('hr');
        var writeHere = document.getElementsByClassName('changeNode');
        // setTimeout(() => {
            for (let i = 0; i < 9; i++) {
            squares[i].innerText = '';
            lines[i].style.display = 'none';
            writeHere[i].className = 'writeHere'
          }                                                                              
        //   window.document.location.reload()
        //   }, 1500);
        // for (i=0;i<9;i++){document.getElementsByClassName('tableData')[i].innerText = ''
        //          document.getElementsByClassName('tableData')[i].innerHTML = '<span class="writeHere"></span>'
        //          document.querySelectorAll('hr')[i].style.display= 'none'}
} 

export default GameReset