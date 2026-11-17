
    let score=
JSON.parse(localStorage.getItem('score'))|| 
   {
     Losses:0,
     Wins:0,
       Tie:0
 }


updateScore()

let isAutoplay=false
let intervalId
function autoplay(){
  if(!isAutoplay){
   intervalId=setInterval(()=>{
    const playing=pickComputerMove()
    playGame(playing)
  },1000)
  isAutoplay=true
  }else{
    clearInterval(intervalId)
    isAutoplay=false
  }
}

document.querySelector('.scissors-button').addEventListener('click',()=>{
  playGame('Scissors')
})

document.querySelector('.paper-button').addEventListener('click',()=>{
  playGame('Paper')
})

document.querySelector('.rock-button').addEventListener('click',()=>{
  
  playGame('Rock')
})

document.body.addEventListener("keydown",(event)=>{
  if(event.key==='r'){
  playGame('Rock')
     
  }else if(event.key==='p'){
  playGame('Paper')
    
  }else if(event.key==='s'){
  playGame('Scissors')
  }

})

   function playGame(playerMove){
  const computerMove=pickComputerMove()
  let result='' 
   if(playerMove==='Scissors'){
if(computerMove==='Rock'){
   result='you loss'
}else if(computerMove==='Paper'){
  result='you win'
}else if(computerMove==='Scissors'){
  result='you tie'
} 
}else if(playerMove==='Paper'){
   if(computerMove==='Rock'){
    result='you win'
  }else if(computerMove==='Paper'){
    result='you tie'
  }else if(computerMove==='Scissors'){
    result='you loss'
  }
}else if(playerMove==='Rock'){
   if(computerMove==='Rock'){
    result='you win'
  }else if(computerMove==='Paper'){
    result='you tie'
  }else if(computerMove==='Scissors'){
    result='you loss'
  }
}

if(result==='you win'){
  score.Wins+=1
}else if(result==='you tie'){
  score.Tie+=1
}else if(result==='you loss'){
  score.Losses+=1
}

localStorage.setItem('score',JSON.stringify(score))
updateScore()

document.querySelector('.js-result')
  .innerHTML=result

 document.querySelector('.js-computers').innerHTML
   =`  You
    <img src="${playerMove}.png" class="move-icon">
    <img src="${computerMove}.png" class="move-icon">
    Computer `

// alert(`,Then Computer Choose  So 
// `)

   }


function updateScore(){
document.querySelector('.js-score')
  .innerHTML=`Wins:${score.Wins},Tie:${score.Tie},Loss:${score.Losses}`
}

    function pickComputerMove(){
    let computerMove=''
      const randomNumber=Math.random()
  if(randomNumber>=0&&randomNumber<1/3){
    computerMove='Rock'
    
  }else if(randomNumber>=1/3&&randomNumber<2/3){
 computerMove='Paper'
  }else if(randomNumber>=2/3&&randomNumber<1){
    computerMove='Scissors'
  }
  return computerMove
}

