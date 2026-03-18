function resizeGridItem(item){
    const grid = document.querySelector(".grid");
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));
    const rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAll(){
    document.querySelectorAll('.card').forEach(resizeGridItem);
}

window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);

function openModal(title, description, image){
    document.getElementById("modal").style.display = "flex";

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = description;
    document.getElementById("modalImg").src = image;
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}