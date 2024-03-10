const container = document.querySelector(".container");
const btn = document.querySelector(".renewBtn");

let gridNumber = 0;

function drawGrid() {
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
    
    gridNumber = parseInt(prompt("Enter the grid size: "));

    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            const child = document.createElement("div");
            child.style["flex"] = "1 0 " + 100 / gridNumber + "%";
            child.style["height"] = "20px";

            child.addEventListener("mouseover", () => {
                child.style["background"] = "red";
            })

            container.appendChild(child);
        }
    }
}

drawGrid();

btn.addEventListener("click",() => drawGrid());



