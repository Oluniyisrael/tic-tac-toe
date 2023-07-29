function AwardWin(Number,props){
    const refresh = ()=>{props.refresh()}
    const squares = document.getElementsByClassName('tableData');
          if (squares[Number].innerText === 'X') {
            props.addX()          }
          else{props.addO()}
          refresh()
          for(let i = 0; i < document.querySelectorAll('section').length; i++){
            document.querySelectorAll('section')[i].className ='changeNode'
            }
          //

}

export default AwardWin