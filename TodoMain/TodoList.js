const inputElement=document.querySelector('.js-input')
const buttonElement=document.querySelector('.js-btn')
const TodoList=[]
function renderTodo(){
let todoHtml=''
for (let i = 0; i < TodoList.length; i++) {
  const element = TodoList[i];
   const html=`<div class='showing'>
   <input type="checkbox" class='js-checked  green-checked'>
   <span>${element}</span>
   <button onclick='
   TodoList.splice(${i},1); renderTodo()
   'class='btn'>Remove</button>
   </div>`
   todoHtml+=html
  }
  document.querySelector('.js-display').innerHTML=todoHtml
}
buttonElement.addEventListener('click',()=>{
  const Todo=inputElement.value
  if(Todo==='')return
  TodoList.push(Todo)
  inputElement.value=''
renderTodo()

})


