const nigerianStates = [
  "abuja", "lagos", "kano", "kaduna", "calabar", "enugu", "port harcourt",
  "ibadan", "benin", "jos", "maiduguri", "sokoto", "onitsha",
  "owerri", "aba", "uyo", "awka", "bauchi", "yola", "makurdi", "ilorin",
  "abeokuta", "akure", "minna", "ado ekiti", "lafia", "jalingo", "damaturu",
  "dutse", "gusau", "gombe", "birnin kebbi", "lokoja", "osogbo", "yenagoa",
  "abakaliki", "katsina","warri","bayelsa"
];

const inputElement = document.querySelector('.js-input');
const buttonElement = document.querySelector('.js-btn');
const cityElement = document.querySelector('.js-city');
const tempElement = document.querySelector('.js-temp');
const descElement = document.querySelector('.js-desc');

const api_key = 'ff7c16732c05359e7475d0a3ac8b8243';
buttonElement.addEventListener('click',async()=>{
  const city=inputElement.value.trim().toLowerCase()
  if(city==='')return
  if(!nigerianStates.includes(city)){
    alert("Pls Provide a valid state")
    inputElement.value=''
    cityElement.innerHTML=''
    tempElement.innerHTML=''
    descElement.innerHTML=''
    return
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  const response=await fetch(url)
  const data=await response.json()
  if(data.cod !==200){
    alert('not success')
    return
  }
     cityElement.innerHTML=data.name
    tempElement.innerHTML=`${data.main.temp}`
    descElement.innerHTML=data.weather[0].description

    inputElement.value=''
   
})
