import songs from "./songs.js";

const genres = [
  "All",
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Hip-Hop",
  "Country",
];

const { id, name, artist, image, genre, source } = songs;

const songList = document.querySelector("#allSongs-template");

const filterInput = document.createElement("label");
filterInput.textContent = "Filter by Genre";
songList.appendChild(filterInput);

const filter = document.createElement("select");
filter.classList.add("form-select", "form-select-sm");
filter.setAttribute("aria-label", "Small select example");
filterInput.appendChild(filter);

const songsName = document.createElement("label");
songsName.textContent = "Songs Name";
songList.appendChild(songsName);

const songsList = document.createElement("div");
songsList.classList.add("songs-list");
songList.appendChild(songsList);

genres.forEach((genre) => {
  const option = document.createElement("option");
  option.classList.add(genre);
  option.value = genre;
  option.textContent = genre;
  filter.appendChild(option);
});

// genres.forEach((genre) => {
//   if(genre.includes("All") || genre.includes(genre)) {
// });
