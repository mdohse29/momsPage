const flk = document.querySelectorAll('.flk');

const pres = document.querySelector('.presentation');
pres.style.backgroundSize = "100% " + pres.scrollHeight + "px";

if (flk.length <= 0){
    document.querySelector('#magic').style.display = 'none'
}

const magic = document.querySelector('#magic');

magic.addEventListener('click', () => {
    if (flk.length > 0){
        for (let i of flk){
            if (i.style.display === 'none' || i.style.display === ''){
                if (i.classList.contains('msg')){
                    i.style.display = 'grid';
                }else if(i.classList.contains('tilesContainer')){
                    i.style.display = 'block';
                }else{
                    i.style.display = 'flex';
                }
            }else{
                i.style.display = 'none';
            }
        }
    }
});

magic.addEventListener('mouseenter', () => {
    magic.style.border = '1px solid red';
});
magic.addEventListener('mouseleave', () => {
    magic.style.border = 'none';
});

const tiles = document.querySelectorAll('.tile');

for (let tile of tiles){
    tile.addEventListener('mousedown', () => {
        tile.style.boxShadow = '0px 0px 5px 0px darkgrey';
    });
    tile.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    tile.addEventListener('mouseup', (e) => {
        const link = tile.getAttribute('url');
        tile.style.boxShadow = '0px 0px 5px 3px darkgrey';
        if (link){
            switch(e.button){
                case 0:
                    if (link.includes('http')){
                        window.open(link, '_blank');
                    }else{
                        window.open(link, '_self');
                    }
                    break;
                case 1:
                    window.open(link, '_blank');
                    break;
            }
        }
    });
}

const expand = document.querySelectorAll('.expand');

for (let ex of expand){
        ex.addEventListener('click', function () {
            const parent = this.parentElement;
            let drawer = parent.querySelector('.drawer');
            let openDrawer = document.querySelector('.selected');
            if (!drawer.classList.contains('selected')){
                if (openDrawer != null){
                    openDrawer.classList.remove('selected');
                    openDrawer.style.maxHeight = null;
                }
                drawer.style.maxHeight = drawer.scrollHeight + 'px';
            }else{
                drawer.style.maxHeight = null;

            }
            drawer.classList.toggle('selected');
            
    })
}

document.querySelector('#joke').addEventListener('click', function() {
    // let theJoke = await joke();
    // let body = document.querySelector('.card-body');
    // let setUp = document.createElement('p');
    // let punchLine = document.createElement('p');

    // setUp.innerText = theJoke.setup;
    // punchLine.innerText = theJoke.punchline
    // punchLine.classList.add('dnone');

    document.querySelector('.md-modal').classList.remove('dnone');
    // CAN'T SEEM TO GET THE API TO ACTUAL POPULATE ANYTHING AT THIS POINT.
    console.log(joke());

    // body.appendChild(setUp);
    // body.appendChild(punchLine);
});

document.querySelector('.md-modal-background').addEventListener('click', () => {
    document.querySelector('.md-modal').classList.add('dnone');
})