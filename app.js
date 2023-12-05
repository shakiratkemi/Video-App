function displayAllMovies() {
  const movieSections = [
    ...document.getElementsByClassName("main-movies"),
    ...document.getElementsByClassName("main-movies-1"),
  ];

  movieSections.forEach((section) => {
    section.style.display = "block";
  });
}

const all = document.getElementById("all");
all.addEventListener("click", displayAllMovies);
