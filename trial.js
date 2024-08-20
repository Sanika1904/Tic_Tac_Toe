let btn= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer= document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
 
let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] 
];

const resetgm= ()=>{
    turnO=true;
    enablebx();
    msgcontainer.classList.add("hide");
}

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){//this is for O
            box.innerText="O";
            turnO=false;
        } 
        else{//this is for X
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        chechwin();
    });
});

const enablebx= () =>{
    for(let box of btn){
        box.disabled=false;
        box.innerHTML="";
    }
}

const disablebx= () =>{
    for(let box of btn){
        box.disabled=true;
    }
}

const showwinner=(Winner)=>{
    msg.innerText=`Congratulations, Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebx();
}

const chechwin=()=>{
    for(let pattern of win){
        let pos1val= btn[pattern[0]].innerText;
        let pos2val= btn[pattern[1]].innerText;
        let pos3val= btn[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val) {
                console.log("Winner!");
                showwinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click", resetgm);
resetBtn.addEventListener("click", resetgm);