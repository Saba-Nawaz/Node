//show the massage
//console.log("hello");

//----------------------------------------------------
// After 30 sec print ms the massage
//setTimeout(function(){
  //console.log("30 sec pass");
//},3000);

//---------------------------------------------------
// here is poting check for specific limit of the number
//var time=0;
//var timer =setInterval(function(){
  //time +=2;
  //console.log(time +"30 sec pass");
  //if (time > 5){
    //clearInterval(timer);
  //}
//},2000);

//----------------------------------------------------
//making the global variable
//console.log(__dirname);

//--------------------------------------------------
//normal function statement
//function test(){
//  console.log("hello");
//}
//test();


//----------------------------------------------------
//callig a fun toan other fun
//function calling(fun){
  //fun();
//}

//function expression
//var expression =function(){
  //console.log("hello js");
//}

//callig a fun
//calling(expression);


//-------------------------------------------------------------------
//using module requirest
var recorder=require('./rec');
// calling the 1st function
console.log(recorder.record(['name','batch','year']));

//calling the 2nd function
console.log(recorder.add(5,6));

console.log(recorder.add(recorder.pi,5));
