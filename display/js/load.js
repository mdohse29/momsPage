document.body.prepend(
    nestElem([
        mkDiv({class:'container-fluid'}),
        {
            0:nestElem([
                mkDiv({class:'row mt-4 header'}),
                mkDiv({class:'col text-center'}),
                mkHead({hType:'h1', class:'h1', inner:'Pages I Have Made'})
            ]),
            1:nestElem([
                mkDiv({class:'row mt-5 align-items-center'}),
                {
                    1:nestElem([
                        mkDiv({class:'col text-center'}),
                        mkDiv({class:'card shadow-lg'}),
                        {
                            1:nestElem([
                                mkDiv({class:'card-body'}),
                                mkDiv({class:'card-title'}),
                                mkHead({hType:'h3', class:'h3', inner:'The Scratchpad'}) // Title
                            ]),
                            2:nestElem([
                                mkDiv({class:'card-body'}),
                                nestElem([
                                    mkDiv({class:'ratio'}),
                                    {
                                        1:mkDiv({class:'frame-cover '}),
                                        2:mkElem({elemType:'iframe', scrolling:'no', src:'https://mdohse29.github.io/misc/scratch/'}) // IFRAME
                                    }
                                ])
                            ])
                        }

                    ]),
                    2:nestElem([
                        mkDiv({class:'col text-center'}),
                        mkDiv({class:'card shadow-lg'}),
                        {
                            1:nestElem([
                                mkDiv({class:'card-body'}),
                                mkDiv({class:'card-title'}),
                                mkHead({hType:'h3', class:'h3', inner:'The Gift Picker'}) // Title
                            ]),
                            2:nestElem([
                                mkDiv({class:'card-body'}),
                                nestElem([
                                    mkDiv({class:'ratio'}),
                                    {
                                        1:mkDiv({class:'frame-cover '}),
                                        2:mkElem({elemType:'iframe', scrolling:'no', src:'https://mdohse29.github.io/picker'}) // IFRAME
                                    }
                                ])
                            ])
                        }

                    ]),
                    3:nestElem([
                        mkDiv({class:'col text-center'}),
                        mkDiv({class:'card shadow-lg'}),
                        {
                            1:nestElem([
                                mkDiv({class:'card-body'}),
                                mkDiv({class:'card-title'}),
                                mkHead({hType:'h3', class:'h3', inner:'The Movie List'}) // Title
                            ]),
                            2:nestElem([
                                mkDiv({class:'card-body'}),
                                nestElem([
                                    mkDiv({class:'ratio'}),
                                    {
                                        1:mkDiv({class:'frame-cover '}),
                                        2:mkElem({elemType:'iframe', scrolling:'no', src:'https://mdohse29.github.io/misc/movieList/'}) // IFRAME
                                    }
                                ])
                            ])
                        }

                    ])
                }
            ])
        }
    ])
);