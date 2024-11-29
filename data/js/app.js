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
            $(this).css('transition', 'opacity 1000ms ease');
        },
        complete: function(){
            $(this).css('opacity', '1');
        }
    })
}

function createButtons(dNum){
    let buttonsCont = mkDiv({class:'card-content'});
    let drawerData = [...drawers];

    for (let btn of drawerData[dNum - 1].buttons){
        //md-button ps-2 pe-2 mt-2
        nestElem([
            buttonsCont,
            mkDiv({class:`md-button ps-2 pe-2 mt-2${((btn.hidden) ? ' dnone' : '')}`, url: btn.url, id: ((btn.id) ? btn.id : ''), listeners: [{type:'click', execute:clkBtn}]}),
            {
                1: mkElem({elemType:'img', class:'img-thumbnail', src: ((btn.icon) ? `./data/icons/${btn.icon}` : ''), alt: ((btn.icon) ? btn.icon : '')}),
                2: mkElem({elemType:'span', inner: btn.text.main})
            }
        ])
    }

    return nestElem([mkDiv({class:'card shadow drawer'}), buttonsCont])
}

function destroy(id){

    $(`#${id}-container`).fadeOut({
        duration: 1000,
        start: function(){
            $(this).css('z-index', '1');
            $(this).css('transition', '');
        },
        complete: function(){
            $(this).css('opacity', '0');
            $(this).remove();
        }
    })
    
}

async function clkBtn(){
    let url = this.getAttribute('url');

    if (url){
        if (url.includes('http')){
            window.open(url, '_blank');
        }else{
            window.open(url, '_self');
        }
    }else{
        if (this.id){
            switch (this.id){
                case 'joke':
                // something here
                document.querySelector('.md-modal').classList.remove('dnone');

                let joke = await makeMeLaugh();
                let body = document.querySelector('.card-body');

                document.querySelector('#loading').remove();

                if (joke){
                    body.append(joke.setup, joke.punchline);
                }else{
                    body.append(mkP({inner:'Sorry, Something went wrong!'}))
                }
                break;
            }
        }
    }
}

async function makeMeLaugh(){

    document.querySelector('.card-body').append(mkP({id: 'loading', inner:'Loading...'}))

    let data = await getRandomJoke();

    if (!data){
        return null;
    }
    
    return { setup: nestElem([
        mkP({inner: data.setup, id: 'setup'}),
        { 
            1:mkElem({elemType:'br'}),
            2:mkElem({elemType:'img', src:'./data/icons/thinker.png'}) 
        }
    ]),
    punchline: nestElem([
        mkP({class:'dnone', id:'answer', inner:data.punchline}),
        { 
            1:mkElem({elemType:'br'}),
            2:mkElem({elemType:'img', src:'./data/icons/laughing2.png'}) 
        }
    ]) }

}

function closeModal(){
    document.querySelector('.md-modal').classList.add('dnone');
    document.querySelector('#back').classList.add('dnone');
    document.querySelector('#close').classList.add('dnone');
    document.querySelector('#ans').classList.remove('dnone');
    document.querySelector('.card-body').innerHTML = '';
}

function showAnswer(){
    document.querySelector('#setup').classList.add('dnone');
    document.querySelector('#answer').classList.remove('dnone');
    document.querySelector('#back').classList.remove('dnone');
    document.querySelector('#close').classList.remove('dnone');
    document.querySelector('#ans').classList.add('dnone');
}

function goBack(){
    document.querySelector('#setup').classList.remove('dnone');
    document.querySelector('#answer').classList.add('dnone');
    document.querySelector('#back').classList.add('dnone');
    document.querySelector('#close').classList.add('dnone');
    document.querySelector('#ans').classList.remove('dnone');
}