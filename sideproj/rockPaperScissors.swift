print("Welcome to the rock, paper, scissors game! \n")
print("Player 1: Rock, Paper, or Scissors?")
var playerOne = readLine()

print("Player 2: Rock, Paper, or Scissors?")
var playerTwo = readLine()

var pOne = playerOne.text
var pTwo = playerTwo.text 
var name: String
var other = true
func rps(inputOne : String, inputTwo: String)
{
	
	while other
	{
		if inputOne == "rock" && inputTwo == "scissors"
		{
			print("Player 1 wins!")
			other = false
		}
		else if inputOne == "scissors" && inputTwo == "rock"
		{
			print("Player 2 wins!")
			other = false
		}
		else if inputOne == "paper" && inputTwo == "rock"
		{
			print("Player 1 wins!")
			other = false
		}

		else if inputOne == "paper" && inputTwo == "rock"
		{
			print("Player 2 wins!")
			other = false
		}
		else if inputOne == "paper" && inputTwo == "scissors"
		{
			print("Player 2 wins!")
			other = false
		}
		else if inputOne == "scissors" && inputTwo == "paper"
		{
			print("Player 1 wins! ")
			other = false
		}
		else
		{
			print("Wrong inputs, try again! ")
		}
	}
}
rps(inputOne: pOne, inputTwo: pTwo)
