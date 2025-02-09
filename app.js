let userScore= 0;
let compScore=0;
let userChoices=document.querySelectorAll('.choice');
let userUpdate = document.querySelector('#user-score');
let compUpdate = document.querySelector('#comp-Score');
let messsage = document.querySelector('#mssg');


userChoices.forEach((choice)=>{
    choice.addEventListener('click',function(e){
        let userinput= choice.getAttribute('id')
        console.log(userinput)
        checkWinner(userinput);
    }) 
});
const  compChoice=()=>{
let gencompInput=['rock','paper','scissors'];
 let rndidx=Math.floor(Math.random()*3);
 return gencompInput[rndidx];
 
}

let checkWinner=(userinput)=>{
let compInput=compChoice();
console.log(compInput)
if (compInput===userinput){
    drawResult();
}else{
    let userWin=true;
    if (userinput=='rock'){
        userWin=compInput=='paper'?false:true;
    }else if (userinput=='scissors'){
        userWin=compInput=='rock'?false:true;
    }else if (userinput=='paper'){
        userWin=compInput=='scissors'?false:true;
    }
    showWinner(userWin,userinput,compInput);
}
}

let drawResult=()=>{
    messsage.innerHTML='✨ Its a Draw! ✨'
    messsage.style.backgroundColor='black'
}
let showWinner=(userWin,userinput,compInput)=>{
if (userWin){
    messsage.innerHTML=`You Win 🏆🎉 ${userinput} beats ${compInput}`;
messsage.style.backgroundColor='green';
userScore++
userUpdate.innerHTML=userScore;
}else{
   compScore++
        messsage.innerHTML=`You Lose 👎❌ ${compInput} beats ${userinput}`;
    messsage.style.backgroundColor='red';
    compUpdate.innerHTML=compScore
}
}
