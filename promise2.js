function fetchdata(url){
    return new Promise(function executor(resolve,reject){
        console.log("start downloading from",url);
        setTimeout(function processdownloading(){
                    let data="dummy data";
                   
                    console.log("download completed");
                    resolve(data);
        },7000);
    });
}
console.log("start");
let p= fetchdata("xyz");
p.then( function fulfillhandler(value){
console.log("promise resolved",value);
});
console.log("ending here");