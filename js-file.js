
document.addEventListener("DOMContentLoaded", function() { 
    const gridButtons = document.querySelectorAll(".grid-button"); 
    const gridContainer = document.querySelector(".grid-container");

    function createGridCell() {
        const cell = document.createElement("div"); 
        cell.classList.add("grid-cell"); 
        gridContainer.appendChild(cell); 

        cell.addEventListener("mouseenter", function () {
            cell.classList.add("hovered"); 
        }); 
    }

    for (let i = 0; i < 16 * 16; i++) {
        createGridCell (); 
    }

    gridButtons.forEach(function (button) {
        button.addEventListener("click", function() {
            const gridSize = parseInt(button.getAttribute("data-size")); 

            gridContainer.innerHTML = ""; 

            gridContainer.style.setProperty("--grid-size", gridSize); 

            for (let i = 0; i < gridSize * gridSize; i++) {
                const cell = document.createElement("div"); 
                cell.classList.add("grid-cell"); 
                gridContainer.appendChild(cell); 

                cell.addEventListener("mouseenter", function () {
                    cell.classList.add("hovered"); 
                }); 
            }; 
        }); 
    }); 
}); 


