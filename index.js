document.querySelector('#btnSize').addEventListener('click', e => {
    updateGrid(prompt('size = ? e.g. 1 ~ 100'));
})


function updateGrid(size){
    if( ! (size >= 1 && size <= 100 )) return console.log('Error size');
    let container = document.querySelector('#container')
    // remove child Div from previous if there is
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    // Add cell
    console.log(container)
    const MARGINSIZE = 1;
    let totalWidth = container.clientWidth ;
    let totalHeight = container.clientHeight;
    let cellWidth = (totalWidth / size) - MARGINSIZE * 2
    let cellHeight = (totalHeight / size) - MARGINSIZE * 2
    console.log(cellWidth, cellHeight)

    for(let i = 0 ; i < size; i++){
        let newRow = document.createElement('div')
        newRow.classList.add('row')
        
        for(let i = 0; i < size; i++){
            let newCell = document.createElement('div')
            newCell.classList.add('cell')
            newCell.style.width = `${cellWidth}px`;
            newCell.style.height = `${cellHeight}px`;
            newCell.addEventListener("mouseenter" , e => {
                e.target.style.backgroundColor = 'lightblue' ;
            })
            newRow.appendChild(newCell)
        }
        container.appendChild(newRow)
    }
}

// when refresh page:
updateGrid(prompt('size = ? e.g. 1 ~ 100'));
    
