
// // // // // // // // // // // // // if(true)
// // // // // // // // // // // // // {
// // // // // // // // // // // // //     var age = 25;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // console.log(age);



// // // // // // // // // // // // var are used to declared the varible in the global-scope and function-scope 
// // // // // // // // // // // // function solve()
// // // // // // // // // // // // {
// // // // // // // // // // // //     var age = 25;
// // // // // // // // // // // //     console.log(age);
// // // // // // // // // // // // }
// // // // // // // // // // // // solve();

// // // // // // // // // // // // let variable are always acces inside the block 

// // // // // // // // // // // // {
// // // // // // // // // // // //     let a = 12 ;
// // // // // // // // // // // //     console.log(a);
// // // // // // // // // // // // }

// // // // // // // // // // // const a = 56 ;
// // // // // // // // // // // console.log(a);

// // // // // // // // // // // strict equality v/s Loose Equality 

// // // // // // // // // // // strict equalit is denoted by (===)
// // // // // // // // // // // Loose Equality is denoted by (==)

// // // // // // // // // // console.log() 

// // // // // // // // // // let i = 1 ;
// // // // // // // // // // do{
// // // // // // // // // //     console.log("Namaste Bharat");
// // // // // // // // // //     i++;
// // // // // // // // // // } while(i<=10);

// // // // // // // // // // let i = 1 ;

// // // // // // // // // // for(let i = 0 ; i<=5 ;i++)
// // // // // // // // // // {
// // // // // // // // // //     console.log(i);
// // // // // // // // // // }

// // // // // // // // // // let i = 1 ; 
// // // // // // // // // // while(i < 6){
// // // // // // // // // //     console.log(i);
// // // // // // // // // //     i++;
// // // // // // // // // // 

// // // // // // // // // let name = `harat Namaste`;
// // // // // // // // // console.log(name); 

// // // // // // // // // let 
 
// // // // // // // // // let op1 = 'English';
// // // // // // // // // let op2 = 'HINDI';
// // // // // // // // // console.log(op2.lenght);

// // // // // // // // // console.log(op1.toUpperCase());
// // // // // // // // // console.log(op2.toLowerCase());  


// // // // // // // // // b = op1[5]
// // // // // // // // // console.log(b)

// // // // // // // // // let str = "Babbar";
// // // // // // // // // console.log(str.substring(1))
// // // // // // // // // console.log(str.substring(2 , 4));


// // // // // // // // let sentence = "Hello How Are You"
// // // // // // // // let words = sentence.split(' ')
// // // // // // // // console.log(words)  
// // // // // // // // console.log(words.join('-'));

// // // // // // // // // always treat as a normal character don't treat as a special character 

// // // // // // // // function printNumber(num)
// // // // // // // // {
// // // // // // // //     console.log("Printing Number:", num);
// // // // // // // // }

// // // // // // // // printNumber(34); 

// // // // // // // // function getAverage(num1 , num2)
// // // // // // // // {
// // // // // // // //     let avg = (num1+ num2 ) /2 ;
// // // // // // // //     console.log(avg);
// // // // // // // // }

// // // // // // // // getAverage(4,10); 

// // // // // // // // function getMyname(firstname , lastName)
// // // // // // // // {
// // // // // // // //     let fullname = firstname + lastName;
// // // // // // // //     return fullname;
// // // // // // // // }

// // // // // // // // let ans = getMyname("Love","Babbar")
// // // // // // // // console.log(ans); 

// // // // // // // // const getMultiplication = function(a,b){
// // // // // // // //     return a+b ;
// // // // // // // // }
// // // // // // // // let ans = getMultiplication(2,20);
// // // // // // // // console.log(ans); 

// // // // // // // // function getExp(x,y){
// // // // // // // //     let ans = x**y;
// // // // // // // //     return ans;
// // // // // // // // }

// // // // // // // // console.log(getExp(2,10));  

// // // // // // // //// ARRAYS IN JAVA SCRIPTS ////


// // // // // // // //// objects :- collection of key-value pairs 
// // // // // // // //// In which it is Stack and Heap there is a shallow copy and deep copy which point the same object reference /////
// // // // // // // //// there is a shallow copy and deep copy ////
// // // // // // // // let objects = {
// // // // // // // //     name : 'namaste',
// // // // // // // //     age : 24 , 
// // // // // // // //     weight : 85 , 
// // // // // // // //     height : "6ft 1in",
// // // // // // // //     greet : function(){
// // // // // // // //         console.log("Hello How Are You");
// // // // // // // //     }
// // // // // // // // };
// // // // // // // // console.log(objects) 
// // // // // // // // objects.greet(); 

// // // // // // // ///// array is collection of items / elements ///// 

// // // // // // // // let arr = [1,2,3,4,5];
// // // // // // // // // In javascript we can also created arrays using the array constructor.//
// // // // // // // // // The Arrays constructor can be called with or without the new keyword. // 
// // // // // // // // let brr = new Array('love' , 1 , true);
// // // // // // // // console.log(brr); 
// // // // // // // // brr.push("XYZ");
// // // // // // // // console.log(brr);
// // // // // // // // brr.pop();
// // // // // // // // console.log(brr); 
// // // // // // // /// push insert all the end /// 
// // // // // // // /// pop remove at the end /// 

// // // // // // // //// Shift Remove the first Element from the first ?////
// // // // // // // // brr.shift();
// // // // // // // // console.log(brr);

// // // // // // // // /// Unshifth add the new element at the starting /// \
// // // // // // // // brr.unshift("Bharat");
// // // // // // // // console.log(brr);
// // // // // // // // console.log(typeof(brr)); 

// // // // // // // // brr.splice(1,2,'india');
// // // // // // // // console.log(brr);
// // // // // // // // Some built in method in ARRAY 
// // // // // // // // (PUSH , POP , SHIFT , UNSHIFT , SLICE , MAP , FILTER , SPLIT , REDUCE , SORT , INDEX , FIND)

// // // // // // // // let arr = [10,20,30,11,21,44,51];

// // // // // // // // arr.filter((number) => {
// // // // // // // //     if(number % 2 === 0 )
// // // // // // // //     {
// // // // // // // //         return true ;
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         return false ;
// // // // // // // //     }
// // // // // // // // });  



// // // // // // // // let arr = [1,2,'love','kunal',null];
// // // // // // // // let ans = arr.filter((value) => {
// // // // // // // //     if(typeof(value) === 'number') {
// // // // // // // //         return true;
// // // // // // // //     }
// // // // // // // //     else 
// // // // // // // //     {
// // // // // // // //         return false;
// // // // // // // //     }
// // // // // // // // });
// // // // // // // // console.log(ans);  


// // // // // // // // let arr = [1,2,'Namaste' ,'bharat' , null];
// // // // // // // // let ans = arr.filter((value) => {
// // // // // // // //     if(typeof(value) === "string")
// // // // // // // //     {
// // // // // // // //         return true;
// // // // // // // //     }
// // // // // // // //     else
// // // // // // // //     {
// // // // // // // //         return false;
// // // // // // // //     }
// // // // // // // // })
// // // // // // // // console.log(ans); 



// // // // // // // // let arr = [10,20,30,40,80.5090];
// // // // // // // // let ans = arr.reduce((acc, curr) => {
// // // // // // // //     return acc + curr ; 
// // // // // // // // } , 0 ); 
// // // // // // // // console.log(ans); 


// // // // // // // // let arr = [1,2,21,4,5,23]
// // // // // // // // arr.sort();
// // // // // // // // console.log(arr); 


// // // // // // // // let arr = [ 3,1,2,5,4]
// // // // // // // // arr.sort();
// // // // // // // // console.log(arr); 


// // // // // // // //// FOR EACH //// 

// // // // // // // // let a  = [10,20,30];
// // // // // // // // a.forEach((value,index) => {
// // // // // // // //     console.log("Number:",value,"index:",index);
// // // // // // // // }) 


// // // // // // // ///// for IN ///// 

// // // // // // // ///// enumerable properties of object //// 
// // // // // // // /// print the key value of the object in this ///// 

// // // // // // // //// for(let key in obj){
// // // // // // // ///  console.log(key," ",ogj[key])} ;  

// // // // // // // ///// for_OF 
// // // // // // // // let arr = [10,20,30,40];

// // // // // // // // for(let value of arr)
// // // // // // // // {
// // // // // // // //     console.log(value);
// // // // // // // // }



// // // // // // // ////// FOR_IN , FOR_EACH , FOR_OF ////// 



// // // // // // // //// Call Stack and Hoisting /////
// // // // // // // /// HOISTING :- hoisting is a process in which the variable declaration and function declaration re shifted towards the top of their stack only valid for variable not valid for let and const ////
// // // // // // // // {
// // // // // // // // sayName("Bharat Namaste");
// // // // // // // // function sayName(finalName)
// // // // // // // // {
// // // // // // // //     console.log(finalName);
// // // // // // // // }
// // // // // // // // } 

// // // // // // // //// Class Hoisting :- is a blue print 
// // // // // // // //// object :- instance of Class 


// // // // // // // ////// FUNCTION CALL STACK ....///// 
// // // // // // // ////////// TOTAL NUMBER OF LOOPS IN STACKS ARE 7 ////// 



// // // // // // // ///// function is first class citizes in the javascript 
// // // // // // // /// assign to variable , as arguments , return function , use function in Data structur , 


// // // // // // // // let greet = function(){
// // // // // // // //     console.log("Greeting for the day")
// // // // // // // // }
// // // // // // // // greet();
// // // // // // // // const object1 = new Human();
// // // // // // // // class Human{

// // // // // // // // } 

// // // // // // // function solve(number){
// // // // // // //     return function(number){
// // // // // // //         return number * number ;
// // // // // // //     }
// // // // // // // }
// // // // // // // let ans = solve(5); 

// // // // // // // const arr = [ function(a,b){return a+b}, function(a,b){return a-b}, function(a,b){return a*b}];
// // // // // // // let first = arr[1];
// // // // // // // let ans = first(5,10);
// // // // // // // console.log(ans);

// // // // // // /////// \\\\\\ TEMPORAL DEAD ZONE IN JAVA_SCRIPT ///////\\\
// // // // // // /// if we declare the let and const variable them we can't access the value of that variable 
// // // // // // //// variable Scoping :- Global , Function , Block /////


// // // // // // /// class object 
// // // // // // // Human a = new man();


// // // // // // /// getter and Setter with the help of this we can set the value and get the value of pravite variuable 
// // // // // // /// const student = `const student = {

// // // // // // //     // data property
// // // // // // //     firstName: 'Monica',
    
// // // // // // //     // accessor property(getter)
// // // // // // //     get getName() {
// // // // // // //         return this.firstName;
// // // // // // //     }
// // // // // // // };

// // // // // // // // accessing data property
// // // // // // // console.log(student.firstName); // Monica

// // // // // // // // accessing getter methods
// // // // // // // console.log(student.getName); // Monica

// // // // // // // // trying to access as a method
// // // // // // // console.log(student.getName()); // error 


// // // // // // //// default parameter :- allow to we functions with default values //// 



// // // // // // //////// IN-BUILT DATA TYPES IN JAVASCRIPT ////////// 

// // // // // // //// MATH OBJECTS IN JAVASCRIPT ///// 

// // // // // // console.log(Math.PI);
// // // // // // console.log(Math.max(60,30,24,600,712,89));
// // // // // // console.log(Math.min(60,30,24,600,712,89));
// // // // // // console.log(Math.round(1.6)); 
// // // // // // console.log(Math.floor(1.9));
// // // // // // console.log(Math.ceil(5.7));
// // // // // // console.log(Math.abs(5));
// // // // // // console.log(Math.pow(3,10)); 
// // // // // // console.log(Math.sqrt(5)); 

// // // // // // let a = new Date();
// // // // // // console.log(a); 

// // // // // // let b = new Date('June 20 1990 7:15');
// // // // // // console.log(b);
// // // // // // let newDate = new Date(1998,5,20,7);
// // // // // // console.log(newDate.getDay()); 

 
// // // // // /////// Oject Cloning and Garbage Collector in JavaScript ////// 

// // // // // //// Dynamic nature //// 

// // // // // let obj ={
// // // // //     age : 12 ,
// // // // //     wt : 68,
// // // // //     ht : 180
// // // // // };

// // // // // console.log(obj)

// // // // // obj.color = "White";
// // // // // console.log(obj); 

// // // // // ///// Object Cloning :- spread operator , 

// // // // // let src = { 
// // // // //     age : 12 , 
// // // // //     wt : 68 , 
// // // // //     ht : 180 
// // // // // };

// // // // // let dest = {...src};
// // // // // src.age = 90 ; 
// // // // // console.log("src:",src);
// // // // // console.log("dest:",dest);


// // // // //////// object assign object /////// 

// // // // // let src = { 
// // // // //     age : 12 , 
// // // // //     wt : 68 , 
// // // // //     ht : 180 
// // // // // };

// // // // // let dest = {...src}; 
// // // // // src.age = 90 ; 

// // // // ////// iteration ////// 
// // // // dest = {
// // // //     age : 12 , 
// // // //     wt : 90 ,
// // // //     ht : 180 ,
// // // // }

// // // /////// always use assign and spread operator //////
// // // ////// GARBAGE COLLECTOR //////  
// // // /// Means that the memory which notr required is free by the help of garbage collector //// always run in background 
// // // //// new ----->  memory assign  ------> deallocate -----> manually -----> free / delete  In Javascript ///// 


// // // //// JAVASCRIPT ERROR HANDLING AND WHAT TYPE OF ERROR IN JAVA SCRIPT ///// 
// // // ///... Error is just that which distrub the normal follow of code ///// 
// // // //// TYPES OF ERROR ???? 
// // // ///// COMPILER TIME ERROR ???  RUN TIME ERROR ????? 
// // // ////// while the code is executing ///// 
// // // // console.log(x); 
// // // // run time 
// // // // Handling:- ERROR IN JAVA SCRIPT BUT THE MAIN THINGS HOW TO HANDLE THAT ERROR IN JAVASCRIPT //// 
// // // /// TRY - CATCH  block ----> 
// // // // try {
// // // //     console.log(x);
// // // // }
// // // // catch(erro)
// // // // {
// // // //     //define kete h, error k sath aap kya krna chahte h 
// // // //     // retry logic 
// // // //     //fallback mechanism 
// // // //     // logging
// // // //     // custom error 
// // // //     console.log("I AM INSIDE CATCH BLOCK")
// // // //     console.log("YOur erro is here",e);
// // // // } 

// // // //// FINALLY BLOCK ---> WILL RUN EVERY TIME //// 
// // // //// finally{ console.log("I will run everytime as i am in finally block")
// // // ///       }


// // // // try {

// // // // }
// // // // catch {

// // // // }
// // // // finally{

// // // // } 

// // // /// Throw keyword  

// // // // try{
// // // //     console.log(x);
// // // // }
// // // // catch(err){
// // // //     throw new Error("Bh ai pehel declare kro , f")
// // // // }

// // // window.console.log(); 

// // ///// you can insert multiple class in this without the change of existing one or we can 


// // // let fpara = document.getElementById('fpara');
// // // fpara.addEventListener('click' , function() {
// // //     let fpara = document.getElementById('fpara');
// // //     fpara.textContent="Bhau kesa h"
// // // }) 

// // // function changeText(){
// // //     // console.log(event)
// // //     let fpara = document.getElementById('fpara');
// // //     fpara.textContent = "Ab kuch nhi hoga";
// // // }

// // // let fpara = document.getElementById('fpara');
// // // fpara.addEventListener('click' , changeText)

// // // add event Listener is start at the bubbling phase 
// // // if you use the add event Listener in the capturing phase then you use USECAPTURE() 

// // /// EVENT Object ///
// // /// whenever the event is trigger  ---> on click the button then first of all the event is goes to addEventListener(event) where the data is store 


// // /// Default action /// 
// // /// some tag has default action on click on them ......////


// // // let anchorElement = document.getElementById("action");

// // // anchorElement.addEventListener('click' , function(event) {
// // //     event.preventDefault();
// // //     anchorElement.textContent = "Click done bhai";
// // // })   

// // //// avoiding too many listeners in the code 

// // let paras = document.querySelectorAll('p');

// function alertPara(event){
//     alert("you have Clicked on para:" + event.target.textContent);
// }
// // for(let i = 0 ; i < paras.length ;i++)
// // {
// //     let para = paras[i];
// //     para.addEventListener('click' , function()
// // {
// //     alert("you have clicked on para:" +i);
// // })
// // }


// let mydiv = document.getElementById('wrapper');
// document.addEventListener('click' , alertPara); 

// //// Performance Improvement //// 
 

// const t1 = performance.now() 
// for(let i = 1 ;i<=100 ;i++)
// {
//     let para = document.createElement('p');
//     para.textContent = "This is Para" + i ;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log("total time by code 1 :" +(t2-t1));

// let mydiv = document.createElement('div');
// for(let i = 0 ; i<=100 ;i++)
// {
//     let para = document.createElement('p');
//     para.textContent = 'This is Para' +i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);



/// Reflow /////      //and//       /// Repaint /////
/// It is the process of calculatiy postion dimension of element ///
/// computationally intensive task /// 

/// Repaint :- the process of displaying context/element pixel by pixel ///....

//// Document Fragment :- ///// 

// let fragment = document.createDocumentFragment();

// for(let i = 0 ; i <= 100 ;i++)
// {
//     let para = document.createElement('p');
//     para.textContent = "this is para" + i ; 
//     // No reflow and no repaint for below line //
//     fragment.appendChild(para);
// }

// /// the below line takes 1 refloe and 1 repaint 
// document.body.appendChild(fragment);

