

var fowardString = "spoons"
var reversed = fowardString.characters.reversed()

for character in reversed {
	print("\(character)")
}

var name = "Hanna"
var customizedBirthdayCheer = "Happy Birthday, \(name)!"

print(customizedBirthdayCheer)

var doggyDiet = "Mia eats 10 lbs of dog food per month."

// Define variables
var dogName = "Zebedee"
var lbsPerMonth: Double = 25

// Same string, this time with the variables inserted 
doggyDiet = "\(dogName) eats \(lbsPerMonth)lbs of dog food per month"

print(doggyDiet)

// We can also use string interpolation with expressions
var kilosInALb = 0.45
var metricDoggyDiet =  "\(dogName) eats \(kilosInALb * lbsPerMonth)kilos of dog food per month"

print(metricDoggyDiet)

let cast = ["Vivien", "Marlon", "Kim", "Karl"]
print(cast.contains("Marlon"))
// Prints "true"
print(cast.contains("James"))
// Prints "false"
let aString = "Some search text"
print(aString)
let replaced = String(aString.map {
    $0 == " " ? "+" : $0
})
print(replaced)

func rndm(min: Int, max: Int) -> Int {
    if max < min {
        fatalError("The max value should be greater than the min value.")
    }
    if min == max {
        return min
    }
    return Int(arc4random_uniform(UInt32((max - min) + 1))) + min
}
rndm(min: 1, max: 6) //dice roll


