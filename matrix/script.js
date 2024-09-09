"use strict"

const table = document.getElementById('main_table')
const height = 20
const width = 20

function newColor(e){
    //get random color
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";
    //
    e.style.backgroundColor = color


    
}


for(let i=0;i<height;i++){
    let row = document.createElement('tr')
    table.appendChild(row)
    for(let j=0;j<width;j++){
        let col = document.createElement('td')
        col.addEventListener('mouseover', function (e) {
            if(!(this.style.backgroundColor)){
                newColor(e.target);
            }
        });
        row.appendChild(col);
        
    }
}