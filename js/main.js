
function resizeGridItem(item){
    const grid = item.parentElement;

    if(!grid) return;

    const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
    const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("gap"));

    const height = item.getBoundingClientRect().height;
    const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));

    item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAll(){
    document.querySelectorAll(".card").forEach(resizeGridItem);
}

window.addEventListener("load", () => {
    resizeAll();

    document.querySelectorAll(".card img").forEach(img => {
        if(!img.complete){
            img.addEventListener("load", resizeAll);
        }
    });

    setTimeout(resizeAll, 300);
    setTimeout(resizeAll, 800);
    setTimeout(resizeAll, 1500);
});

window.addEventListener("resize", resizeAll);

let currentSlide = 0;
let slides = [];

function openModal(title, description, mediaArray = [], className = "", softwares = []){
    const modal = document.getElementById("modal");
    const track = document.getElementById("carouselTrack");
    const softContainer = document.getElementById("modalSoftwares");
    const arrows = document.querySelectorAll(".arrow");

    modal.style.display = "flex";
    track.innerHTML = "";
    softContainer.innerHTML = "";
    slides = [];

    mediaArray.forEach(media => {
        let element;

        if(media.includes("youtube.com/embed")){
            element = document.createElement("iframe");
            element.src = media;
            element.setAttribute("allowfullscreen", "");
            element.setAttribute(
                "allow",
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            );
        } else {
            element = document.createElement("img");
            element.src = media;
            element.alt = title;
        }

        track.appendChild(element);
        slides.push(element);
    });

    currentSlide = 0;
    showSlide(currentSlide);

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = description;
    document.getElementById("modalClass").innerText = className;

    softwares.forEach(soft => {
        const img = document.createElement("img");
        img.src = soft;
        img.alt = "Software icon";
        softContainer.appendChild(img);
    });

    arrows.forEach(arrow => {
        arrow.style.display = slides.length <= 1 ? "none" : "block";
    });

    hideNavigation();

    document.body.classList.add("modal-open");
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open");

    showNavigation();
}

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
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

function toggleMenu(){
    document.getElementById("navMenu").classList.toggle("open");
}

function hideNavigation(){
    const nav = document.querySelector(".nav-pill");
    const hamburger = document.querySelector(".hamburger");

    if(nav) nav.style.display = "none";
    if(hamburger) hamburger.style.display = "none";
}

function showNavigation(){
    const nav = document.querySelector(".nav-pill");
    const hamburger = document.querySelector(".hamburger");

    if(nav) nav.style.display = "";
    if(hamburger) hamburger.style.display = "";
}

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("open");
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav-pill");

    if(!nav) return;

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});