
const snakeAndLadders = (xName , yName , zName) => {

    const players =  {
         X : xName,
         Y : yName,
         Z : zName
    }
  
  
      let currentPlayer =  "X";
  
      const nextPlayer = {
          X : "Y",
          Y : "Z",
          Z : "X"
      }
  
      const board = new Map();
  
  for(let i =0 ; i<=100 ; i++){
      board.set(i,i)
  }
  const reduceArr = {
      X : [],
      Y : [],
      Z : []
  }
  
  function getKey(map, targetValue) {
      for (let [key, value] of map.entries()) {
          if (value === targetValue) {
              return key;
          }
      }
      // If the value is not found, you can return a default value or null.
      return null; // or any default value you prefer
  }
  
  const snakesNladder = {
      28: 10,
      37: 3,
      48: 16,
      75: 32,
      94: 71,
      96: 42,
      4: 56,
      12: 50,
      14: 55,
      22: 58,
      41: 79,
      54: 88
  }
  
  
  function computeStatus(){
      
      let sum = reduceArr[currentPlayer].reduce( (v,a) => v + a, 0);
      if (sum >= 100){
          return `${currentPlayer} wins`
      }
      
      return "Ongoing"
  
  }
  function isValidmove(move) {
  
      return (1<=move && move<=100) ;
     }
  
  
  return (player,move) => {
        
      // validate right player n move
      if (player !== currentPlayer){
         return [false , `Not your turn ,  ${currentPlayer}'s turns now `]
      }
          
      if (!isValidmove(move)){
         return[false, `Invalid move ,Try Again`]
      }
  
      // board[move , currentPlayer;
      board.set(0, computeStatus());
      reduceArr[currentPlayer].push( move);
      let sum = reduceArr[currentPlayer].reduce( (v,a) => v + a, 0);
      
      reduceArr[currentPlayer].pop();
      // console.log(Object.keys(snakesNladder).includes('sum))
      if(Object.keys(snakesNladder).includes(sum.toString())){
          reduceArr[currentPlayer].length =0
      reduceArr[currentPlayer].push(snakesNladder[sum] || sum);
      }
      else
      reduceArr[currentPlayer].push(snakesNladder[move] || move);
      
    //   console.log(reduceArr)
      let x = getKey(board , player);
    //   console.log(sum)
      console.log(`${currentPlayer} rolls ${move}`)
      // board.set(board.get(snakesNladder[move] || move), player)
      board.set(snakesNladder[sum] || sum, player)
      board.set(x,x);
      currentPlayer = nextPlayer[currentPlayer]

  
      return[true , board];
   }
};
  
  

module.exports = {snakeAndLadders}