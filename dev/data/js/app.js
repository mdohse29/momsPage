let itId = NaN;

function toggleDrawer(){
    let current = this;
    let active  = current.classList.contains('active');
    
    if (active){
        current.classList.remove('active');
        destroy(current.id);
    }else{
        let existing = document.querySelector('.btn-group > .active');

        if (existing){
            existing.classList.remove('active');
            destroy(existing.id);
        }

        current.classList.add('active');

        create(current.id);

    }

}

function create(id){
    let presentation = document.querySelector('.presentation');
    let container = mkDiv({class:'container', id: `${id}-container`, style:'opacity: 0;'});
    let newDrawer = undefined;

    switch(id){
        case 'social': // drawer1
            newDrawer = createButtons(1);
            break;
        case 'news': // drawer2
            newDrawer = createButtons(2);
            break;
        case 'junk': // drawer3
            newDrawer = createButtons(3);
            break;
    }

    presentation.appendChild(nestElem([container, newDrawer]))

    $('.container').fadeIn({
        duration: 1000,
        start: function(){
            // $(this).css('z-index', '1000')
            $(this).css('transition', 'opacity 1000ms ease')
        },
        complete: function(){
            $(this).css('opacity', '1')
        }
    })
}

function createButtons(dNum){
    let buttonsCont = mkDiv({class:'card-content'});
    let drawerData = drawers[`drawer${dNum}`];

    for (let b in drawerData.buttons){
        nestElem([buttonsCont, mkLnk({class:`md-button ps-2 pe-2 mt-2${(drawerData.buttons[b].hidden) ? ' dnone' : ''}`, target:'_blank', href:drawerData.buttons[b].url, inner:drawerData.buttons[b].text.main})])
    }

    return nestElem([mkDiv({class:'card shadow'}), buttonsCont])
}

function destroy(id){

    $(`#${id}-container`).fadeOut({
        duration: 1000,
        start: function(){
            $(this).css('z-index', '1')
            $(this).css('transition', '');
        },
        complete: function(){
            $(this).css('opacity', '0');
            $(this).remove();
        }
    })
    
}