// function arun ( param1 , parm2){
// // code to be ewxictuted 
// }


// let x = myFunction (3,4);

// function myFunction (a,b){
//     return a * b
// }

// console.log(myFunction);


// function say (name){
//     console.log("hello"+name);
// }

// say ("arun")


// function hypotenuse(m, n){ //outer function 
//     function square (num){  //inner function 
//         return num * num;

//     }
//     return Math.sqrt(square(m) + square(n))  
// }
// console.log(hypotenuse(3,4));



// var area = function (radius){
//     return Math.PI * radius *radius
// };

// console.log(area(5));



// function cource(){ 
//     return "Learning JS";

// }

// console.log(cource());


// var num = 1 ; //global variable

// function showGlobal(){ 
//     console.log(num);// uses the global num 
// }


// showGlobal();

// function showLocal(){
//     var num = 2  // num is local , hides the global num 
//     console.log(num);
// }

// showLocal();


// function showArgument(num){
//     console.log(num);
// }

// showArgument(3);


function counter(){
    var index = 0 ;
    function increment(){
        index = index + 1;
        console.log(index);
        return index;
    }
    return increment;
}

var userIncrement = counter();
var adminIncrement = counter();


userIncrement();
userIncrement();
adminIncrement();
adminIncrement();
adminIncrement();


















