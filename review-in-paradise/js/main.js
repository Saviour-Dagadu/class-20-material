// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'Fufu and Light Soup'
food = 'Jollof Rice'
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'Hello world'
//alert(str[1])
alert(str.charAt(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takesThreeNums(n1,n2,n3){
    let prod = (n1/n2) * n3
    alert(prod)
}

takesThreeNums(10,5,2)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function consoleLogCuberoots(n){
    console.log(Math.cbrt(n).toFixed(4))
}
consoleLogCuberoots(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function takesMonth(month){
    month = month.toLowerCase()
    if(month == 'june' || month == 'july' || month == 'august' || month == 'september'){        alert('YAY')
    }else{
        alert('Booo')
    }
}
takesMonth('')
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function takesNums(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}

takesNums(25)