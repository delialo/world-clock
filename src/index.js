function updateTime() {
  //denmark
  let denmarkElement = document.querySelector("#denmark");
  let denmarkDateElement = denmarkElement.querySelector(".date");
  let denmarkTimeElement = denmarkElement.querySelector(".time");
  let denmarkTime = moment().tz("Europe/Copenhagen");
  denmarkDateElement.innerHTML = denmarkTime.format("MMMM Do, yyyy");
  denmarkTimeElement.innerHTML = `${denmarkTime.format(
    "h:mm[<small>] A [</small>]"
  )}`;
  //Detroit
  let usaElement = document.querySelector("#usa");
  let usaDateElement = usaElement.querySelector(".date");
  let usaTimeElement = usaElement.querySelector(".time");
  let usaTime = moment().tz("America/Detroit");
  usaDateElement.innerHTML = usaTime.format("MMMM Do, yyyy");
  usaTimeElement.innerHTML = `${usaTime.format("h:mm[<small>] A [</small>]")}`;

  //Tokyo
  let japanElement = document.querySelector("#japan");
  let japanDateElement = japanElement.querySelector(".date");
  let japanTimeElement = japanElement.querySelector(".time");
  let japanTime = moment().tz("Asia/Tokyo");
  japanDateElement.innerHTML = japanTime.format("MMMM Do, yyyy");
  japanTimeElement.innerHTML = `${japanTime.format(
    "h:mm[<small>] A [</small>]"
  )}`;
}

//display selected city time and date
function showTime(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  if (cityTimeZone.length > 0) {
    let currentDate = moment().tz(cityTimeZone).format("MMMM Do, yyyy");
    let currentTime = moment()
      .tz(cityTimeZone)
      .format("h:mm[<small>] A [</small>]");
    let currentCity = cityTimeZone.replace("_", " ").split("/")[1];
    let userCityTime = document.querySelector("#userCityTime");
    let userCityDate = document.querySelector("#userCityDate");
    let userCityName = document.querySelector("#userCityName");
    userCityTime.innerHTML = currentTime;
    userCityDate.innerHTML = currentDate;
    userCityName.innerHTML = currentCity;
  }
}

updateTime();
setInterval(updateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showTime);
