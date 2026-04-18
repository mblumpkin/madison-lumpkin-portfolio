function resizeGridItem(item){
    const img = item.querySelector('img');
    if(!img) return; // prevents crashes

    const grid = document.querySelector(".grid");
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

    const rowSpan = Math.ceil((img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAll(){
    document.querySelectorAll('.card').forEach(resizeGridItem);
}

window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);

let currentSlide = 0;
let slides = [];

function openModal(title, description, mediaArray = [], className = "", softwares = []){
    document.getElementById("modal").style.display = "flex";

    const track = document.getElementById("carouselTrack");
    track.innerHTML = "";
    slides = [];

    mediaArray.forEach((media, index) => {
        let el;

        if(media.includes("youtube") || media.includes("embed")){
            el = document.createElement("iframe");
            el.src = media;
            el.setAttribute("frameborder", "0");
            el.setAttribute("allowfullscreen", true);
        } else {
            el = document.createElement("img");
            el.src = media;
        }

        if(index === 0) el.classList.add("active");

        track.appendChild(el);
        slides.push(el);
    });

    currentSlide = 0;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = description;
    document.getElementById("modalClass").innerText = className;

    const softContainer = document.getElementById("modalSoftwares");
    softContainer.innerHTML = "";

    softwares.forEach(soft => {
        const img = document.createElement("img");
        img.src = soft;
        softContainer.appendChild(img);
    });
}

function showSlide(index){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide(){
    if(slides.length === 0) return;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide(){
    if(slides.length === 0) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}