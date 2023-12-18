function createnewpromise(){
    return new Promise(function executor(resolve,reject){
        console.log("inside promise function");
        resolve("done");
    });
}
setTimeout( function sayhi(){
    console.log(" saying hi from asynchrous function");
},4000);
let p= createnewpromise();
p.then( function fulfillhandler(value){
    console.log("we resolved",value);
},function rejecthandler(){
    console.log("we rejected");
});
console.log("ending everything");


