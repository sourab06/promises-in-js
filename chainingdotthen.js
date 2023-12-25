function download(url){
    console.log("started downloading content form",url);
    return new Promise(function exec(res,rej){
        setTimeout(function p() {
         console.log("complete downloading data in 5s");
         const content="ABCDEF";
         res(content);
                
        }, 5000);
    })
}
download("www.xyz.com")
.then(function fulfillhandler(value){
    console.log("content download is",value);
    return "new promise string";
},function rejecthandler(value){
    console.log("rejected with",value);
})
.then(
    function newfulfilhandler(value){
        console.log("value from chained then promise",value);
    }
)