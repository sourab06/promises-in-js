function codeblocker(){
    for(let i=0;i<10000000000;i++){
        //something
    }
}
console.log("start of the file");
setTimeout(function timer1()  {
   console.log("timer1 done"); 
}, 0);
codeblocker();
let x=Promise.resolve("resolved promise1");
x.then( function resolve(value){
console.log("whose promise?",value);
});

let y=Promise.resolve("resolved promise2");
y.then( function resolve(value){
console.log("whose promise?",value);
setTimeout(function timer2()  {
    console.log("timer2 done");}, 0);
});

let z=Promise.resolve("resolved promise3");
z.then( function resolve(value){
console.log("whose promise?",value);
codeblocker();
});
setTimeout(function timer3()  {
    console.log("timer3 done"); 
 }, 0);
 console.log("end of file");