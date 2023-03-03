const locationName = document.querySelector("input");
const degree = document.querySelector(".degree h4");
const feels = document.querySelector(".degree p");


let res;

// get weather data using api
async function getTemp(enteredcity) {
  res = await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${enteredcity}&aqi=no`)
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

locationName.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getTemp(event.target.value);
  }
});

window.onload = () => {
  getTemp("san marino");
};
