const likes = document.querySelector(".likes");
function Movie(image, title, category) {
  this.image = image;
  this.title = title;
  this.category = category;
  this.likes = 0;
}

const movies = [
  new Movie("./images/oblivion.jpg", "Oblivion", "Action"),
  new Movie("./images/ribelle.jpg", "Ribelle", "Shows"),
  new Movie("./images/wolverine.jpg", "Wolverine", "Action"),
  new Movie("./images/dexter.jpg", "Dexter", "Action"),
  new Movie("./images/incredibles.jpg", "The Incredibles", "Shows"),
  new Movie("./images/man of steel.jpg", "Man of Steel", "Action"),
  new Movie("./images/gatsby.jpeg", "Gatsby", "Shows"),
  new Movie("./images/drive.jpg", "Drive", "Action"),
  new Movie("./images/ironman3.jpeg", "Iron Man 3", "Action"),
  new Movie("./images/django.jpeg", "Django", "Action"),
];

const newMovieContainer = document.querySelector(".main-movies");

function displayMovies(movieList) {
  newMovieContainer.innerHTML = "";
  movieList.forEach((movie) => {
    const likeClass = movie.likes > 0 ? "liked" : "";

    const newDiv = document.createElement("div");
    newDiv.classList.add("movie-container");
    newDiv.innerHTML = `<div class="movie-image">
      <img src="${movie.image}" alt="${movie.title}" />
    </div>
    <div class="movie-text">
    <div>
      <div class="title">${movie.title}</div>
      <p class="category">${movie.category}</p></div>
     <button class="like-button"><i class="fa-regular fa-heart ${likeClass}"></i></button>
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
    (movie) =>
      category === "all" ||
      movie.category.toLowerCase() === category.toLowerCase()
  );
  displayMovies(filteredMovies);
}

const likeButtons = document.querySelectorAll(".like-button");
likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    toggleLike(movies[index]);
    displayMovies(movies);
  });
});

function toggleLike(movie) {
  movie.likes = 1 - movie.likes;
}
displayMovies(movies);

const all = document.querySelector(".all");
all.addEventListener("click", () => {
  filterMoviesByCategory("all");
});

const action = document.querySelector(".action");
action.addEventListener("click", () => {
  filterMoviesByCategory("Action");
});

const shows = document.querySelector(".shows");
shows.addEventListener("click", () => {
  filterMoviesByCategory("Shows");
});
