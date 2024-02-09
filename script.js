let rsltId = document.querySelector("#idNumber");
let rsltDiv = document.querySelector("#results");
let rsltBtn = document.querySelector("#getData");

// send a GET request to API. and wait
// once respond received, parse the JSON data from the response body.
//log the parsed data to the console.

async function adviceGen() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await response.json();
    console.log(adviceData);

    const AdviceObj = adviceData.slip;
    rsltDiv.innerHTML = `
    <p>${AdviceObj.id}</p>
    <p>${AdviceObj.advice}</p>`;
  } catch (error) {
    console.error("Error fetching advice", error);
  }
}

adviceGen();
