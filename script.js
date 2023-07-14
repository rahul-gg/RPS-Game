let yourpick=" "
let compPick=" "

function rock(){
yourpick="rock"
document.getElementById("rock").style.backgroundColor="rgb(85, 201, 85)";
document.getElementById("paper").style.backgroundColor="white";
document.getElementById("sciss").style.backgroundColor="white";
console.log(yourpick)
}

function paper(){
    yourpick="paper"
    document.getElementById("paper").style.backgroundColor="rgb(85, 201, 85)";
    document.getElementById("rock").style.backgroundColor="white";
    document.getElementById("sciss").style.backgroundColor="white";
    console.log(yourpick)
}

function scissor(){
    yourpick="scissor"
    document.getElementById("sciss").style.backgroundColor="rgb(85, 201, 85)";
    document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("rock").style.backgroundColor="white";
    console.log(yourpick)
}

function play(){
let random=Math.floor(Math.random()*3)
if(random==0){
    compPick="rock"
}
else if(random==1){
    compPick="paper"
}
else{
    compPick="scissor"
}
console.log(compPick)
document.getElementById("userpick").innerText="You picked"+" "+ yourpick
document.getElementById("computer-pick").innerText="The computer picked"+" "+ compPick

if((yourpick=="rock"&&compPick=="scissor") || (yourpick=="scissor"&&compPick=="paper")||(yourpick=="paper"&&compPick=="rock")){
document.getElementById("result").textContent= "YOU WIN"
}
else if((yourpick=="scissor"&&compPick=="rock") || (yourpick=="paper"&&compPick=="scissor")||(yourpick=="rock"&&compPick=="paper")){
document.getElementById("result").textContent="YOU LOSE"
}
else if(yourpick==" "){
    document.getElementById("result").textContent="Pick your choice"
}
else{
    document.getElementById("result").textContent="DRAW"
}
}

function playagain(){
    yourpick=" "
    compPick=" "
    document.getElementById("userpick").textContent=" "
    document.getElementById("computer-pick").textContent=" "
        document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("rock").style.backgroundColor="white";
    document.getElementById("paper").style.backgroundColor="white";
    document.getElementById("sciss").style.backgroundColor="white";
}