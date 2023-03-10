const locationName = document.querySelector("input");
const degree = document.querySelector(".degree h4");
const feels = document.querySelector(".degree p");
var select = document.querySelector('select');
var para = document.querySelector('p');


select.addEventListener('change', setWeather);

let res;
// async function setWeather(){
  
//   var choice = select.value;

  
//   if(choice === 'Kerala'){
//     const ans = await fetch('http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no');
//     console.log(ans);
//   }else if (choice === 'delhi'){
//     para.textContent = fetch('http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no');
//     console.log(ans);')
//   }else if(choice === 'snowing'){
//     para.textContent = 'snowing weather';
//   }else if (choice === 'overcast'){
//     para.textContent = 'may or may not rain';
//   }else {
//     para.textContent = '';
//   }
  
// }


async function getTemp(enteredCity) {
  res = await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${enteredCity}&aqi=no`)
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      alert(err);
    });

  if (!res.error) {
    addTemp();
  } else {
    alert(res.error.message);
  }
}


function addTemp() {
  locationName.value = `${res.location.name}`;
  degree.innerHTML = `${res.current.temp_c}<sup>o</sup>`;
  feels.innerHTML = `Feels ${res.current.feelslike_c}<sup>o</sup>`;

}
async function setWeather()
{
  var choice = select.value;
      const ans = await getTemp(`${choice}`);
    
}
  

  


locationName.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getTemp(event.target.value);
  }
});

window.onload = () => {
  getTemp("san marino");
};
