# Frontend Mentor - Advice generator app solution

This project is a simple web application that generates random advice and displays it on a card. It uses the Advice Slip JSON API to fetch random advice.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Credits](#Credits)
- [Acknowledgments](#acknowledgments)

### Screenshot

<img src="./images/Screenshot from 2024-02-09 22-33-08.png" width="350px">

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

## Features

- Fetches random advice from the Advice Slip JSON API.
- Displays the fetched advice on a card.
- Allows users to generate new advice by clicking a button.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS (Bootstrap 5)
- Flexbox

### What I learned

```html
<div class="d-flex justify-content-center">
  <div class="card m-2 cb1 text-content">
    <div class="card-body">
      <span class="card-number fw-bold" id="idNumber">--</span>
      <h2 class="card-title mb-4"></h2>
      <p class="carttext" id="results">You are cool</p>
      <a href="" class="btn btn-outline-light" id="getData"> New Advice</a>
    </div>
  </div>
</div>
```

```css
.card {
  width: 90%;
  max-width: 700px;
  padding: 10rem 5rem;
  font-size: 2.5rem;

  border-radius: 1.5rem;
  border: 2px solid transparent;

  backdrop-filter: blur(0.3rem);
  box-shadow: 1.3rem 1.3rem 1.3rem rgba(0, 0, 0, 0.5);

  border-top-color: rgba(225, 225, 225, 0.5);
  border-left-color: rgba(225, 225, 225, 0.5);
  border-bottom-color: rgba(225, 225, 225, 0.1);
  border-right-color: rgba(225, 225, 225, 0.1);
}
```

```js
async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice:", error);
    adviceText.textContent = "Failed to fetch advice.";
  }
}
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Credits

- The background images are sourced from Unsplash.
- The Advice Slip JSON API is used to fetch random advice.

<img src="./images/HTTP status codes.jpeg" alt="HTTP status codes" >
