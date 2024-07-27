window.onload = function(){

    let covers = document.querySelectorAll('.frame-cover');

    covers.forEach(cover => {
        cover.addEventListener('click', function () {
            document.querySelector('html').scroll({top:0, left:0})
            document.querySelector('html').style = 'overflow: hidden;';

            let parent = this.parentElement.parentElement.parentElement;
            let btnClose = mkbtn({class:'btn btn-close is-outlined'});

            
            parent.classList.add('active');
            
            btnClose.addEventListener('click', function () {
                this.remove();
                document.querySelector('html').removeAttribute('style');
                let parent = document.querySelector('.active');
    
                parent.classList.remove('active');
                parent.querySelector('.frame-cover').classList.remove('dnone');
                parent.querySelector('.ratio').removeAttribute('style');
                parent.querySelector('iframe').scrolling = 'no';

                let cards = document.querySelectorAll('.card');
    
                cards.forEach(card => {
                    if (card.parentElement.hasAttribute('style')){
                        // card.classList.remove('dnone');
                        card.parentElement.removeAttribute('style');
                    }
                });

            });

            let cardHeight = parent.scrollHeight;
            let currentFrame = parent.querySelector('.ratio').scrollHeight;
            let frameHeight = (currentFrame - (cardHeight - currentFrame) - 40) + 'px';

            parent.querySelector('iframe').scrolling = 'auto';

            parent.querySelector('.ratio').style.height = frameHeight;

            parent.querySelector('.card-title').prepend(btnClose)

            let cards = document.querySelectorAll('.card');

            this.classList.add('dnone');
            cards.forEach(card => {

                if (!card.classList.contains('active')){
                    // card.classList.add('dnone');
                    card.parentElement.style = 'z-index: -1;'
                }

            });

        });

    });

    let frameCovers = document.querySelectorAll('.frame-cover');

    frameCovers.forEach(cover => {
        cover.addEventListener('mouseenter', function(){
            this.appendChild(mkbtn({class:'btn btn-info', id:'submit', inner:'Click to Engage'}))
        })

        cover.addEventListener('mouseleave', function(){
            this.querySelector('#submit').remove();
        })
    })

    

}