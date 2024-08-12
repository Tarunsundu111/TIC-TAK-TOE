let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let turnO = true;
const winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const resetgame = ()=>{
    enableboxes();
    turnO = true;
    msg.classList.add("hide");
}
let enableboxes =()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let disabledboxes =()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
let showwinner = (winner)=>{
    msg.innerText = `WINNER IS ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
}
let checkwinner = () =>{
    for(let winner of winners){
        let pos1val = boxes[winner[0]].innerText;
        let pos2val = boxes[winner[1]].innerText;
        let pos3val = boxes[winner[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
        }
    }
}
reset.addEventListener("click",resetgame);