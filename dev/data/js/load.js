
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
])

document.body.prepend(nav_bar, mkDiv({class:'presentation'}))