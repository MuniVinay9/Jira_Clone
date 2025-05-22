

const createIssue = document.getElementById("createIssue")
const issueInput = document.querySelector(".text-area")
const todoContainer = document.getElementById("todo")


function onCreateClick(){
    toggleCreateIssueOptions();
}
function toggleCreateIssueOptions(){
    createIssue.classList.toggle("hide")
    issueInput.classList.toggle("hide")

    if(!issueInput.classList.contains("hide")){
        issueInput.focus();
    }
}

function onBlurCreateIssueToggle(){
    createIssue.classList.toggle("hide")
    issueInput.classList.toggle("hide")

    console.log("blur")

}

function onEnter(e){
    e.preventDefault();
    if(e.key == "Enter"){
        const issueName = issueInput.value;

        if(!issueName){
            return;
        }
        
        // create an issue card with the issueName
        //  <div class="card">
        //   <span>UI for Excalidraw</span>
        //   <span class="material-symbols-outlined">delete</span>
        // </div>

        const inputCard = document.createElement("div");
        inputCard.draggable ="true";
        inputCard.classList.add("card");
        
        inputCard.innerHTML = `<span>${issueName}</span>
         <span class="material-symbols-outlined" onclick="deleteCard(this)">delete</span>
        `
        todoContainer.appendChild(inputCard);  
        issueInput.blur();
        
    }

}


function deleteCard(element){
    element.parentNode.remove();
}

createIssue.addEventListener("click",onCreateClick)


issueInput.addEventListener("blur", onBlurCreateIssueToggle);
issueInput.addEventListener("keyup", onEnter)