/*
Must have element with .presentation in order for the
script to work properly.

Also requires drawers object for data.
The template is in ./templates/drawerData.js

.presentation
    .tilesContainer
        .expand
        .drawer
            .tiles
                .tile || flk

<span> && <span.red> for sub
*/
for (let drawer in drawers){

    let tilesContainer = document.createElement('div');
    tilesContainer.classList.add('tilesContainer');
    if (drawers[drawer].hidden){
        tilesContainer.classList.add('flk');
    }

    let expand = document.createElement('div');
    expand.classList.add('expand');
    expand.innerHTML = drawers[drawer].title;

    let dwr = document.createElement('div');
    dwr.classList.add('drawer');

    let tiles = document.createElement('div');
    tiles.classList.add('tiles');


    let buttons = drawers[drawer].buttons;

    for (let button in buttons){
        let tile = document.createElement('div');
        tile.classList.add('tile');

        if (buttons[button].hidden){
            tile.classList.add('flk');
        }

        if (buttons[button].url){
            tile.setAttribute('url', buttons[button].url);
        }

        if (buttons[button].id){
            tile.setAttribute('id', buttons[button].id);
        }

        let p = document.createElement('p');
        p.innerHTML = buttons[button].text.main;

        if (buttons[button].text.sub){
            let br = document.createElement('br');
            p.appendChild(br);

            let sub = document.createElement('span');

            if (buttons[button].text.warn){
                sub.classList.add('red');
            }

            sub.innerHTML = buttons[button].text.sub;

            p.appendChild(sub);
        }

        tile.appendChild(p);

        tiles.appendChild(tile);
    }

    dwr.appendChild(tiles);

    tilesContainer.appendChild(expand);

    tilesContainer.appendChild(dwr);

    document.querySelector('div.presentation').appendChild(tilesContainer);

}