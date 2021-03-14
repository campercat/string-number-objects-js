//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value.
//1 Code Answer
let dogQuestion = "But what if I like dogs more than cats?"
console.log(dogQuestion.length)

//1 Result Answer
// 39


//2
//Write a variable and call it noms and have the value of the name any type of snack you like,
//use the .length method to determine the length of the string value.
//2 Code Answer
let noms = 'fruits'
console.log(noms.length)

//2 Result Answer
// 6


//3
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let boba = "I have no interest in Boba"
console.log(boba.replace("no", "some"))

//3 Result Answer:
// I have some interest in Boba


//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let str = "Tell me whyyyy!                 "
console.log(str.trim())

//4 Result Answer
// Tell me whyyyy!


//5
// Convert 1400 into a string.
//5 Code Answer:
let number = 1400
let numberToStr = number.toString()
console.log(numberToStr)

//5 Result Answer:
// "1400"


//6
//Convert the boolean true and false into integers
//6 Code Answer:
console.log(Number(true))
console.log(Number(false))

//6 Result Answer:
// 1
// 0


//7
// Convert the string "02130" into an integer
//7 Code Answer:
console.log(Number("02130"))

//7 Result Answer:
// 2130


//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let str2 = "Fighting Evil by Moonlight"
console.log(str2.includes("Moonlight"))

//8 Result Answer:
// true


//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let iLove = "I love"
let favFood = " dumplings"
let favDrink = " and apple cider"
let wholeSentence = iLove.concat(favFood, favDrink, "!")
console.log(wholeSentence)

//9 Result Answer:
// I love dumplings and apple cider!


//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?",
//use the .length method to determine the length of the string value.

//10 Code Answer: DUPLICATED QUESTION

//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:
let smallest = Math.min(85, -3, 5, 93.2, -42.4)
console.log(smallest)

//11 Result Answer:
// -42.4


//12
//Print to the console a random number between 1 to 10.
//12 Code Answer:
console.log(Math.floor(Math.random()*(10-1+1))+1)

//12 Result Answer:
// 5

//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
console.log(Math.floor(Math.random()*(21-14+1))+14)
//13 Result Answer:
// 16


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned

//14 Code Answer:


//14 Result Answer: