let rsltDiv = document.querySelector("#results");
console.log(rsltDiv);
let rsltBtn = document.querySelector("#getData");
console.log(rsltBtn);

// send a GET request to API. and wait
// once respond received, parse the JSON data from the response body.
//log the parsed data to the console.

async function adviceGen() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await response.json();
    console.log(adviceData);
  } catch (error) {
    console.error("Error fetching advice", error);
  }
}
