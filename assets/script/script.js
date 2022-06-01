let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
    showSlides(slideIndex += 1)
}, 10000)
// DETAIL PRODUK
const newProduct = document.querySelector(".new-product");
newProduct.addEventListener("click", (e)=>{
  if(e.target.className == "btn-card-new") {
    const detailProduct = document.querySelector(".detail-product");
    const bodi = document.querySelector("#stop-scroll");
    detailProduct.style.display = "flex";
    bodi.style.overflow = "hidden"
  }
})
const iconClose = document.querySelector(".icon-close");
iconClose.addEventListener("click", ()=>{
  const detailProduct = document.querySelector(".detail-product");
  detailProduct.style.display = "none";
  const bodi = document.querySelector("#stop-scroll");
  bodi.style.overflow = "visible"
})





