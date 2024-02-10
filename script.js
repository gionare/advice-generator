let resultId = document.querySelector(".container #idNumber");
console.log(resultId.textContent); // Output the text content of idNumber
let resultDiv = document.querySelector("#results");
let resultBtn = document.querySelector("#getData");

// send a GET request to API. and wait
// once respond received, parse the JSON data from the response body.
//log the parsed data to the console.

async function adviceGen() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await response.json();
    console.log(adviceData);

    const AdviceObj = adviceData.slip;
    // Set the content of resultId using template literals
    resultId.textContent = AdviceObj.id;
    resultDiv.innerHTML = `
    <p>${AdviceObj.advice}</p>`;
  } catch (error) {
    console.error("Error fetching advice", error);
  }
}

adviceGen();

// Random background-image
// Array containing all image URLs
const imageUrls = [
  "./assets/nature.webp",
  "./assets/advice.webp",
  "./assets/eye.webp",
  "./assets/trees.webp",
  "./assets/bob-van-aubel-d2-420SJPNc-unsplash.jpg",
  "./assets/bruce-jastrow-l1H0sF8-v0k-unsplash.jpg",
  "./assets/cai-fang-Q5tLqKzLZc8-unsplash.jpg",
  "./assets/david-becker-5XwOb9Inyeg-unsplash.jpg",
  "./assets/david-dvoracek-vE_qxEQggj0-unsplash.jpg",
  "./assets/dominik-jirovsky-re2LZOB2XvY-unsplash.jpg",
  "./assets/gio-chanturia-2aGoA1zcWfI-unsplash.jpg",
  "./assets/giuseppe-mondi-fJWYwHWYQpY-unsplash.jpg",
  "./assets/illiya-vjestica-W5FdAcHp7l8-unsplash.jpg",
  "./assets/iman-gozal-5iQWgow3_S0-unsplash.jpg",
  "./assets/jairph-CaU1lKpWqM8-unsplash.jpg",
  "./assets/jairph-Edx0NpJ29fQ-unsplash.jpg",
  "./assets/jairph-ULygfvh-Qws-unsplash.jpg",
  "./assets/joshua-earle-6fe4TDRkK30-unsplash.jpg",
  "./assets/julia-cheperis-WFQ5AXrXDFs-unsplash.jpg",
  "./assets/lachlan-cruickshank-S9v_EPJfGys-unsplash.jpg",
  "./assets/maksym-mazur-dYMHjGwsyv4-unsplash.jpg",
  "./assets/marek-piwnicki-LQYxMsOljAI-unsplash.jpg",
  "./assets/max-letek-fp-f0-reO7U-unsplash.jpg",
  "./assets/mike-swigunski-qlJ9nGQS6x0-unsplash.jpg",
  "./assets/mike-swigunski-qlJ9nGQS6x0-unsplash.jpg",
  "./assets/mostafa-meraji-k0fS9Wenggc-unsplash.jpg",
  "./assets/mostafa-meraji-x_v1_1BAbu0-unsplash.jpg",
  "./assets/neom-4q87Z96NBYg-unsplash.jpg",
  "./assets/neom-9Jgo0Ix_TRw-unsplash.jpg",
  "./assets/neom-nMzbnMzMjYU-unsplash.jpg",
  "./assets/neom-NPDnHmYsl6Y-unsplash.jpg",
  "./assets/neom-r4ZSR0cKJw8-unsplash.jpg",
  "./assets/neom-THlO6Mkf5uI-unsplash.jpg",
  "./assets/neom-tUqMoFE_eAE-unsplash.jpg",
  "./assets/neom-ud9NlvvEzUI-unsplash.jpg",
  "./assets/neom-wMHauMZiQjg-unsplash.jpg",
  "./assets/neom-wSJmlKMecHU-unsplash.jpg",
  "./assets/neom-YeLs9lJDx9M-unsplash.jpg",
  "./assets/neom-zYy15TtlgGk-unsplash.jpg",
  "./assets/patrick-schneider-8bPJ0vagphw-unsplash.jpg",
  "./assets/tobias-reich-2YH7MEMuly4-unsplash.jpg",
  "./assets/tobias-reich-VltYe88rkt8-unsplash.jpg",
  "./assets/viktor-bystrov-Gi0OMNguFaw-unsplash.jpg",
  "./assets/yousef-espanioly-DA_tplYgTow-unsplash.jpg",
];

// Get a random index to select an image URL
let randomIndex = Math.floor(Math.random() * imageUrls.length);

// Select a random background image URL
const randomImageUrl = imageUrls[randomIndex];
console.log(randomImageUrl);

// Set the background image of the body element
document.body.style.backgroundImage = `url(${randomImageUrl})`;
