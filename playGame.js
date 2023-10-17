
const {snakeAndLadders} = require("./game")
let play = snakeAndLadders("p1", "p2","p3")


const printBoard = (board) => {
    // console.log(`------${board[0]}------`)
    let rows =1 ;
for(let i =100 ; i>=1 ; i-=10){
   if (rows % 2 !== 0) {
    console.log(`${board.get(i)}  ${board.get(i - 1)}  ${board.get(i - 2)}  ${board.get(i - 3)}  ${board.get(i - 4)}  ${board.get(i - 5)}  ${board.get(i - 6)}  ${board.get(i - 7)}  ${board.get(i - 8)}  ${board.get(i - 9)}`);
} else {
    if (i === 10) {
        console.log(`${board.get(0)}  ${board.get(i - 9)}  ${board.get(i - 8)}  ${board.get(i - 7)}  ${board.get(i - 6)}  ${board.get(i - 5)}  ${board.get(i - 4)}  ${board.get(i - 3)}  ${board.get(i - 2)}  ${board.get(i - 1)}  ${board.get(i)}`);
    } else {
        console.log(`${board.get(i - 9)}  ${board.get(i - 8)}  ${board.get(i - 7)}  ${board.get(i - 6)}  ${board.get(i - 5)}  ${board.get(i - 4)}  ${board.get(i - 3)}  ${board.get(i - 2)}  ${board.get(i - 1)}  ${board.get(i)}`);
    }
}

rows++;

 
    }
}

let boardorMessage, result;

 function rollDice(){
 return (Math.floor(Math.random()*6) ) + 1;
 }
console.log(rollDice);


[result, boardorMessage] = play("X",rollDice());


[result, boardorMessage] = play("Y",rollDice());
[result, boardorMessage] = play("Z",rollDice());

    if(result){
    printBoard(boardorMessage);
}else{
    console.log(boardorMessage);
}

































// const printBoard = (board) => {
//     console.log(`------${board[0]}------`)
//     let rows =1 ;
//     for (let i = 100; i >= 1; i -= 10) {
//          if(rows % 2 !==0){
//          console.log(`${board[i] || i}  ${board[i-1] || i-1}  ${board[i-2]|| i-2}  ${board[i-3] || i-3}  ${board[i-4] || i-4}  ${board[i-5]|| i-5}  ${board[i - 6 ] || i -6 }  ${board[i-7] || i-7}  ${board[i-8]|| i-8}  ${board[i-9]|| i-9} `)
//          }
//          else{
//              console.log(`${board[i-9] || i-9}  ${board[i-8] || i-8}  ${board[i-7] || i-7}  ${board[i-6] || i-6}  ${board[i-5] || i-5}  ${board[i-4] || i-4}  ${board[i-3] || i-3}  ${board[i-2] || i-2}  ${board[i-1] || i-1}  ${board[i] || i}`);

//          }
//          rows++
 
//     }
// };