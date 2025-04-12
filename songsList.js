import songs from "./songs.js";
import { updateSongCard } from "./songCard.js";

const genres = [
  "All",
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Hip-Hop",
  "Country",
];

// const { id, name, artist, image, genre, source } = songs;

const songList = document.getElementById("allSongs-template");

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

const songsListContainer = document.createElement("div");
songsListContainer.classList.add("songs-list");
songList.appendChild(songsListContainer);

genres.forEach((genre) => {
  const option = document.createElement("option");
  option.classList.add(genre);
  option.value = genre;
  option.textContent = genre;
  filter.appendChild(option);
});
function render() {
  songsListContainer.innerHTML = "";

  songs.forEach((song) => {
    if (filter.value === song.genre || filter.value === "All") {
      const songItem = document.createElement("button");
      songItem.classList.add("btn", "btn-sm", "btn-secondary");
      songItem.style.width = "100%";
      songItem.style.margin = "3px"; // Add this line
      songItem.style.display = "block"; // Add this line
      songItem.textContent = song.name;
      songsListContainer.appendChild(songItem);
      songItem.addEventListener("click", () => {
        updateSongCard(song.id);
      });
    }
  });
}

render();

filter.addEventListener("change", render);
