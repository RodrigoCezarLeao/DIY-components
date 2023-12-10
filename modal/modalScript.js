function openModal(nodeId){
    let node = document.getElementById(nodeId);
    
    let modalContainer = document.createElement('div');
    modalContainer.style.width = "90%";
    modalContainer.style.height = "80vh";
    modalContainer.style.background = "lightgrey";
    modalContainer.style.position = "absolute";
    modalContainer.style.top = "10vh";
    modalContainer.style.left = 0;
    modalContainer.style.right = 0;
    modalContainer.style.marginLeft = "auto";
    modalContainer.style.marginRight = "auto";
    modalContainer.style.boxShadow = "0px 0px 10px #888";
    modalContainer.style.padding = "20px";
 
    

    let closeButton = document.createElement("p");    
    closeButton.innerHTML = "X";
    closeButton.style.color = "red";
    closeButton.style.fontSize = "30pt";
    closeButton.style.cursor = "pointer";
    closeButton.style.position = "absolute";
    closeButton.style.right = "10px";
    closeButton.style.top = "-30px";

    closeButton.addEventListener("mouseover", () => {
        closeButton.style.textDecoration = "underline";
    });
    closeButton.addEventListener("mouseout", () => {
        closeButton.style.textDecoration = "none";
    });
    closeButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    node.style.display = "block";

    modalContainer.appendChild(node);
    modalContainer.appendChild(closeButton);
    document.body.appendChild(modalContainer);

}

