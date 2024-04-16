let joke = async function (){
    await getRandomJoke().then((response) => {
//  NOT HOW I IMAGINED THIS GOING !!!

        let data = response.json();
        // setup = data.setup;
        // punchline = data.punchline;
        data.then(value => {
            let body = document.querySelector('.card-body');
            let setUp = document.createElement('p');
            let punchLine = document.createElement('p');

            setUp.innerText = value.setup;
            punchLine.innerHTML = value.punchline + '<br><img src="img\\icons8-laughing-94.png"/>';
            punchLine.classList.add('dnone');
            punchLine.setAttribute('id', 'answer');

            document.querySelector('.md-modal').classList.remove('dnone');

            body.appendChild(setUp);
            body.appendChild(punchLine);
        });
    });
}


