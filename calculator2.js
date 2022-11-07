const prompt = require('prompt-sync')();
const num1=prompt("enter any number");
const num2=prompt("enter any other number");
function add(num1,num2)
{
    console.log("Addition",num1+num2);
}
function Sub(num1,num2)
{
    b=num1-num2;
    console.log("Substraction",b);
}
function Mul(num1,num2)
{
    c=num1*num2;
    console.log("multiplication",c);
}
function div(num1,num2)
{
    d=num1/num2;
    console.log("division",d);
}
console.log("This is Calculator");
add(num1,num2);
Sub(num1,num2);
Mul(num1,num2);
div(num1,num2);