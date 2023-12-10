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
         

    

    // setInterval(() => {
    //     div.style.transform = "scale(1)";
    // }, 2000);
    
    div.innerHTML = message;
    
    document.body.appendChild(div);
    growEffect(div, 2, 5);

}


function growEffect(div, effectSecs, messageTime){
    let parts = 100;
    let init = 0.8;
    let slice = (effectSecs * 1000 / parts);
    console.log("🚀 ~ file: alertScript.js:43 ~ growEffect ~ slice:", slice)

    for(let i=0; i < parts; i++){
        setTimeout(() => {            
            div.style.transform = `scale(${init + (slice/parts * i)})`;
        }, i*slice);
            console.log("🚀 ~ file: alertScript.js:49 ~ setTimeout ~ init + (slice/parts):", init + (slice/parts))
    }

    // setTimeout(() => {shrinkEffect(div, effectSecs )}, ( messageTime) * 1000);
    // setTimeout(() => {div.style.display = "none"}, (effectSecs/2 + messageTime) * 1000);
}
function shrinkEffect(div, effectSecs){
    let parts = 100;
    let init = 0.8;
    for(let i=parts; i > 0; i--){
        setTimeout(() => {
            let valueToScale = ((1 - init )/parts) * i
            div.style.transform = `scale(${1 - valueToScale})`;            
        }, i*effectSecs);
    }
    
}