let apiKey= "ace5ef2724e64d39a77999ec83428b4a"
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchIn=document.querySelector(".searchBar input")
let searchButton=document.querySelector(".searchBar button")

async function weather(city){
    let response=await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data=await response.json();
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+'°C'
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".humidity").innerHTML='Humidity '+data.main.humidity+'%'
}
searchButton.addEventListener("click",()=>{
    weather(searchIn.value)
})



