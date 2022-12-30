export async function getCityWeather(params){
    const cityWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params}&APPID=92eae6e662b81e7480571047d4c92253&units=metric`).then(response => response.json());
    console.log(cityWeather)
    return cityWeather;
};