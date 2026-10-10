let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); // again we have to hide winner
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO) {//turn of playerO 
            box.innerText = "O";
            turnO = false;
        } else{//turn of playerX bcz of O is false
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => { //disabled box
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => { //enabled box
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); //node hide winner is visible that was in the html code hide class
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns) { //for loop to check winning pattern that we took it as a array
        // console.log(pattern[0], pattern[1], pattern[2]); //individual index of pattern
        // console.log(
        //     boxes[pattern[0]].innerText,  //position1 text
        //     boxes[pattern[1]].innerText, //position2 text
        //     boxes[pattern[2]].innerText  //position3 text
        // ); //box value like value of the box x or O ander ni value mate inner text atle ander ni value dekhade
        // uper nu avi rite oan lakhi sakie


        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") { // its not be empty
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);