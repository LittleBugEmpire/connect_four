document.addEventListener('DOMContentLoaded',()=>{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    for(var i=0, len= squares.length; i<len; i++)

    (function(index){
        //add an onclick to each square in your grid
        squares[i].onclick = function(){
            //if the square below your current square is taken, you can go ontop of it
            if(squares[index+7].classList.contains('taken')){
                if(currentPlayer === 1){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    //change the player
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if(currentPlayer === 2) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    //change the plyer
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                //if the square below
            }else alert('cant go here')
        }
    })(i)
//check the board for a win or lose
function checkBoard(){
    const winningArrays = [
        [0,1,2,3],[41,40,39,38]
    ]
    //now take the 4 valus in each winningArrays and plug them into squares

    for(let y=0; y<winningArrays.length; y++){
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]

        //now check those arrays to see if they all have the class of player - one
        if( square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one')){
                result.innerHTML = 'Player One Wins!'
            }
           
        //now check those arrays to see if they all have the class of player - two
        else if(square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')){
                result.innerHTML = 'Player Two Wins!'
            }
    }
}

//add an eventListener to each square that will trigger the checkBoard function on click

squares.forEach(square => square.addEventListener('click',checkBoard))

})