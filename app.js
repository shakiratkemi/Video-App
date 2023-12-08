const shows = document.querySelector(".shows");
const likes = document.querySelector(".likes");

function Movie(image, title, category) {
  this.image = image;
  this.title = title;
  this.category = category;
  this.categoryType = categorytype;
  this.likes = likes;
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

const newMovieContainer = document.querySelector(".main-movies");

function displayMovies(movieList) {
  newMovieContainer.innerHTML = "";
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
    newMovieContainer.appendChild(newDiv);
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

const all = document.querySelector(".all");
all.addEventListener("click", displayMovies(movies));

const action = document.querySelector(".action");
action.addEventListener("click", filterMoviesByCategory);
