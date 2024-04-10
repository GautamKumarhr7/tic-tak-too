const cells = document.querySelectorAll('.collum');
const resetButton = document.querySelector('#reset');
let currentPlayer = 'X';

cells.forEach(collum => {
	collum.addEventListener('click', () => {
		if (collum.textContent === '') {
			collum.textContent = currentPlayer;
			checkWin();
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});

resetButton.addEventListener('click', () => {
	cells.forEach(collum => {
		collum.textContent = '';
	});
	currentPlayer = 'X';
});

function checkWin() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winningCombos.length; i++) {
		const [a, b, c] = winningCombos[i];
		if (cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer) {
			alert(`${currentPlayer} wins!`);
			reset();
		}
	}
}

function reset() {
	cells.forEach(cell => {
		cell.textContent = '';
	});
	currentPlayer = 'X';
} 