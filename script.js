const container = document.querySelector(".container");

console.log(container);
var n = 10;

var i,
  c = 0;
for (i = 0; i < n; i++) {
  const newDraggableContainer = document.createElement("div");
  newDraggableContainer.classList.add("draggable-container");
  const newDiv = document.createElement("div");
  newDraggableContainer.innerText = c + 1;
  newDiv.innerText = c + 1;
  newDiv.classList.add("draggable");
  newDiv.setAttribute("draggable", true);
  newDraggableContainer.appendChild(newDiv);
  c++;
  container.appendChild(newDraggableContainer);
}

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".draggable-container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
    draggable.parentElement.classList.add("drag-parent");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const droptarget = container;
    console.log(droptarget);
    const source = document.querySelector(".drag-parent");
    const dropchildren = [...droptarget.children];
    const sourcechildren = [...source.children];
    droptarget.innerHTML = "";
    source.innerHTML = "";
    dropchildren.map((child) => source.appendChild(child));
    sourcechildren.map((child) => droptarget.appendChild(child));
    source.classList.remove('drag-parent')
  });
});
