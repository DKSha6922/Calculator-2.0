const reset = document.getElementById("reset");
const input = document.getElementById("input");
const btn = document.querySelectorAll("button");
const res = document.getElementById("result");





function solve(val){
 input.value+=val;
   }

   function calculate(){
   let num1 =input.value;
    let num2 = eval(num1);
    input.value = num2;
   }



reset.addEventListener("click",()=>{
    input.value="";
   });