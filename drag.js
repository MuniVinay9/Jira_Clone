const containers = document.querySelectorAll(".container")

const dragState ={
    draggedElement : null,
    parentContainer : null
}
function onDragStart(event){
    const draggedCard = event.target;

    dragState.draggedElement = draggedCard;
    dragState.parentContainer = draggedCard.parentNode;

    // console.log(dragState)
    // console.log(draggedCard)
    // console.log("element is been started dragging");
}
function onDragOver(event){
    let currentContainer = event.target.closest(".container");

    // console.log(currentContainer.id,dragState.parentContainer.id);
    
    if(currentContainer.id === dragState.parentContainer.id ){
        return;
    }
   
    event.preventDefault();
}
function onDrop(event){
    
    const dropContainer = event.target.closest(".container");

    dropContainer.appendChild(dragState.draggedElement);

    // console.log("element is been dropped");
}

for(let container of containers){
    container.addEventListener("dragover",onDragOver)
    container.addEventListener("drop",onDrop)
}