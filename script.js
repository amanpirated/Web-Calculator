let scr=document.querySelector(".dsp");
let inputs=document.querySelectorAll(".num");
let operation=document.querySelectorAll(".opr");
let key=document.querySelector(".keys")
let num1="";
let num2="";
let operator="NULL"
const display=()=>{
    if(scr.innerText==="NIL"){
        scr.innerText="";
    }
}
const screen =()=>{
    for( let input of inputs){
        input.addEventListener("click",function(){
            display();
            scr.innerText+=input.innerText;
        })
    }
}
screen();
operation.forEach(oper=>{
    oper.addEventListener("click",function(){
        if(oper.innerText==="AC"){
            scr.innerText="NIL";
            num1="";
            num2="";
            operator="NULL"
        }
        else if(oper.innerText==="="){
            if(num1!=="" && operator!=="NULL"){
                num2=scr.innerText;
                calculate();
            }
        }
        else{
            num1=scr.innerText;
            operator=oper.innerText;
            scr.innerText="";
    
        }
    })
})
const calculate=()=>{
   let n1=parseFloat(num1);
   let n2=parseFloat(num2);
   let result
   switch(operator){
    case "+":
        result=n1+n2;
        break;
    case "-":
        result=n1-n2;
        break;
    case "*":
        result=n1*n2;
        break;
    case "/":
       if(n2!==0){
        result=n1/n2;
        break;
       }
       else{
        result="Error";
        break;
       }
    default:
        result="Error";
        break;
   }
   scr.innerText = result;
    num1 = result;
    operator = null
}