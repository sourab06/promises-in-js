function* fetchnextelement(){
console.log("I am inside the generator function");
yield 1;
yield 2;
console.log("somewhere in the middle");
yield 3;
yield 4;
return 10;
yield 5;
}
const iter=fetchnextelement();
console.log(iter.next());
console.log(iter.next());
