//--------------------------------------L O O P S ------------------------------------------------
//Using a recursive function: It calls itself
// let cnt = 0 
// function numbersUTen(limit ) {
//     if(cnt <= limit){
//         console.log(cnt)
//         cnt++
//         numbersUTen(limit)
//     }
// }
// numbersUTen(10)


//Looping through a object 
// let laptop = {
//     make: 'Dell',
//     cpu: '3Ghz',
//     ram: '16GB'
    
// } 
// /* console.log(laptop.make);

// console.log(laptop.cpu);
// console.log(laptop.ram);
// console.log(laptop)

// to display all the keys in a loop
// for (const key in laptop) {
//     console.log(laptop[key])
// }

// let laptop = {

// }
// console.log(laptop);

//Looping through an array
let numbers = [9, 6, 11, 34]
//for(let n of numbers) {
    //console.log(n);
//}

//foreach : expects a call back function 
numbers.forEach( (number, i)=> {
    console.log(number, i);
})



