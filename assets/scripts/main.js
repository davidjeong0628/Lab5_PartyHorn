const audio = document.getElementById("horn-sound");
const btn = document.getElementById("honk-btn");
const img = document.getElementById("sound-image");
const airHorn = {
    audio: "assets/media/audio/air-horn.mp3",
    img: "assets/media/images/air-horn.svg",
    radio: document.getElementById("radio-air-horn")
};
const carHorn = {
    audio: "assets/media/audio/car-horn.mp3",
    img: "assets/media/images/car.svg",
    radio: document.getElementById("radio-car-horn")
};
const partyHorn = {
    audio: "assets/media/audio/party-horn.mp3",
    img: "assets/media/images/party-horn.svg",
    radio: document.getElementById("radio-party-horn")
};


btn.addEventListener("click", (event) => {
    playAudio(event);
});
function playAudio(event) {
    console.log("play audio");
    event.preventDefault();
    audio.play(); 
}

airHorn.radio.addEventListener("change", setHorn);
carHorn.radio.addEventListener("change", setHorn);
partyHorn.radio.addEventListener("change", setHorn);
function setHorn() {
    if (airHorn.radio.checked) {
        img.src = airHorn.img;
        audio.src = airHorn.audio;
    } else if (carHorn.radio.checked) {
        img.src = carHorn.img;
        audio.src = carHorn.audio;
    } else if (partyHorn.radio.checked) {
        img.src = partyHorn.img;
        audio.src = partyHorn.audio;
    }
}