//there is no js file  all js code writtn in HTML file > index.html

// whatever i write there i put it as commnet here 
// <script>
//         const apiKey = "ce1b3a1d1bc4e541018d5407364ab8c1";
//         const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//         const searchBox= document.querySelector(".search input");
//         const searchBtn= document.querySelector(".search button");
//         const weatherIcon= document.querySelector(".weather-icon");
        
//         async function checkWeather(city) {
//             const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
// var data = await response.json();
// // console.log(data);
//  // Update DOM elements with weather data
//                 document.querySelector(".city").innerHTML = data.name;
//                 document.querySelector(".temp").innerHTML =Math.round(data.main.temp)  + "°C";
//                 document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//                 document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
// if(data.weather[0].main=="Clouds"){
//     weatherIcon.src= "clouds.png";
    
// }
// else if(data.weather[0].main=="Rain"){
//     weatherIcon.src= "rain.png";
// }
// else if(data.weather[0].main=="Drizzle"){
//     weatherIcon.src= "drizzle.png";
// }
// else if(data.weather[0].main=="Mist"){
//     weatherIcon.src= "mist.png";
// }
// else if(data.weather[0].main=="Clear"){
//     weatherIcon.src= "clear.png";
// }
// else if(data.weather[0].main=="Snow"){
//     weatherIcon.src= "snow.png";
// }

//        document.querySelector(".weather").style.display="block";
//            }
//           searchBtn.addEventListener("click",()=>{
//                 checkWeather(searchBox.value);
//           })
//     </script>
    
    
