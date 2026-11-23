
const api_key = 'ff7c16732c05359e7475d0a3ac8b8243';

let myBarChart = null;
let myPieChart = null;

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-btn');

function getWeather(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},NG&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => {

            if (data.cod !== 200) {
                alert('City not found. Try another city.');
                return;
            }

            document.getElementById("temp").textContent = data.main.temp + '°C';
            document.getElementById("weather").textContent = data.weather[0].main;
            document.getElementById("wind").textContent = data.wind.speed;

            document.querySelector('.js-city').textContent = data.name;
            document.querySelector('.js-temp').textContent = data.main.temp + '°C';
            document.querySelector('.js-desc').textContent = data.weather[0].description;
        });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},NG&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => {

            let days = [];
            let temps = [];

            let weatherCount = {
                Clear: 0,
                Clouds: 0,
                Rain: 0,
                Others: 0
            };

            for (let i = 0; i < data.list.length; i += 8) {

                const result = data.list[i];

                const date = new Date(result.dt * 1000);

                days.push(
                    date.toLocaleDateString('en-NG', {
                        weekday: 'short'
                    })
                );

                temps.push(result.main.temp);

                let condition = result.weather[0].main;

                if (weatherCount[condition] !== undefined) {
                    weatherCount[condition]++;
                } else {
                    weatherCount.Others++;
                }
            }

            if (myBarChart) {
                myBarChart.destroy();
            }

            myBarChart = new Chart(document.getElementById("barChart"), {
                type: 'bar',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'Temp °C',
                        data: temps,
                        backgroundColor: '#007bff'
                    }]
                }
            });

            if (myPieChart) {
                myPieChart.destroy();
            }

            myPieChart = new Chart(document.getElementById("pieChart"), {
                type: 'pie',
                data: {
                    labels: ['Clear', 'Clouds', 'Rain', 'Others'],
                    datasets: [{
                        data: [
                            weatherCount.Clear,
                            weatherCount.Clouds,
                            weatherCount.Rain,
                            weatherCount.Others
                        ],
                        backgroundColor: [
                            '#FFC107',
                            '#6c757d',
                            '#007bff',
                            '#28a745'
                        ]
                    }]
                }
            });

        });
}

// Search when button is clicked
button.addEventListener('click', () => {

    const city = input.value.trim();

    if (city !== '') {
        getWeather(city);
    } else {
        alert('Please enter a state or city');
    }

});

// Search when Enter is pressed
input.addEventListener('keydown', event => {

    if (event.key === 'Enter') {
        button.click();
    }

});
