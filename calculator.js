fonction calculate(){
    const number1=document.getElementById("num1").Value;
    const number2=document.getElementById("num2").Value;
    const operation=document.getElementById("operation").Value;
    let result;
    if (operation=="+") result=number1+number2;
    let result;
    if else(operation=="-") result=number1-number2;
    if else(operation=="*") result=number1*number2;
    if else(operation=="/") result=number1/number2;
    else result=number1%number2;
    document.getElementById("result").innerHTML="Result:"+result;
}