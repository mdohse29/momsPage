const drawers = {
    drawer1 : {
        hidden: false,
        title: 'Email/Social',
        buttons:{
            button1: {
                hidden: false,
                url: 'https://mail.yahoo.com/',
                text: {
                    main: 'Yahoo! Mail',
                    sub: '',
                    warn: true
                }
            },
            button2: {
                hidden: false,
                url: 'https://mail.google.com/',
                text: {
                    main: 'Gmail',
                    sub: '',
                    warn: true
                }
            },
            button3: {
                hidden: false,
                url: 'https://facebook.com',
                text: {
                    main: 'Facebook',
                    sub: '',
                    warn: true
                }
            },
            button4: {
                hidden: false,
                url: 'https://youtube.com',
                text: {
                    main: 'Youtube',
                    sub: '',
                    warn: true
                }
            },
            button5: {
                hidden: false,
                url: 'https://www.pinterest.com/',
                text: {
                    main:'Pinterest',
                    sub:'',
                    warn:false
                }
            }
        }
    },
    drawer2 : {
        hidden: false,
        title: 'News',
        buttons: {
            button1 : {
                hidden:false,
                url:'https://www.foxnews.com/',
                text: {
                    main:'Fox News',
                    sub: '',
                    warn:false
                }
            },
            button2 : {
                hidden:false,
                url:'https://weather.com/weather/today/l/33e9a4faddfea28cc02768d8c27f285c37419549df2a41bd6cbae78eb7e8c7e9',
                text: {
                    main:'Weather.com',
                    sub: 'Dewey-Humbolt',
                    warn:false
                }
            },
            button3 : {
                hidden:false,
                url:'https://npr.org/',
                text: {
                    main:'NPR News',
                    sub: 'National Public Radio',
                    warn:false
                }
            }
        }
    },
    drawer3: {
        hidden:false,
        title: "Cool Stuff",
        buttons: {
            button1: {
                hidden: true,
                url: './todoList/',
                text: {
                    main: 'ToDo List',
                    sub: '',
                    warn:false
                }
            },
            button2: {
                hidden: false,
                url: 'https://mdohse29.github.io/misc/movieList/',
                text: {
                    main: 'Full Movie List',
                    sub: 'mdohse29.github.io',
                    warn: false
                }
            },
            button3: {
                hidden: true,
                url: 'https://mdohse29.github.io/picker/',
                text: {
                    main: 'Gift Picker',
                    sub: 'Seasonal',
                    warn: true
                }
            },
            button4: {
                hidden: false,
                url: '',
                text: {
                    main: 'Tell me a Joke',
                    sub: '',
                    warn: false
                },
                id: 'joke'
            }
        }
    }
}
