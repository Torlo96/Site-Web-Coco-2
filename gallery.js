const artworks = [
  {
    title: "Le Printemps",
    desc: "Peinture acrylique sur toile",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/printemps.jpg",
    sold: false
  },
  {
    title: "Vie marine",
    desc: "Peinture acrylique sur toile",
    price: "225 $",
    dim: "18 × 12 in",
    img: "images/bunch-of-bananas-isolated-on-white-2-1003274169.jpg",
    sold: true
  },
  {
    title: "Jungle",
    desc: "Peinture acrylique",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/nanl8ifhzx541-456858964.jpg",
    sold: false
  },
  {
    title: "Banane plus",
    desc: "Peinture acrylique",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/nanl8ifhzx541-456858964.jpg",
    sold: true
  }, 
    {
    title: "Banane plus",
    desc: "Peinture acrylique",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/nanl8ifhzx541-456858964.jpg",
    sold: true
  },
  {
    title: "Banane plus",
    desc: "Peinture acrylique",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/nanl8ifhzx541-456858964.jpg",
    sold: true
  }, 
  {
    title: "Banane plus",
    desc: "Peinture acrylique",
    price: "360 $",
    dim: "20 × 16 in",
    img: "images/nanl8ifhzx541-456858964.jpg",
    sold: true
  }     
];


const availableGallery = document.getElementById("gallery-available");
const soldGallery = document.getElementById("gallery-sold");

artworks.forEach(work => {
  const cardHTML = `
    <article class="card ${work.sold ? "sold" : ""}"
      data-title="${work.title}"
      data-desc="${work.desc}"
      data-price="${work.price}"
      data-dim="${work.dim}"
      data-img="${work.img}">

      <img loading="lazy" src="${work.img}" alt="${work.title}">

      <div class="meta">
        <div>
          <div class="title">${work.title}</div>
          <div class="dim"></div>   
        </div>
        <div class="price"></div>
      </div>
    </article>
  `;

  if (work.sold) {
    soldGallery.insertAdjacentHTML("beforeend", cardHTML);
  } else {
    availableGallery.insertAdjacentHTML("beforeend", cardHTML);
  }
});











const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbDesc = document.getElementById("lightbox-desc");
const lbDim = document.getElementById("lightbox-dim");
const lbPrice = document.getElementById("lightbox-price");
const lbClose = document.querySelector(".lightbox-close");





function openLightbox(card) {
  lbImg.src = card.dataset.img;
  lbImg.alt = card.dataset.title;
  lbTitle.textContent = card.dataset.title;
  lbDesc.textContent = card.dataset.desc;
  lbDim.textContent = card.dataset.dim;
  lbPrice.textContent = card.dataset.price;

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}


function showNext() {
  currentIndex = (currentIndex + 1) % currentCards.length;
  openLightbox(currentCards[currentIndex]);
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentCards.length) % currentCards.length;
  openLightbox(currentCards[currentIndex]);
}

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;

  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowRight":
      showNext();
      break;
    case "ArrowLeft":
      showPrev();
      break;
  }
});


document.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;

  const gallery = card.closest(".gallery-grid");
  currentCards = Array.from(gallery.querySelectorAll(".card"));
  currentIndex = currentCards.indexOf(card);

  openLightbox(card);
});

document.querySelector(".lightbox-arrow.next")
  .addEventListener("click", showNext);

document.querySelector(".lightbox-arrow.prev")
  .addEventListener("click", showPrev);

lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lbImg.src = "";
  document.body.classList.remove("lightbox-open");
}


