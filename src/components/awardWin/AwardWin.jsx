function AwardWin(Number,props){
    const refresh = ()=>{props.refresh()}
    const squares = document.getElementsByClassName('tableData');
          if (squares[Number].innerText === 'X') {
            props.addX()          }
          else{props.addO()}
          refresh()
          //
          for(let i = 0; i < (document.getElementsByClassName('writeHere').length) ; i++){
            document.getElementsByClassName('writeHere')[i].className = 'changeNode'
            
          }
          //

}

export default AwardWin