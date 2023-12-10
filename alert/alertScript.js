function myAlert(message){
    let div = document.createElement('div');
    div.style.width = '90%';
    div.style.height = '10vh';
    div.style.background = "red";
    div.style.position = "absolute";
    div.style.top = "0px";
    div.style.left = 0;
    div.style.right = 0;
    div.style.marginLeft = "auto";
    div.style.marginRight = "auto";
    div.style.zIndex = 1000;
    div.style.boxShadow = "0px 0px 10px grey";
    div.style.opacity = 0.8;
    div.style.color = "white";
    div.style.fontSize = "2em";
    div.style.padding =  "20px";
    div.style.cursor = "default";
    div.style.transform = "scale(0.8)";
    div.style.fontWeight = "bold";
    div.style.display = "flex";
    div.style.alignItems = "center";
         

    
    div.innerHTML = message;
    
    document.body.appendChild(div);
    growEffect(div, 0.2);
    shrinkEffect(div, 0.2, 5);

}


function growEffect(div, effectSecs){
    let parts = 100;
    let init = 0.8;
    let slice = (1 - init)/parts;
    let timeSlice = (effectSecs*1000)/parts;
    
    for(let i=0; i < parts; i++){
        setTimeout(() => {            
            let value = init + (slice * i);            
            div.style.transform = `scale(${value})`;
        }, i*timeSlice);
    }

    // setTimeout(() => {shrinkEffect(div, effectSecs )}, ( messageTime) * 1000);
    // setTimeout(() => {div.style.display = "none"}, (effectSecs/2 + messageTime) * 1000);
}
function shrinkEffect(div, effectSecs, messageSecs){
    let parts = 100;
    let init = 0.8;
    let slice = (1 - init)/parts;
    let timeSlice = (effectSecs*1000)/parts;
    
    for(let i=parts; i > 0; i--){
        setTimeout(() => {            
            let value = 1 - (slice * i);            
            div.style.transform = `scale(${value})`;
        }, i*timeSlice + (messageSecs * 1000));

        if (i === 1)
            setTimeout(() => {div.style.display = "none"}, i*timeSlice + (messageSecs * 1000) + (effectSecs * 1000) + 100);
    }
    
}