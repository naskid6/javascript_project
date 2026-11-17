function CalculateTotal(){
 const inputElement= document.querySelector('.js-cost')
 let cost=Number(inputElement.value)
 if(cost<=40){
  cost +=10

 }
document.querySelector('.display').innerHTML=`$${cost}`
}


  function Changed(){
     let buttonElement=document.querySelector('.js-subscribe')

  if(buttonElement.innerHTML==='Subscrib'){
    buttonElement.innerHTML='Subscribed'
    buttonElement.classList.add('is-Subscribed')
  }else{
    buttonElement.innerHTML='Subscrib'
    buttonElement.classList.remove('is-Subscribed')

  }
  }