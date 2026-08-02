// =====================================
// OPENING SCREEN
// =====================================

const opening = document.getElementById("opening");
const openButton = document.getElementById("openInvitation");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

openButton.addEventListener("click", () => {

    opening.classList.add("hide");

    music.play();

    musicPlaying = true;

    document.body.style.overflow = "auto";

});

// =====================================
// MUSIC BUTTON
// =====================================

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "♫";

    } else {

        music.play();

        musicPlaying = true;

        musicButton.innerHTML = "❚❚";

    }

});

// =====================================
// COUNTDOWN
// =====================================

const weddingDate = new Date("September 18, 2026 08:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

    }

}, 1000);

// =====================================
// COPY REKENING
// =====================================

function copyRekening(number) {

    navigator.clipboard.writeText(number);

    alert("Nomor rekening berhasil disalin.");

}

// =====================================
// BACK TO TOP
// =====================================

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll("a").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
