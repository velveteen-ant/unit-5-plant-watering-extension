document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');

    let index = 0;
    const images = [];
    images[0] = "assets/stage1.jpg"
    images[1] = "assets/stage2.jpg"
    images[2] = "assets/stage3.jpg"
    images[3] = "assets/stage4.jpg"


    function plantDying() {
        if (index === 3){
            const gameover = document.getElementById('crunch');
            gameover.play(); 
            alert('Your plant died!');
            return;
        } else {
            index++; 
            document.getElementById("img").src = images[index]; 
            const crunch = document.getElementById('crunch');
            crunch.play(); 
        }
    }

    function plantHealing () {
        //iterate
        //water 
        //clear settimeout
        if (index > 1){
            index--; 
            document.getElementById("img").src = images[index]; 
            const water = document.getElementById('water'); 
            water.play(); 
        }

        
    }



    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        //check if watering can collides with plant 
        //check here if watering can is at same position as plant
        //if watering can is at same position as plant, invoke planthealing() and play audio of water
        console.log(elmt.style.top); 
        // if (elmnt.style.top === "0px" && elmnt.style.left === "0px"){
            //invoke healing funciton 

        // }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
    }

    function startTime () {
        setInterval(plantDying, 4000);
    }

    document.getElementById("start").onclick = startTime; 

 

function collision (){
    // if water 
    
}
// if the watering pixels match the image pixels then stop the set 
//timeout and envoke plant healing








})