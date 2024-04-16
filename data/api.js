let joke = function (){
    getRandomJoke().then((response) => {
        let data = response.json();
        // console.log(data);
        return data;
    });
}