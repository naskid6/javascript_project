const inputElement=document.querySelector('.js-input')
const buttonElement=document.querySelectorAll('.btn-one')

const equalButton=document.querySelector('.btn-equal')

const buttonClear=document.querySelector('.btn-clear')

const buttonCancel=document.querySelector('.btn-cancel')

buttonElement.forEach((button)=>{
button.addEventListener('click',()=>{
  inputElement.value +=button.textContent
})
})

equalButton.addEventListener('click',()=>{
  inputElement.value=math.evaluate(inputElement.value)
})

buttonClear.addEventListener('click',()=>{
  inputElement.value=''
})

buttonCancel.addEventListener('click',()=>{
  inputElement.value =inputElement.value.slice(0,-1)
})