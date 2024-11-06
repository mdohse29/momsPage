
let nav_bar = nestElem([
    mkElem({elemType:'nav'}),
    mkDiv({class:'container-fluid'}),
    {
        1: nestElem([
            mkDiv({class:'btn-group', 'aria-label':'Categories'}),
            {
                1: mkBtn({id:'social', inner:'Email/Social', class:'btn btn-primary', listeners:[{type:'click', execute: toggleDrawer}]}),
                2: mkBtn({id:'news', inner:'News/Weather', class:'btn btn-primary', listeners:[{type:'click', execute: toggleDrawer}]}),
                3: mkBtn({id:'junk', inner:'Junk Drawer', class:'btn btn-primary', listeners:[{type:'click', execute: toggleDrawer}]})
            }
        ])
    }
]);

let modal = nestElem([
    mkDiv({class:'md-modal dnone'}),
    {
        1: nestElem([
            mkDiv({class:'md-modal-background', title:'Click to Close', listeners: [{type:'click', execute: closeModal}]}),
            mkBtn({class:'btn-close'})
        ]),
        2:nestElem([
            mkDiv({class:'md-modal-content'}),
            mkDiv({class:'card'}),
            {
                1: mkDiv({class:'card-body'}),
                2: nestElem([
                    mkDiv({class:'card-footer'}),
                    {
                        1: mkBtn({id:'ans', class:'btn btn-success', inner:'Show Answer', listeners: [{type:'click', execute: showAnswer}]}),
                        2: mkBtn({id:'close', class:'btn btn-danger dnone', inner:'Close', listeners: [{type:'click', execute: closeModal}]})
                    }
                ])
            }
        ])
    }
]);

document.body.prepend(nav_bar, mkDiv({class:'presentation'}), modal);