
//defining localstorage

function setLocalStore(fieldid, fieldid_value)
{
  if (!localStorage.getItem(fieldid))
  {
    localStorage.setItem(fieldid, fieldid_value);
    return fieldid_value;
  }
  return;
}

function getLocalStorage(fieldid)
{
  if (localStorage.getItem(fieldid) !== undefined)
  {
    let fieldid_value = localStorage.getItem(fieldid);
    return fieldid_value;
  }
  return;
}

//make a get request retrieve json object from the weather API

let apiobject = {};
let req = new XMLHttpRequest();
let weather_location = document.getElementById("weather-search");
let btnSearch = document.getElementById("btnSearch");
let url = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7142700&lon=-74.0059700&exclude=hourly&unit=metric&appid=7599856f5b71f6e599a22a3a46393abb";

//window.addEventListener('load', () =>{
    //req.overrideMimeType("application/json");
    req.open("GET", url);

    //load API response with the onload event
    btnSearch.onclick = (e) => 
{

      if (req.status === 200)
      {
        apiobject = JSON.parse(req.responseText);
    
        //insert values to the DOM
        //let log = getLocalStorage('log');
       // localStorage.setItem('weather-search', document.getElementById('weather-search').value);
        //document.getElementById('weather-search').value = localStorage.getItem('weather-search');
        //let weather_lon = log;
        setLocalStore('log', apiobject.lon);
        document.getElementById("log").innerText = getLocalStorage('log');
        setLocalStore('lat', apiobject.lat);
        document.getElementById("lat").innerText = getLocalStorage('lat');
        setLocalStore('weather1', apiobject.current.weather[0].main)
        document.getElementById("weather1").innerText = getLocalStorage('weather1');
        setLocalStore('weather2', apiobject.current.weather[0].description)
        document.getElementById("weather2").innerText = getLocalStorage('weather2');

        //construct the date
        let cur_dt = new Date(apiobject.current.dt * 1000);
        //let formatted_date = cur_dt.getMonth() + " : " + cur_dt.getDay() + " : " + cur_dt.getFullYear() + " : " +
        //cur_dt.getHours() + " : " + cur_dt.getMinutes() + " : " + cur_dt.getSeconds();
        setLocalStore('curtime', cur_dt);
        document.getElementById("curtime").innerText = getLocalStorage('curtime');
        
        setLocalStore('cur-temp', apiobject.current.temp) 
        document.getElementById("cur-temp").innerText = getLocalStorage('cur-temp');
        
        setLocalStore('min-temp', apiobject.daily[0].temp.min);
        document.getElementById('min-temp').innerText = getLocalStorage('min-temp');
        
        setLocalStore('max-temp', apiobject.daily[0].temp.max);
        document.getElementById('max-temp').innerText = getLocalStorage('max-temp');
        
        setLocalStore('day-temp', apiobject.daily[0].temp.day);
        document.getElementById('day-temp').innerText = getLocalStorage('day-temp');
        
        setLocalStore('morn-temp', apiobject.daily[0].temp.morn);
        document.getElementById('morn-temp').innerText = getLocalStorage('morn-temp');
        
        setLocalStore('even-temp', apiobject.daily[0].temp.eve);
        document.getElementById('even-temp').innerText = getLocalStorage('even-temp');
        
        setLocalStore('night-temp', apiobject.daily[0].temp.night);
        document.getElementById('night-temp').innerText = getLocalStorage('night-temp');

        setLocalStore('feels-like', apiobject.daily[0].feels_like.day);
        document.getElementById("feels-like").innerText = getLocalStorage("feels-like");

        setLocalStore('feels-day', apiobject.daily[0].feels_like.day);
        document.getElementById("feels-day").innerText = getLocalStorage("feels-day");

        setLocalStore('feels-morning', apiobject.daily[0].feels_like.morn);
        document.getElementById("feels-morning").innerText = getLocalStorage("feels-morning");

        setLocalStore('feels-evening', apiobject.daily[0].feels_like.eve);
        document.getElementById("feels-evening").innerText = getLocalStorage("feels-evening");

        setLocalStore('feels-night', apiobject.daily[0].feels_like.night);
        document.getElementById("feels-night").innerText = getLocalStorage("feels-night");

        setLocalStore('weather-pressure', apiobject.daily[0].pressure);
        document.getElementById('weather-pressure').innerText = getLocalStorage('weather-pressure');

        setLocalStore('weather-humidity', apiobject.daily[0].humidity);
        document.getElementById("weather-humidity").innerText = getLocalStorage("weather-humidity");

        setLocalStore('weather-dew-point', apiobject.daily[0].dew_point);
        document.getElementById('weather-dew-point').innerText = getLocalStorage('weather-dew-point');

        setLocalStore('weather-visibility', apiobject.current.visibility);
        document.getElementById('weather-visibility').innerText = getLocalStorage("weather-visibility");

        setLocalStore('weather-uvi', apiobject.daily[0].uvi);
        document.getElementById('weather-uvi').innerText = getLocalStorage("weather-uvi");

        setLocalStore('weather-cloud', apiobject.current.clouds);
        document.getElementById("weather-cloud").innerText = getLocalStorage("weather-cloud");



      }
      else
      {
       // apiobject = JSON.parse(req.responseText);
    
        //insert values to the DOM
        //let log = getLocalStorage('log');
        //localStorage.setItem('log', apiobject.lon);
        //localStorage.setItem('weather-search', document.getElementById('weather-search').value);
        //document.getElementById('weather-search').value = localStorage.getItem('weather-search');
        //let weather_lon = log;
        //localStorage.setItem("log", apiobject.lon);
       // if (getLocalStorage('log') !== undefined)
        //{
        document.getElementById("log").innerText = getLocalStorage('log');
        //}
        //document.getElementById("log").innerText = localStorage.getItem("log");
        document.getElementById("lat").innerText = getLocalStorage('lat');
        document.getElementById("weather1").innerText = getLocalStorage("weather1");
        document.getElementById("weather2").innerText = getLocalStorage("weather2");
        //construct the date
        // setLocalStore('curtime', formatted_date);
        document.getElementById("curtime").innerText = getLocalStorage('curtime');
        //setLocalStore('cur-temp', apiobject.current.temp) 
        document.getElementById("cur-temp").innerText = getLocalStorage('cur-temp');
        //setLocalStore('min-temp', apiobject.daily[0].temp.min);
        document.getElementById('min-temp').innerText = getLocalStorage('min-temp');
        //setLocalStore('max-temp', apiobject.daily[0].temp.max);
        document.getElementById('max-temp').innerText = getLocalStorage('max-temp');
        //setLocalStore('day-temp', apiobject.daily[0].temp.day);
        document.getElementById('day-temp').innerText = getLocalStorage('day-temp');
        //setLocalStore('morn-temp', apiobject.daily[0].temp.morn);
        document.getElementById('morn-temp').innerText = getLocalStorage('morn-temp');
        // setLocalStore('even-temp', apiobject.daily[0].temp.eve);
        document.getElementById('even-temp').innerText = getLocalStorage('even-temp');
        
        // setLocalStore('night-temp', apiobject.daily[0].temp.night);
        document.getElementById('night-temp').innerText = getLocalStorage('night-temp');

        // setLocalStore('feels-like', apiobject.daily[0].feels_like.day);
        document.getElementById("feels-like").innerText = getLocalStorage("feels-like");

        // setLocalStore('feels-day', apiobject.daily[0].feels_like.day);
        document.getElementById("feels-day").innerText = getLocalStorage("feels-day");

        // setLocalStore('feels-morning', apiobject.daily[0].feels_like.morning);
        document.getElementById("feels-morning").innerText = getLocalStorage("feels-morning");

        // setLocalStore('feels-evening', apiobject.daily[0].feels_like.evening);
        document.getElementById("feels-evening").innerText = getLocalStorage("feels-evening");

        // setLocalStore('feels-night', apiobject.daily[0].feels_like.night);
        document.getElementById("feels-night").innerText = getLocalStorage("feels-night");

        // setLocalStore('weather-pressure', apiobject.daily[0].pressure);
        document.getElementById('weather-pressure').innerText = getLocalStorage('weather-pressure');

        // setLocalStore('weather-humidity', apiobject.daily[0].humidity);
        document.getElementById("weather-humidity").innerText = getLocalStorage("weather-humidity");

        // setLocalStore('weather-dew-point', apiobject.daily[0].dew_point);
        document.getElementById('weather-dew-point').innerText = getLocalStorage('weather-dew-point');

        // setLocalStore('weather-visibility', apiobject.daily[0].cloud);
        document.getElementById('weather-visibility').innerText = getLocalStorage("weather-visibility");

        // setLocalStore('weather-uvi', apiobject.daily[0].uvi);
        document.getElementById('weather-uvi').innerText = getLocalStorage("weather-uvi");

        //setLocalStore('weather-cloud', apiobject.daily[0].cloud);
        document.getElementById("weather-cloud").innerText = getLocalStorage("weather-cloud");




      }
/*     apiobject = JSON.parse(req.responseText);
    
    //insert values to the DOM
    //let log = getLocalStorage('log');
    localStorage.setItem('log', apiobject.lon);
    localStorage.setItem('weather-search', document.getElementById('weather-search').value);
    document.getElementById('weather-search').value = localStorage.getItem('weather-search');
    //let weather_lon = log;
    localStorage.setItem('log', 'helllowow');
    document.getElementById("log").innerText = localStorage.getItem('log');
    document.getElementById("lat").innerText = apiobject.lat;
    document.getElementById("weather1").innerText = apiobject.current.weather[0].main;
    document.getElementById("weather2").innerText = apiobject.current.weather[0].description;
    //construct the date
    let cur_dt = new Date(apiobject.current.dt * 1000);
    let formatted_date = cur_dt.getMonth() + " : " + cur_dt.getDay() + " : " + cur_dt.getFullYear() + " : " +
     cur_dt.getHours() + " : " + cur_dt.getMinutes() + " : " + cur_dt.getSeconds();
    document.getElementById("curtime").innerText += formatted_date; 
    document.getElementById("cur-temp").innerText += apiobject.current.temp; */

}
  
req.send();


