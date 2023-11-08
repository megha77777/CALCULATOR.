let string= ""
let screen =document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
// let clear = document.querySelector(".btn-clear");
// let equal = document.querySelector(".btn-equal")
buttons.forEach((btn)=>{
    btn.addEventListener("click",(ele)=>{
        if(ele.target.innerHTML == "="){
            string = eval(string);
            screen.value = string;
        }
        else if(ele.target.innerHTML == "C"){
            string="";
            screen.value = string;
        }
        else{
            string = string + ele.target.innerHTML;
            screen.value = string;
        }
    })
})

