import func darwin.arc4random
import func darwin.arc4random_uniform

var t: [String] = ["Rock", "Paper", "Scissors"]

let computer = t[Int(arc4random_uniform(2))]

var playa = false 

while playa == false
{
	print("Rock, Paper, Scissors?")
    var player = readLine()
    if player == computer{
        print("Tie!")
    }
    else if player == "Rock"
    {
        if computer == "Paper"
        {
            print("You lose!", computer, "covers", player)
        }
        else
        {
            print("You win!", player, "smashes", computer)
        }
    }
    else if player == "Paper"
    {
        if computer == "Scissors"
        {
            print("You lose!", computer, "cut", player)
        }
        else
        {
            print("You win!", player, "covers", computer)
        }
    }
    else if player == "Scissors"
    {
        if computer == "Rock"
        {
            print("You lose...", computer, "smashes", player)
        }
        else
        {
            print("You win!", player, "cut", computer)
        }
    }
    else{
        print("That's not a valid play. Check your spelling!")
    	}
    // #player was set to True, but we want it to be False so the loop continues
    // player = False
    computer = Int(arc4random_uniform(2))
}