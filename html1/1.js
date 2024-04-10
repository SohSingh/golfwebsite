// word vs keyword
// chacha =word
// for = keyword
// bhaiya = word

// hoisting - variables and functions are hoisted which means declaration is moved on top
// of the cod


// console.log(a);

// var a= 12;

// undefined (not known) and not defined (no existence) 

// types in js
//primitive and reference

// primitives = number,string,null,undefined,
// refrence = [] () {} 

// for(var i = 25;i<=50;++i){
//     console.log(i)
// }

// var arr = [1,2,3,4,5,6]
// arr.unshift(0);
// arr.shift();
// arr.pop();
// console.log(arr)


/// difference between
// var let const


// js - es5 old  var
//      es6 new  let const

//var function scoped hota hai
//var adds itself to the window object



// let braces scoped hota hai
//let doesnt add

// function abcd(){
         
//     for(var i = 1;i<12;i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// abcd()

// var a = [1,2,3,4]

// var b = [...a];

// a.pop();
// console.log(b)

// var obj = {name : "harsh"};
// var copyobj = {...obj};

// console.log(copyobj);
// copyobj.name = "harshita"

// foreach

// var a= [1,2,3,2,3,2,23,2,3,2];

// a.forEach(function(val){
//     console.log(val+2);
// })


// var obj = {
//     name : "harsh",
//     age : 23,
//     city: "bhopal"
// }

// for(var key in obj){
//     console.log(obj[key]);
// }

// var a = 12;

// do{
//     console.log("hey");
//     a++;
// }
// while(a < 10)

// callback fncs
// 

// setTimeout(function(){
//      console.log("error")
// }, 2000);

// function abcd(a){
//     a();
// }

// abcd(function(){console.log("hello");})

var arr = [1,2,34,5]

// arr[-1] = 2;

// arr  = {
//     0:1,
//     1:234,
//     2:45,
//     3:90
// }

// console.log(arr)



var a = {
    name : "harsh",
    age: 24
}

delete a.age;
delete a.name;

console.log(Array.isArray(arr))