const audio = document.getElementById("horn-sound");
const btn = document.getElementById("honk-btn");
const img = document.getElementById("sound-image");

const audioAirHorn = "assets/media/audio/air-horn.mp3";
const radioAirHorn = document.getElementById("radio-air-horn");
const imgAirHorn = "assets/media/images/air-horn.svg";

const radioCarHorn = document.getElementById("radio-car-horn");

const radioPartyHorn = document.getElementById("radio-party-horn");


btn.addEventListener("click", (event) => {
    playAudio(event);
});

function playAudio(event) {
    console.log("play audio");
    event.preventDefault();
    audio.play(); 
}

radioAirHorn.addEventListener("change", setHorn);
radioCarHorn.addEventListener("change", setHorn);
radioPartyHorn.addEventListener("change", setHorn);

function setHorn() {
    if (radioAirHorn.checked) {

    } else if (radioCarHorn.checked) {

    } else if (radioPartyHorn.checked) {

    }
}