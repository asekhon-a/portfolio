// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 10,
      behavior: "smooth"
    });
  });
});

// Certificate lightbox
const certImages = document.querySelectorAll(".cert-card img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lbImg = document.createElement("img");
lightbox.appendChild(lbImg);

certImages.forEach(img => {
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
