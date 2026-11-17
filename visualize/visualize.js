const api_key = 'ff7c16732c05359e7475d0a3ac8b8243';
let myBarChart = null;
let myPieChart = null;
function getWeather(city){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
.then(response=>response.json())
.then(data=>{

  document.getElementById("temp").textContent=data.main.temp
  document.getElementById("weather").textContent=data.weather[0].main
  document.getElementById("wind").textContent=data.wind.speed
})
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`)
.then(response=>response.json())
.then(data=>{
  let days=[]
  let temps=[]
  let weatherCount={Clear:0,Clouds:0,Rain:0,Others:0}
  for (let i = 0; i < data.list.length; i+=8) {
    const result = data.list[i];
    const date=new Date(result.dt*1000)
    days.push(date.toLocaleDateString('en-NG',{weekday:'short'}))

    temps.push(result.main.temp)
    let condition=result.weather[0].main
    if(weatherCount[condition]!==undefined){
      weatherCount[condition]++
    }else{
      weatherCount.Others++
    }
  }


  if (myBarChart) myBarChart.destroy();
    myBarChart = new Chart(document.getElementById("barChart"), {
      type: 'bar',
      data: { labels: days, datasets: [{ label: 'Temp °C', data: temps, backgroundColor: '#007bff' }] }
    });

    if (myPieChart) myPieChart.destroy();
    myPieChart = new Chart(document.getElementById("pieChart"), {
      type: 'pie',
      data: { labels: ['Clear', 'Clouds', 'Rain', 'Others'], datasets: [{ data: [weatherCount.Clear, weatherCount.Clouds, weatherCount.Rain, weatherCount.Others], backgroundColor: ['#FFC107', '#6c757d', '#007bff', '#28a745'] }] }
    });
  });



    
}



 getWeather('Port Harcourt');


