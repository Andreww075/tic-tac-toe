const getDate = document.querySelector('.date');

let myDate = new Date().getFullYear();

getDate.innerHTML = myDate;

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


const sections = document.querySelectorAll('.sections')
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const section5 = document.querySelector('.section5');
const section6 = document.querySelector('.section6');
const section7 = document.querySelector('.section7');
const section8 = document.querySelector('.section8');
const section9 = document.querySelector('.section9');
const modalContainer = document.querySelector('.modal-container');
const myModal = document.querySelector('.modal');
const btnReset = document.querySelector('.btn-reset');
const buttonModal = document.querySelector('.button-modal');
//const optionPvp = document.getElementById('option-pvp');
const selectMode = document.querySelector('.select-mode');
const inputPlayerOne = document.getElementById('player-one');
const inputPlayerTwo = document.getElementById('player-two');
const btnChooseName = document.getElementById('choose-name');
const paraPlayerOne = document.querySelector('.name-player-one');
const paraPlayerTwo = document.querySelector('.name-player-two');
const scorePlayerOne = document.querySelector('.score-player-one');
const scorePlayerTwo = document.querySelector('.score-player-two');
const pModal = document.querySelector('.p-modal');

let scorePlayer1 = 0;
let scorePlayer2 = 0;

namePlayerOne = '';
namePlayerTwo = '';



let Player = (name, score) => {
	return {name, score}
}


let player1 = Player('', 0);
let player2 = Player('', 0);

let myArray = ['O'];



btnChooseName.addEventListener('click', () => {
	player1.name = inputPlayerOne.value;
	player2.name = inputPlayerTwo.value;

	console.log(player1.name);
	console.log(player2.name);

	paraPlayerOne.innerHTML = player1.name;
	paraPlayerTwo.innerHTML = player2.name;

	btnChooseName.addEventListener('click', () => {
  // ...

  // Llama a la función de movimiento de la máquina después
  // de que el jugador humano haga su movimiento
  sections.forEach((section) => {
    section.addEventListener('click', () => {
      section1.addEventListener('click', () => {

			getSection1();
			getWin();
		});

      makeMachineMove();
    });
  });
});

	if (inputPlayerOne.value !== '' && inputPlayerTwo.value !== '') {
		section1.addEventListener('mouseover', mousedownSection1);
		section2.addEventListener('mouseover', mousedownSection2);
		section3.addEventListener('mouseover', mousedownSection3);
		section4.addEventListener('mouseover', mousedownSection4);
		section5.addEventListener('mouseover', mousedownSection5);
		section6.addEventListener('mouseover', mousedownSection6);
		section7.addEventListener('mouseover', mousedownSection7);
		section8.addEventListener('mouseover', mousedownSection8);
		section9.addEventListener('mouseover', mousedownSection9);

		section1.addEventListener('click', () => {

			getSection1();
			getWin();
		});

		section2.addEventListener('click', () => {
			getSection2();
			getWin();
		});

		section3.addEventListener('click', () => {
			getSection3();
			getWin();
		});

		section4.addEventListener('click', () => {
			getSection4();
			getWin();
		});

		section5.addEventListener('click', () => {
			getSection5();
			getWin();
		});

		section6.addEventListener('click', () => {
			getSection6();
			getWin();
		});

		section7.addEventListener('click', () => {
			getSection7();
			getWin();
		});

		section8.addEventListener('click', () => {
			getSection8();
			getWin();
		});

		section9.addEventListener('click', () => {
			getSection9();
			getWin();
		});

		btnReset.addEventListener('click', () => {
			getDeleteButton();
		});

		buttonModal.addEventListener('click', () => {
			getDeleteButton();
			deleteModal();
		});
	} else {
		console.log('yee');
	}
});











////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////






function mousedownSection1() {
	if (section1.innerHTML === 'X' || section1.innerHTML === 'O') {
		section1.style.cursor = 'default';
		section1.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section1.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section1.style.cursor = 'pointer';
	}
}

function getSection1() {

	myArray;
	console.log(myArray.slice(-1));

	if (section1.innerHTML !== '') {
		section1.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section1.innerHTML = 'O';
		myArray.push(section1.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section1.innerHTML = 'X';
		myArray.push(section1.innerHTML);
	}
}

function mousedownSection2() {
	if (section2.innerHTML === 'X' || section2.innerHTML === 'O') {
		section2.style.cursor = 'default';
		section2.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section2.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section2.style.cursor = 'pointer';
	}
}

function getSection2() {
	myArray;
	console.log(myArray.slice(-1));

	if (section2.innerHTML !== '') {
		section2.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section2.innerHTML = 'O';
		myArray.push(section2.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section2.innerHTML = 'X';
		myArray.push(section2.innerHTML);
	}
}

function mousedownSection3() {
	if (section3.innerHTML === 'X' || section3.innerHTML === 'O') {
		section3.style.cursor = 'default';
		section3.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section3.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section3.style.cursor = 'pointer';
	}
}

function getSection3() {
	myArray;
	console.log(myArray.slice(-1));

	if (section3.innerHTML !== '') {
		section3.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section3.innerHTML = 'O';
		myArray.push(section3.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section3.innerHTML = 'X';
		myArray.push(section3.innerHTML);
	}
}

function mousedownSection4() {
	if (section4.innerHTML === 'X' || section4.innerHTML === 'O') {
		section4.style.cursor = 'default';
		section4.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section4.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section4.style.cursor = 'pointer';
	}
}

function getSection4() {
	myArray;
	console.log(myArray.slice(-1));

	if (section4.innerHTML !== '') {
		section4.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section4.innerHTML = 'O';
		myArray.push(section4.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section4.innerHTML = 'X';
		myArray.push(section4.innerHTML);
	}
}

function mousedownSection5() {
	if (section5.innerHTML === 'X' || section5.innerHTML === 'O') {
		section5.style.cursor = 'default';
		section5.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section5.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section5.style.cursor = 'pointer';
	}
}

function getSection5() {
	myArray;
	console.log(myArray.slice(-1));

	if (section5.innerHTML !== '') {
		section5.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section5.innerHTML = 'O';
		myArray.push(section5.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section5.innerHTML = 'X';
		myArray.push(section5.innerHTML);
	}
}

function mousedownSection6() {
	if (section6.innerHTML === 'X' || section6.innerHTML === 'O') {
		section6.style.cursor = 'default';
		section6.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section6.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section6.style.cursor = 'pointer';
	}
}

function getSection6() {
	myArray;
	console.log(myArray.slice(-1));

	if (section6.innerHTML !== '') {
		section6.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section6.innerHTML = 'O';
		myArray.push(section6.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section6.innerHTML = 'X';
		myArray.push(section6.innerHTML);
	}
}

function mousedownSection7() {
	if (section7.innerHTML === 'X' || section7.innerHTML === 'O') {
		section7.style.cursor = 'default';
		section7.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section7.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section7.style.cursor = 'pointer';
	}
}

function getSection7() {
	myArray;
	console.log(myArray.slice(-1));

	if (section7.innerHTML !== '') {
		section7.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section7.innerHTML = 'O';
		myArray.push(section7.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section7.innerHTML = 'X';
		myArray.push(section7.innerHTML);
	}
}

function mousedownSection8() {
	if (section8.innerHTML === 'X' || section8.innerHTML === 'O') {
		section8.style.cursor = 'default';
		section8.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section8.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section8.style.cursor = 'pointer';
	}
}

function getSection8() {
	myArray;
	console.log(myArray.slice(-1));

	if (section8.innerHTML !== '') {
		section8.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section8.innerHTML = 'O';
		myArray.push(section8.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section8.innerHTML = 'X';
		myArray.push(section8.innerHTML);
	}
}

function mousedownSection9() {
	if (section9.innerHTML === 'X' || section9.innerHTML === 'O') {
		section9.style.cursor = 'default';
		section9.disabled = false;
	} else if (myArray.slice(-1) == 'X') {
		section9.style.cursor = 'pointer';
	} else if (myArray.slice(-1) == 'O') {
		section9.style.cursor = 'pointer';
	}
}

function getSection9() {
	myArray;
	console.log(myArray.slice(-1));

	if (section9.innerHTML !== '') {
		section9.disabled = true;
		myArray;
	} else if (myArray.slice(-1) == 'X') {
		section9.innerHTML = 'O';
		myArray.push(section9.innerHTML);
	} else if (myArray.slice(-1) == 'O') {
		section9.innerHTML = 'X';
		myArray.push(section9.innerHTML);
	}
}





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function hasWinningLine(list) {
	return list[0] === list[1] && list[1] === list[2] && list[0] !== '';
}


function getWin() {

	if (section1.innerHTML === 'X' && section2.innerHTML === 'X' && 
		section3.innerHTML === 'X' || section4.innerHTML === 'X' && 
		section5.innerHTML === 'X' && section6.innerHTML === 'X' ||
     	section7.innerHTML === 'X' && section8.innerHTML === 'X' && 
		section9.innerHTML === 'X' || section1.innerHTML === 'X' && 
		section4.innerHTML === 'X' && section7.innerHTML === 'X' ||
     	section2.innerHTML === 'X' && section5.innerHTML === 'X' && 
     	section8.innerHTML === 'X' || section3.innerHTML === 'X' && 
     	section6.innerHTML === 'X' && section9.innerHTML === 'X' ||
     	section1.innerHTML === 'X' && section5.innerHTML === 'X' && 
     	section9.innerHTML === 'X' || section3.innerHTML === 'X' && 
     	section5.innerHTML === 'X' && section7.innerHTML === 'X') {

		console.log('win');

		pModal.innerHTML = player1.name.toUpperCase();

		scorePlayer1 += 1;
		player1.score = scorePlayer1;

		scorePlayerOne.innerHTML = player1.score;

		function addModal() {
			modalContainer.classList.remove('modal-ctn');
			myModal.classList.remove('my-modal');
		}

			setTimeout(addModal, 100);
	} else if(section1.innerHTML === 'O' && section2.innerHTML === 'O' && 
			section3.innerHTML === 'O' || section4.innerHTML === 'O' && 
			section5.innerHTML === 'O' && section6.innerHTML === 'O' ||
	     	section7.innerHTML === 'O' && section8.innerHTML === 'O' && 
			section9.innerHTML === 'O' || section1.innerHTML === 'O' && 
			section4.innerHTML === 'O' && section7.innerHTML === 'O' ||
	     	section2.innerHTML === 'O' && section5.innerHTML === 'O' && 
	     	section8.innerHTML === 'O' || section3.innerHTML === 'O' && 
	     	section6.innerHTML === 'O' && section9.innerHTML === 'O' ||
	     	section1.innerHTML === 'O' && section5.innerHTML === 'O' && 
	     	section9.innerHTML === 'O' || section3.innerHTML === 'O' && 
	     	section5.innerHTML === 'O' && section7.innerHTML === 'O') {

			console.log('win');

			pModal.innerHTML = player2.name.toUpperCase();

			scorePlayer2 += 1;
			player2.score = scorePlayer2;

			scorePlayerTwo.innerHTML = player2.score;

			function addModal() {
				modalContainer.classList.remove('modal-ctn');
				myModal.classList.remove('my-modal');
			}

			setTimeout(addModal, 100);
	}
};

function deleteModal() {
	modalContainer.classList.add('modal-ctn');
	myModal.classList.add('my-modal');
}

function getDeleteButton() {
	section1.innerHTML = '';
	section2.innerHTML = '';
	section3.innerHTML = '';
	section4.innerHTML = '';
	section5.innerHTML = '';
	section6.innerHTML = '';
	section7.innerHTML = '';
	section8.innerHTML = '';
	section9.innerHTML = '';
	myArray = ['O'];
}






////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////