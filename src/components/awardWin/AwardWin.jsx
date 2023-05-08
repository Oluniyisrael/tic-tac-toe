function AwardWin(Number,props){
    const refresh = ()=>{props.refresh()}
    const squares = document.getElementsByClassName('tableData');

    document.getElementById('line').style.display = 'block';
          if (squares[Number].innerText === 'X') {
            props.addX()          }
          else{props.addO()}
          refresh()
          
}

export default AwardWin