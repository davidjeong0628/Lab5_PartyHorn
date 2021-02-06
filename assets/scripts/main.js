const audio = document.getElementById("horn-sound");
const btn = document.getElementById("honk-btn");
const hornImg = document.getElementById("sound-image");
const volInput = document.getElementById("volume-number");
const volImage = document.getElementById("volume-image");
const volSlider = document.getElementById("volume-slider");
const volIcon = {
    l0: "assets/media/icons/volume-level-0.svg",
    l1: "assets/media/icons/volume-level-1.svg",
    l2: "assets/media/icons/volume-level-2.svg",
    l3: "assets/media/icons/volume-level-3.svg"
};
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

volInput.addEventListener("change", (event) => {setVolume(event)});
volSlider.addEventListener("change", (event) => {setVolume(event)});
function setVolume(event) {
    let volume = Number(event.target.value);
    if (volume < 0 || volume > 100) {
        return;
    }

    if (volume === 0) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    // Changes the value of the `<input>` that has not changed. 
    if (event.target.id === volInput.id) {
        volSlider.value = String(volume);
    } else {
        volInput.value = String(volume);
    }

    if (volume === 0) {
        volImage.src = volIcon.l0;
    } else if (volume <= 33) {
        volImage.src = volIcon.l1;
    } else if (volume <= 66) {
        volImage.src = volIcon.l2;
    } else {
        volImage.src = volIcon.l3;
    }

    audio.volume = String(volume/100);
}

airHorn.radio.addEventListener("change", setHorn);
carHorn.radio.addEventListener("change", setHorn);
partyHorn.radio.addEventListener("change", setHorn);
function setHorn() {
    if (airHorn.radio.checked) {
        hornImg.src = airHorn.img;
        audio.src = airHorn.audio;
    } else if (carHorn.radio.checked) {
        hornImg.src = carHorn.img;
        audio.src = carHorn.audio;
    } else if (partyHorn.radio.checked) {
        hornImg.src = partyHorn.img;
        audio.src = partyHorn.audio;
    }
}

btn.addEventListener("click", (event) => {
    playAudio(event);
});
function playAudio(event) {
    event.preventDefault();
    audio.play(); 
}