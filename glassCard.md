body {
background-image: url(./assets/nature.webp);
background-size: cover;
background-position: center center;
background-attachment: fixed;
color: aliceblue;
}

.title {
margin: auto;
width: 100%;
max-width: 40rem;
font-size: 4rem;
text-align: center;
}

.card {
width: 90%;
max-width: 400px;
padding: 5rem 2.5rem;

border-radius: 1rem;
border: 1px solid transparent;

backdrop-filter: blur(1rem);
box-shadow: 1.3rem 1.3rem 1.3rem rgba(0, 0, 0, 0.5);

border-top-color: rgba(255, 255, 255, 0.5);
border-left-color: rgba(255, 255, 255, 0.5);
border-bottom-color: rgba(255, 255, 255, 0.1);
border-right-color: rgba(255, 255, 255, 0.1);
}

.cb1 {
background-color: rgba(255, 255, 255, 0.1);
}

.cb2 {
color: black;
background-color: linear-gradient(
to right,
bottom,
rgba(255, 255, 255, 0.5),
rgba(255, 255, 255, 0.3)
);
}

.card-number {
color: rgba(255, 255, 255, 0.08);
font-size: 8rem;
z-index: -1;
position: absolute;
top: -1rem;
right: 2.5rem;
}

.btn {
border-radius: 2rem;
}

.btn:hover {
box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
}

<!-- HTML -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cool Card</title>

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <!-- Main CSS -->
    <link rel="stylesheet" href="glassstyle.css" />

  </head>
  <body>
    <div class="container">
      <h1 class="title text-center py-4">Generate advice</h1>
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card m-2 cb1 text-content">
            <div class="card-body">
              <span class="card-number fw-bold">04</span>
              <h2 class="card-title mb-4">Advice</h2>
              <p class="carttext">rame texti</p>
              <a href="" class="btn btn-outline-light"> New Advice</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card m-2 cb2 text-content">
            <div class="card-body">
              <span class="card-number fw-bold">13</span>
              <h2 class="card-title mb-4">Advice</h2>
              <p class="carttext">rame texti</p>
              <a href="" class="btn btn-outline-light"> New Advice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
