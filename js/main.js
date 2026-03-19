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

function openModal(title, description, image = "", className = "", softwares = []){
    document.getElementById("modal").style.display = "flex";

    const media = document.getElementById("modalMedia");

    if(image){
        media.innerHTML = `<img src="${image}">`;
    } else {
        media.innerHTML = "";
    }

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

function closeModal(){
    document.getElementById("modal").style.display = "none";
    document.getElementById("modalMedia").innerHTML = ""; // stops video / clears
}