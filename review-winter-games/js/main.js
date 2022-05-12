//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function takesArrayNum(array){
    let evenArr = []
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 === 0){
            evenArr.push(array[i])
        }
    }
    console.log(evenArr)
}

takesArrayNum([1,2,3,4,5,6,7,8,9,10])

function onlyEvens(nums){
    let evens = []

    nums.forEach(n => {
        if(n % 2 === 0){
            evens.push(n)
        }        
    });

    return evens
}

console.log(onlyEvens([1,2,3,4,5,6]))

