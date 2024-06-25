let joke = async function (){
    let body = document.querySelector('.card-body');
    let loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerText = 'Loading...';
    body.appendChild(loading);
    
    document.querySelector('.md-modal').classList.remove('dnone');
    await getRandomJoke().then((response) => {
//  NOT HOW I IMAGINED THIS GOING !!!

        let data = response.json();
        // setup = data.setup;
        // punchline = data.punchline;
        data.then(value => {
            let setUp = document.createElement('p');
            let punchLine = document.createElement('p');

            setUp.innerText = value.setup;
            punchLine.innerHTML = value.punchline + '<br><img src="img\\icons8-laughing-94.png"/>';
            punchLine.classList.add('dnone');
            punchLine.setAttribute('id', 'answer');

            document.querySelector('#loading').remove();

            body.appendChild(setUp);
            body.appendChild(punchLine);
        });
    });
}


