// var firstName="Muhammad";
// var num=2303;
// console.log(firstName);

// let lastName="kamran";
// //string concatination
// console.log(firstName+ " "+ lastName);
// console.log(`${firstName} ${lastName}`);
// //const vs let

// let num1=204;
// num1=232;
// console.log(num1);
// //object literials
var user={
    name:"kamran",
    reg:"2423",
    phone:243343,
    funName1:function funtionName(){
        console.log("this is function");
    },
    obj:{
       name:{

       }
    }
}

// console.log(user.reg);
// object destruing
const {name,phone,reg,funName1,obj}=user;



//arrays simple single demensional array
let arrayName=[1,2,3,3,3,3,3,3,2,2,3,3,3,3];
//old js function
console.log(arrayName.length);



var filter=arrayName.filter((list)=>list>2);
console.log(filter.length);

//array of object
let ObjectArray=[
    {
        name:"kamran",
        reg:"2423",
        phone:243343,
    },
    {
        name:"ismail",
        reg:"2423",
        phone:243343,
    },
    {
        name:"muzamil",
        reg:"2423",
        phone:243343,
    }
]



ObjectArray.map((list)=>{
    console.log(list.name +" "+ list.phone);
})
// var filterArray=ObjectArray.filter((list)=>list.name==="kamran");
// console.log("filtered data")
// filterArray.map((list)=>{
//     console.log(list.name +" "+ list.phone);
// })


var filterObj=ObjectArray.find((list)=>list.name==="muzamil");
console.log(filterObj);
let array=[
    {
        name:"muzamil",
        reg:"2423",
        phone:243343,
    },
    {
        name:"dffddf",
        reg:"2423",
        phone:243343,
    }
]

var thirdarray=ObjectArray.concat(...ObjectArray,array);
console.log(thirdarray);
// function funtionName(){
//     console.log("this is function");
// }
// funtionName();
// //ES6  Fatt Arrow Funtion

// const funName=()=>{
//     console.log("this is function");
// }

