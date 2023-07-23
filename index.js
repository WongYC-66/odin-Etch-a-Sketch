let colorMode = 'normal'

document.querySelector('#btnSize').addEventListener('click', e => {
    updateGrid(prompt('size = ? e.g. 1 ~ 100'));
})
document.querySelector('#btnNormalColor').addEventListener('click', e => {
    colorMode = 'normal'
})
document.querySelector('#btnRainbow').addEventListener('click', e => {
    colorMode = 'rainbow'
})


function updateGrid(size){
    if( ! (size >= 1 && size <= 100 )) return console.log('Error size');
    let container = document.querySelector('#container')
    // remove child Div from previous if there is
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    // Add cell
    const MARGINSIZE = 1;
    let totalWidth = container.clientWidth ;
    let totalHeight = container.clientHeight;
    let cellWidth = (totalWidth / size) - MARGINSIZE * 2
    let cellHeight = (totalHeight / size) - MARGINSIZE * 2

    for(let i = 0 ; i < size; i++){
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        
        for(let i = 0; i < size; i++){
            let newCell = document.createElement('div')
            newCell.classList.add('cell')
            newCell.style.width = `${cellWidth}px`;
            newCell.style.height = `${cellHeight}px`;
            newCell.style.backgroundColor = `rgb(255,255,255)`
            newCell.addEventListener("mouseenter" , e => {
                if(colorMode === 'rainbow'){
                    let r = Math.floor(Math.random()*256)
                    let g = Math.floor(Math.random()*256)
                    let b = Math.floor(Math.random()*256) // random rainbow color
                    e.target.style.backgroundColor = `rgb(${r},${g},${b})` ;
                } else {
                    // normal color mode : slowly from white > grey > black
                    let rgbArr = e.target.style.backgroundColor.replaceAll(/[rgb\(\) ]/g, '').split(',')
                    let r = parseInt(rgbArr[0]) - 26 
                    let g = parseInt(rgbArr[1]) - 26 
                    let b = parseInt(rgbArr[2]) - 26  // color darkens by 10% each interaction
                    console.log(rgbArr)
                    e.target.style.backgroundColor = `rgb(${r},${g},${b})` ;
                }
                
            })
            newRow.appendChild(newCell)
        }
        container.appendChild(newRow)
    }
}

// when refresh page:
updateGrid(16);
    
