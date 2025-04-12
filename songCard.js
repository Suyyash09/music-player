import songs from "./songs.js";

const song_Card = document.getElementById("songCard-template");
export const faceCard = document.createElement("div");
faceCard.classList.add("card", "container", "text-center");

const imageElement = document.createElement("img");
imageElement.classList.add("card-image", "img-thumbnail", "row");

const songName = document.createElement("h2");
songName.classList.add("card-title", "row", "text-start");

const songArtist = document.createElement("p");
songArtist.classList.add("card-artist", "row", "text-start");

const audioElements = document.createElement("div");
audioElements.classList.add(
  "audio-elements",
  "--plyr-color-main",
  "--plyr-font-weight-bold"
);

const playElement = document.createElement("audio");
playElement.classList.add(".audio-player");
playElement.autoplay = true;
playElement.controls = true;

const audioButtons = document.createElement("div");
audioButtons.classList.add("audio-buttons");

const prevButton = document.createElement("button");
prevButton.textContent = "Previous";
prevButton.classList.add("prev-button", "btn", "btn-primary", "btn-sm"); // Add Bootstrap classes to the button

const nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.classList.add("next-button", "btn", "btn-primary", "btn-sm"); // Add Bootstrap classes to the button

// song card - includes the whole div of #songCard-template
song_Card.appendChild(faceCard);
song_Card.appendChild(audioElements);
song_Card.appendChild(audioButtons);

// face card - for the upper part of the song card
faceCard.appendChild(imageElement);
faceCard.appendChild(songName);
faceCard.appendChild(songArtist);

// audio elements - for the audio player
audioElements.appendChild(playElement);

// audio buttons - for the previous and next buttons
audioButtons.appendChild(prevButton);
audioButtons.appendChild(nextButton);

export function updateSongCard(id) {
  // Find the song object in the songs array that matches the given id
  const currentSong = songs.find((song) => song.id === id);

  // Check if a song with the given id was found
  if (currentSong) {
    imageElement.src = currentSong.image;
    imageElement.alt = currentSong.name;
    songName.textContent = currentSong.name;
    songArtist.textContent = currentSong.artist;
    playElement.src = currentSong.source;
    playElement.load(); // Load the new audio source
  } else {
    console.error(`Song with id ${id} not found.`);
    // Optionally, update the UI to indicate that the song wasn't found
  }
}

let song_no = 0; // Initialize the song number

document.addEventListener("DOMContentLoaded", () => {
  prevButton.addEventListener("click", () => {
    song_no = (songs.length + (song_no - 1)) % songs.length;
    const currSong = songs[song_no].id;
    console.log(currSong);
    updateSongCard(currSong);
  });

  nextButton.addEventListener("click", () => {
    song_no = (song_no + 1) % songs.length;
    const currSong = songs[song_no].id;
    console.log(currSong);
    updateSongCard(currSong);
  });

  // updateSongCard(); // Initial call to display the first song
});

updateSongCard(songs[0].id); // Initial call to display the first song
