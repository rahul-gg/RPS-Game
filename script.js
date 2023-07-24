let yourpick=" "
let compPick=" "
let rockDiv=document.getElementById("rock")
let paperDiv=document.getElementById("paper")
let scissDiv=document.getElementById("sciss")
function rock(){
yourpick="rock"
rockDiv.style.backgroundColor="rgb(85, 201, 85)";
paperDiv.style.backgroundColor="white";
scissDiv.style.backgroundColor="white";
console.log(yourpick)
}

function paper(){
    yourpick="paper"
    paperDiv.style.backgroundColor="rgb(85, 201, 85)";
    rockDiv.style.backgroundColor="white";
    scissDiv.style.backgroundColor="white";
    console.log(yourpick)
}

function scissor(){
    yourpick="scissor"
    scissDiv.style.backgroundColor="rgb(85, 201, 85)";
    paperDiv.style.backgroundColor="white";
    rockDiv.style.backgroundColor="white";
    console.log(yourpick)
}

function play(){
let random=Math.floor(Math.random()*3)
let arr=["rock","paper","scissor"]
compPick=arr[random]

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
    alert("Pick your choice")
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
    document.getElementById("result").textContent=" "
    paperDiv.style.backgroundColor="white";
    rockDiv.style.backgroundColor="white";
    paperDiv.style.backgroundColor="white";
    scissDiv.style.backgroundColor="white";
}