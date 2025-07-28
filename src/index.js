//Denmark
function updateTime() {
  //denmark
  let denmarkElement = document.querySelector("#denmark");
  let denmarkDateElement = denmarkElement.querySelector(".date");
  let denmarkTimeElement = denmarkElement.querySelector(".time");
  let denmarkTime = moment().tz("Europe/Copenhagen");
  denmarkDateElement.innerHTML = denmarkTime.format("MMMM Do, yyyy");
  denmarkTimeElement.innerHTML = `${denmarkTime.format(
    "h:mm:ss[<small>] A [</small>]"
  )}`;
  //Detroit
  let usaElement = document.querySelector("#usa");
  let usaDateElement = usaElement.querySelector(".date");
  let usaTimeElement = usaElement.querySelector(".time");
  let usaTime = moment().tz("America/Detroit");
  usaDateElement.innerHTML = usaTime.format("MMMM Do, yyyy");
  usaTimeElement.innerHTML = `${usaTime.format(
    "h:mm:ss[<small>] A [</small>]"
  )}`;

  //Tokyo
  let japanElement = document.querySelector("#japan");
  let japanDateElement = japanElement.querySelector(".date");
  let japanTimeElement = japanElement.querySelector(".time");
  let japanTime = moment().tz("Asia/Tokyo");
  japanDateElement.innerHTML = japanTime.format("MMMM Do, yyyy");
  japanTimeElement.innerHTML = `${japanTime.format(
    "h:mm:ss[<small>] A [</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
