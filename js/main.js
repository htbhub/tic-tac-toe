//---constants---//
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

//---app's state variables---//

let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let board = Array.from(cells);

//--event listeners--//

cells.forEach((cell) => {
	cell.addEventListener('click', handleClick);
})

//---functions---//

function handleClick(clickEvt) {
	let cell = clickEvt.target;
	//show a message to choose another cell
	if(cell.innerText == 'X' || cell.innerText == 'O') return;
	cell.innerText = currentPlayer;
	checkForWinner();
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
}	

function checkForWinner(){
	winningCombos.forEach(comboArray =>{
		//check to see that every index of comboArray is equal to currentPlayer
		let check = comboArray.every(index => board[index].innerText == currentPlayer);
		if(check){
			alert(currentPlayer + ' has won!');
		}
})}

function newGame(){
	currentPlayer = 'X';
	board.forEach((cell) => {
		cell.innerText = '';
	});
}
