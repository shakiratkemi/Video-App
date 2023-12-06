const all = document.getElementsByClassName("all");
const action = document.querySelector(".action");
const shows = document.querySelector(".shows");
const likes = document.querySelector(".likes");

function Movie(image, title, category) {
  this.image = image;
  this.title = title;
  this.category = category;
}

const movies = [
  new Movie("./images/oblivion.jpg", "Oblivion", "Science Fiction"),
  new Movie("./images/ribelle.jpg", "Ribelle", "Science Fiction"),
  new Movie("./images/wolverine.jpg", "Wolverine", "Action"),
  new Movie("./images/dexter.jpg", "Dexter", "Action"),
  new Movie("./images/incredibles.jpg", "The Incredibles", "Shows"),
  new Movie("./images/man of steel.jpg", "Man of Steel", "Science Fiction"),
  new Movie("./images/gatsby.jpeg", "Gatsby", "Shows"),
  new Movie("./images/drive.jpg", "Drive", "Action"),
  new Movie("./images/ironman3.jpeg", "Iron Man 3", "Science Fiction"),
  new Movie("./images/django.jpeg", "Django", "Action"),
];

const newMovieContainers = document.querySelectorAll(".main-movies");

function displayMovies(movieList) {
  newMovieContainers.forEach((container) => {
    container.innerHTML = "";
    movieList.forEach((movie) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("movie-container");
      newDiv.innerHTML = `<div class="movie-image">
        <img src="${movie.image}" alt="${movie.title}" />
      </div>
      <div class="movie-text">
        <div class="title">${movie.title}</div>
        <p class="category">${movie.category}</p>
      </div>`;
      container.appendChild(newDiv);
    });
  });
}

displayMovies(movies);

function searchMovies() {
  const search = document.querySelector(".search input").value.toLowerCase();
  const updatedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search)
  );
  displayMovies(updatedMovies);
}
const searchInput = document.querySelector(".search input");
searchInput.addEventListener("input", searchMovies);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchMovies();
  }
});

function filterMoviesByCategory(category) {
  const filteredMovies = movies.filter(
    (movie) => movie.category.toLowerCase() === category.toLowerCase()
  );
  displayMovies(filteredMovies);
}

all.addEventListener("click", function () {
  displayMovies(movies);
});

action.addEventListener("click", function () {
  filterMoviesByCategory("Action");
});

shows.addEventListener("click", function () {
  filterMoviesByCategory("Shows");
});
