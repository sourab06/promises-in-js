Promise.resolve("foo")
.then(function fh1(value){
    return Promise.resolve(value+"bar");
})
.then(function fh2(value){
    setTimeout(function exec(){
       value+="baz";
       console.log(value);
    }, 1);
})
.then(function fh3(value){
    console.log("from fh3",value);
})