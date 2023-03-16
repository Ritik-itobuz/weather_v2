const locationName = document.querySelector("input");
const degree = document.querySelector(".degree h4");
const feels = document.querySelector(".degree p");
var select = document.querySelector('select');
var para = document.querySelector('p');


select.addEventListener('change', setWeather);

let res;

async function getTemp(enteredCity) {
   res = await fetch(`http://localhost:5000/${enteredCity}`)
   

    .then((res) => {

      return res.json();
      

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

  locationName.value = `${res.location}`;
  degree.innerHTML = `${res.data.tempC}<sup>o</sup>`;
  feels.innerHTML = `Feels ${res.data.feelsLike}<sup>o</sup>`;

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
  getTemp("Riga");
};