// function abcd(){
//       return function abcd(){} 
// }

// abcd()

// constructor

// function sanchaofBiscuit(){
    
//       this.width = 12;
//       this.height = 22;
//       this.color="brown";

//     }

// var bis1 = new sanchaofBiscuit()
// var bis2 = new sanchaofBiscuit()
// var bis3 = new sanchaofBiscuit()

//normal function jisme this ka istamal ho

// function circularButton(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.pressable = true;
// }

// var redbtn = new circularButton("red");
// var greenbtn = new circularButton("green");

// var abcd = function abcd(){

// }

//iife => immediately invoked function  expression
//function ko turant chale ki kala istarahki 

// var ans = (function(){
//   var privateval = 12;
 
//   return {
//     getter: function(){
//       console.log(privateval);
//     },
//     setter: function(val){
//           privateval = val;
//     }
//   }
// })()

// ans.privateval = 24
// console.log(ans.getter())

// var obj = {name: "harsh"}
// obj

//prototypal inheritance

// var human = {
//     canFly : false,
//     cantalk : true,
//     canwalk : true,
//     haveEmotions: true
// }

// var sheriyansstudents = {
//     canMakeAmazingWebsites : true,
//     canMakeAwesomeWebsites: true
// }

// sheriyansstudents.__proto__ = human

// sheriyansstudents.canFly

// var button = document.querySelector("button");

// button.addEventListener("click", function () {
//     this.style.color = "red";
// });

// function abcd(val1, val2, val3){
//      console.log(this.age);
// }

// var obj = {age:24};

// // abcd.call(obj,1,2,3);

// // abcd.apply(obj, [1,2,3])

// function abcd(){
//     console.log(this);
// }

// var obj = {age:24};

// var bindedfnc = abcd.bind(obj)
// bindedfnc()


// //pure function
// function abcd(Val){
//   return Math.random()*Val
// }

// abcd(2)
// abcd(2)

// var abcdef = 12;

// function abcd(a,b){
//           abcdef = 24;
//           return a*b;
// }

// var ans1 = abcd(1,2);
// var ans2 = abcd(1,2);

