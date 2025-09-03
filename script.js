// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true
});

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxVideoSrc = document.getElementById("lightbox-video-src");
const closeBtn = document.querySelector(".lightbox .close");

// Open lightbox when clicking images
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";
  });
});

// Open lightbox when clicking videos
document.querySelectorAll(".gallery-grid video").forEach(video => {
  video.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "video") {
      lightbox.style.display = "flex";
      lightboxVideoSrc.src = video.querySelector("source").src;
      lightboxVideo.load();
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
    }
  });
});

// Close lightbox with × button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
});

// Close lightbox when clicking outside
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxVideo.pause();
  }
});


// ---------------- Donation Popup ---------------- //
const donationPopup = document.getElementById("donation-popup");
const closePopup = document.querySelector(".close-popup");

// ✅ Select *all* Donate buttons (top hero + donation section)
const donateButtons = document.querySelectorAll(".btn, .btn-alt");

donateButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // stop link navigation
    donationPopup.style.display = "flex";
  });
});

// Close popup with ×
closePopup.addEventListener("click", () => {
  donationPopup.style.display = "none";
});

// Close when clicking outside popup
donationPopup.addEventListener("click", (e) => {
  if (e.target === donationPopup) {
    donationPopup.style.display = "none";
  }
});

// Copy buttons for Account, IFSC, and UPI
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-copy");
    const textToCopy = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = btn.innerText;
      btn.innerText = "Copied ✅";
      setTimeout(() => {
        btn.innerText = originalText;
      }, 2000);
    });
  });
});

// Open YouTube popup
document.querySelectorAll(".youtube-thumb").forEach(item => {
  item.addEventListener("click", () => {
    const videoUrl = item.getAttribute("data-video") + "?autoplay=1";
    const lightbox = document.getElementById("youtube-lightbox");
    const iframe = document.getElementById("youtube-frame");

    iframe.src = videoUrl;
    lightbox.style.display = "flex";
  });
});

// Close YouTube popup
document.querySelector("#youtube-lightbox .close").addEventListener("click", () => {
  const lightbox = document.getElementById("youtube-lightbox");
  const iframe = document.getElementById("youtube-frame");

    iframe.src = ""; // stop video
    lightbox.style.display = "none";
});



