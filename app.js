// playing board which is changable via click

let board = [
  [NaN, NaN, NaN],
  [NaN, NaN, NaN],
  [NaN, NaN, NaN]
];

// DOM start


// bind click event 

let eachSlotArr = document.querySelectorAll('button');
let count = 1;
let signal = 'X'
let winner;
let orNot = false;
eachSlotArr.forEach(eachSlot => {
  eachSlot.addEventListener('click', e => {
    e.preventDefault()

    // make a difference at the board

    count % 2 === 0 ? signal = 'O' : signal = 'X';

    e.target.innerText = signal;
    e.target.value = signal;
    e.target.disabled = true;
    count++;
    console.log(count);
    checker(e.target.classList[1], e.target.value);
    
    winLoseChecker(count);
    rotateBoard(count);
  })
})

//val = certain class
//check the situation at the board
let checker = function(eachClass, val) {
	if (eachClass === 'slot1') board[0][0] = val;
	if (eachClass === 'slot2') board[0][1] = val;
	if (eachClass === 'slot3') board[0][2] = val;
	if (eachClass === 'slot4') board[1][0] = val;
	if (eachClass === 'slot5') board[1][1] = val;
	if (eachClass === 'slot6') board[1][2] = val;
	if (eachClass === 'slot7') board[2][0] = val;
	if (eachClass === 'slot8') board[2][1] = val;
	if (eachClass === 'slot9') board[2][2] = val;			
}

let xCounter = document.getElementsByClassName('xwins')[0];
let oCounter = document.getElementsByClassName('owins')[0];

xCounter.value = 0;
oCounter.value = 0;

let winLoseChecker = function(count){
	let whoWin;

	let slot1 = board[0][0];
    let slot2 = board[0][1];
    let slot3 = board[0][2];
    let slot4 = board[1][0];
    let slot5 = board[1][1];
    let slot6 = board[1][2];
    let slot7 = board[2][0];
    let slot8 = board[2][1];
    let slot9 = board[2][2];


    if (slot1 === slot2 && slot2 === slot3){
    	alert(slot1 + ' wins'); 
    	whoWin = slot1; 
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();
    	orNot = true;
    }
    	
    if (slot4 === slot5 && slot5 === slot6){
    	alert(slot4 + ' wins'); 
    	whoWin = slot4; 
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 
    if (slot7 === slot8 && slot8 === slot9){
    	alert(slot7 + ' wins');
    	whoWin = slot7;
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 

    if (slot1 === slot4 && slot4 === slot7){
    	alert(slot1 + ' wins');
    	whoWin = slot1;
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 
    if (slot2 === slot5 && slot5 === slot8){
    	alert(slot2 + ' wins');
    	whoWin = slot2; 
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 
    if (slot3 === slot6 && slot6 === slot9){
    	alert(slot3 + ' wins');
    	whoWin = slot3; 
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 
    
    if (slot1 === slot5 && slot5 === slot9){
    	alert(slot1 + ' wins');
    	whoWin = slot1; 
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 
    if (slot3 === slot5 && slot5 === slot7){
    	alert(slot3 + ' wins');
    	whoWin = slot3;
    	whoWin === 'X' ? xCounter.value++ : oCounter.value++;
    	disableAll();	
    	orNot = true;
    } 

    if (count === 10 && !orNot) {
    	alert('draw');
    }

    xCounter.innerText = xCounter.value;
    oCounter.innerText = oCounter.value;
}

document.getElementsByClassName('reset')[0].addEventListener('click', e => {
	e.preventDefault();
	resetGame();
})

let resetGame = function () {
	eachSlotArr.forEach(eachBtn => {
		eachBtn.innerText = ' ';
		eachBtn.disabled = false;
	})
	count = 1;
	newBoard(board);
	for(var i=0; i<lines.length; i++){
		lines[i].style.display = 'none'
	}
}

let disableAll = function(){
	eachSlotArr.forEach(eBtn => {
		eBtn.disabled = true;
	})
}

let xname = document.getElementsByClassName('xname')[0];
let oname = document.getElementsByClassName('oname')[0];

let getName = function(){
	let xman = prompt("Who wanna Goes For X?", 'Xman');
	let oman = prompt("Who wanna Goes for O?", 'Oman');

	if(xman !== null) xname.innerText = xman;
	if(oman !== null) oname.innerText = oman;
}

let newBoard = function(board){
	for(let i=0; i<board.length; i++){
		for(let j=0; j<board[i].length; j++){
			board[i][j] = NaN
		}
	}
}
getName();


// line control

let lines = document.getElementsByClassName('line');

// 90deg

let wrapper = document.getElementsByClassName('wrapper')[0];
let rotateBoard = function(count){
	if(count%2 === 0){
		// wrapper.style.transform = 'rotate(90deg)';
	} else {
		wrapper.style.transform = 'rotate(0)';
	}
}
