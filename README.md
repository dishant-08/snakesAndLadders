
# Tic Tac Toe in JavaScript

## Sequence Of Game
1. Start the Game
2. There can be 3 or more than 3 players but we can Scale the program to N players. 
3. Store their Names.
4. Need to validate the Input (Make sure player are Marking inside the grid)
5. Player marked at Same place
6. players should play turnwise 

7. Game Continue Until 
  - Any player reaches at 100th positon (Player wins)
  - More moves are left

## Requirements

1. Store their names
2. CurrentPlayer, nextPlayer
3. store the Board
4. game status
5. Game Orchestration(Something to simulates turn by turn )
6. Roll the dice.

## Game Logic

Here i have used Map data structure in snakes and ladder game. we can easily keep track of position irrespective of players moving anywhere with of help of keys in map , keys represent the positions on board .


1. Store player names and each will roll the dice . According to dice , we will get our move.
Here I have used array for keeping track of positions and reduce function. 

2. Push the move to the array. We have created each player a separate array to keep track of position of players

3.  We will get sum of all previous move of player via reduce function. That sum would be checked in snakes and ladders, to be  checked it is  pre exists or not to move the position ,this store in sum variable 

4.  After calculating the sum, we will pop the move from array , to check it contains snakes or ladders 

5.  We empty the array , push the result of step 4 to array . We are emptying the array because if postion is changing via snake or  ladders and push to array without emptying sum of all past moves will be incorrect 

6.  The players of snakes and ladders are moving after every move. After player moves to another position, the previous position and current would have same player . So previous position must change to past value. Here we get the Map data structure optimal use . So intially the values of keys and values are same . We have made a new function for getting the key and Set that key value to previous position.



