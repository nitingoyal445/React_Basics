
// let obj = {
//     name : "Steve",
//     sayHi : function(){
//             console.log("Inside sayHi");
//             console.log(this);
//             function inside(){
//                 console.log("inside inside function");
//                 console.log(this);
//             }
//             // inside();
//             let newFun = inside.bind(obj);
//             newFun();
//     },
// };

let obj = {
    name : "Steve",
    sayHi : function(){
            console.log("Inside sayHi");
            console.log(this);
            //arrow function
            inside = ()=>{
                console.log("inside inside function");
                console.log(this);
            }
            inside();
    },
};

//arrow functions => khud ka this nhi hota

// in method call => this points to the current object ya calling object
obj.sayHi();

//in simple function call, this point to global object
function fun(){
    console.log("Inside fun !!");
    console.log(this);
    console.log(global);
}

// fun();