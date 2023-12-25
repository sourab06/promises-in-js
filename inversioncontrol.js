function download(url){
    console.log("started downloading content form",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p() {
         console.log("complete downloading data in 5s");
         const content="ABCDEF";
         res(content);
         res(content);
         //The above is called twice. It can be never called too. The control will remain with whoever 
         //calls the function and not with the function.   
        }, 5000);
    })
}
download("www.xyz.com")
.then(function fulfillhandler(value){
    console.log("content download is",value);
})