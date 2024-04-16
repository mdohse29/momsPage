function joke(){
    getRandomJoke().then((response) => { return response.json()})
    .then((data) => {
        console.log(data.setup);
    })
}