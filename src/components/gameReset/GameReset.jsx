function GameReset() {
        var squares = document.getElementsByClassName('tableData')
        var lines = document.querySelectorAll('hr');
        var writeHere = document.getElementsByClassName('changeNode');
        // setTimeout(() => {
            for (let i = 0; i < 9; i++) {
            squares[i].innerText = '';
            lines[i].style.display = 'none';
            writeHere[i].classList = 'writeHere'
          }                                                                              
        //   window.document.location.reload()
        //   }, 1500);
} 

export default GameReset