x=10; //global variable
var y=20; //local variable
console.log(x,y);
function add(a,b)
{
    return a+b;
}
var num1=10;
var num2=20;
var sum=add(num1,num2);
console.log('addition',sum);