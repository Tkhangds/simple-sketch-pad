const container = document.querySelector(".container");
const btn = document.querySelector(".renewBtn");

let gridNumber = 0;

var makingColorCode = '0123456789ABCDEF';
var finalCode = '#';

function drawGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    gridNumber = parseInt(prompt("Enter the grid size: "));

    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            const child = document.createElement("div");
            child.style["flex"] = "1 0 " + 100 / gridNumber + "%";
            child.style["height"] = "${500/gridNumber}px";
            child.style["borderRadius"] = "5px";
            child.addEventListener("mouseover", () => {

                finalCode = '#';
                for (var counter = 0; counter < 6; counter++) {
                    finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
                }
                child.style["filter"] = "brightness(" + 1 + ")";
                child.style["background"] = finalCode;
            }
            )

            container.appendChild(child);
        }
    }
}

drawGrid();

btn.addEventListener("click", () => drawGrid());



