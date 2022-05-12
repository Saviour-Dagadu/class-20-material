//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takesArrayNum(arr){
    let prod = 1
    for(let i = 0; i < arr.length; i++){
        prod *= arr[i]
    }
    alert(prod)
}

takesArrayNum([1,2,3,4,5])