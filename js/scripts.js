let menu_bot;

let navMenu;

let arrMenuUp;

let header;

let body;

// Loader logic

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});

// Web init logic

function initWeb() {

  menu_bot = document.getElementById('menu_bot');

  navMenu = document.getElementById('nav-menu');

  body = document.getElementById('body-main');

  header = document.getElementById('header');


}

window.onload = initWeb();

// Menu logic

arrMenuUp = document.querySelectorAll('.nav-link');

arrMenuUp.forEach(m => {

  m.addEventListener('click', (b) => {

    menu_bot.classList.remove('open_menu');

    body.classList.remove('open_menu_body');

    navMenu.classList.remove('open_menu_nav');
  });



})

menu_bot.addEventListener('click', (ev) => {

  ev.preventDefault();

  ev.currentTarget.classList.toggle('open_menu');

  body.classList.toggle('open_menu_body');

  navMenu.classList.toggle('open_menu_nav');




})



// Video logic

document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.querySelector('.video-slide-wrapper');
  const videoInner = videoWrapper.querySelector('.video-slide-inner');
  const vidRef = videoInner.querySelector('video');
  const playButton = videoWrapper.querySelector('.video-playbutton');
  const videoSlideBack = videoWrapper.querySelector('.video-slide-background');

  const initVideo = () => {

    if (vidRef.paused) {
      vidRef.play();

    } else {
      vidRef.pause();
    }

    videoSlideBack.style.display = "none"
  };

  playButton.addEventListener('click', initVideo);
});

// Form logic

document.getElementById('form-submit').addEventListener('submit', function (event) {

  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(this);

  console.log('formData', formData);

  fetch('formv2.php', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.text(); // Convert response body to JSON
      } else {
        throw new TypeError("Response was not JSON");
      }
    }) // Assuming the server responds with JSON
    .then((data) => {
      console.log("data from response Mailjet", data);
    })
    .catch((error) => console.error("Fetch error:", error));
});

// Modals logic

document.getElementById('termsOfService').addEventListener('click', function () {
  openModalLegal();
});

document.getElementById('privacyPolicy').addEventListener('click', function () {
  openModalPrivacy();
});

function openModalLegal() {
  document.getElementById('legalModal').style.display = 'flex';
  disableBodyScroll(true);
}

function openModalPrivacy() {
  document.getElementById('privacyModal').style.display = 'flex';
  disableBodyScroll(true);
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  disableBodyScroll(false);
}

function disableBodyScroll(disable) {
  document.body.style.overflow = disable ? 'hidden' : 'auto';
}