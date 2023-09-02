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
        hidden:true,
        title: "Cool Stuff",
        buttons: {
            button1: {
                hidden: true,
                url: './todoList/index.html',
                text: {
                    main: 'ToDo List',
                    sub: '',
                    warn:false
                }
            }
        }
    }
}
