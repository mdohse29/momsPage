/**
 *  structure for frame
 *  div.card.shadow
 *      div.card-body
 *          div.card-title
 *              h3.h3
 *              p.frame-info.dnone - Optional "Additional info about the frame" (Only appears when frame is active)
 *      div.card-body
 *          div.ratio
 *              div.frame-cover
 *              iframe[scrolling="no"]
 * 
 *  Overall Structure
 *  div.container-fluid
 *      div.row.mt-4.header
 *          div.col.text-center
 *              h1.h1
 *      div.row.mt-5.align-items-center.justify-content-center <-- Repeat structure for every frame
 *          div.col-6.col-lg-4.text-center.col-content
 *              {{frame}}
 *          div.col-6.col-lg-4.col-content.align-self-start
 *              div.container.description
 *                  .drawer.border-bottom
 *                      h5.h5 - "Header for drawer"
 *                      p.border-start.border-end.border-bottom.dnone - "description-of-frame"
 *              ||
 *                  "description-of-frame"
 *                  
 * 
 */
document.body.prepend(
    nestElem([
        mkDiv({class:'container-fluid'}),
        {
            0:nestElem([
                mkDiv({class:'row pt-2 pb-2 header'}),
                mkDiv({class:'col text-center'}),
                mkHead({hType:'h1', class:'h1', inner:'Pages I Have Made'})
            ]),
            1:nestElem([
                mkDiv({class:'row mt-5 align-items-center justify-content-center'}),
                {
                    1:nestElem([
                        mkDiv({class:'col-6 col-lg-4 text-center col-content'}),
                        mkDiv({class:'card shadow'}),
                        {
                            1:nestElem([
                                mkDiv({class:'card-body pb-0'}),
                                mkDiv({class:'card-title'}),
                                {
                                    1:mkHead({hType:'h3', class:'h3', inner:'The Scratchpad'}) // Title
                                }
                            ]),
                            2:nestElem([
                                mkDiv({class:'card-body'}),
                                nestElem([
                                    mkDiv({class:'ratio'}),
                                    {
                                        1:mkDiv({class:'frame-cover'}),
                                        2:mkElem({elemType:'iframe', scrolling:'no', src:'https://mdohse29.github.io/misc/scratch/'}) // IFRAME
                                    }
                                ])
                            ])
                        }

                    ]),
                    2:nestElem([
                        mkDiv({class:'col-6 col-lg-4 col-content align-self-start'}),
                        mkDiv({class:'container description'}),
                        {
                            1:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Purpose'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'This was created out of a need to be able to paste clean text into a content management application from a Word doc. At my work, our content people have to enter content authored in a Word doc into the CMT. A lot of the time it would cause hidden characters or unwanted formatting to be pasted in from the Word doc. I made this to help reduce the possibility of unwanted entities being pasted into the CMT. The text is run through several automatic checks that ensures there are no hidden entities before the text is pasted into the CMT. This has significantly reduced the amount of work needed after the fact to find and fix/replace unwanted formatting and entities. Very simple, but effective.'})
                                }
                            ]),
                            2:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Assets Used'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'<strong>Styling</strong><br>Bootstrap - for buttons and basic layout<br>Custom CSS - for everything else<br><br><strong>Scripting</strong><br>Javascript - for logic and creating elements<br>JQuery - for functionality<br>RegEX - for some of the text validating functions'})
                                }
                            ]),
                            3:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Extra Details'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'I decided to make my own modal and toggle switch for this, instead of using something from Bootstrap. Nothing super fancy, but it works.'})
                                }
                            ])
                        }
                    ])
                }
            ]),
            2:nestElem([
                mkDiv({class:'row mt-5 align-items-center justify-content-center'}),
                {
                    1:nestElem([
                        mkDiv({class:'col-6 col-lg-4 text-center col-content'}),
                        mkDiv({class:'card shadow'}),
                        {
                            1:nestElem([
                                mkDiv({class:'card-body pb-0'}),
                                mkDiv({class:'card-title'}),
                                mkHead({hType:'h3', class:'h3', inner:'Movie List'}) // Title
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

                    ]),
                    2:nestElem([
                        mkDiv({class:'col-6 col-lg-4 col-content align-self-start'}),
                        mkDiv({class:'container description'}),
                        {
                            1:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Purpose'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'The title kind of says it all, I made this to have a complete and searchable list of my movies on my media server. I can always see what is currently available to watch in my app, but wanted to be able to see what is on my archive too. Basically I couldn\'t sleep one weekend and whipped this out. Pretty simplistic, but I had fun making it. Comes in handy when I want to see what I want to swap out. I also added a little randomizer just for fun. I mean, why not? Great for when I really don\'t want to spend and hour going through everything.Unfortunately, not too useful for anyone who doesn\'t have access to my media server, but seemed like it was worth adding here.'})
                                }
                            ]),
                            2:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Assets Used'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'<strong>Style</strong><br>Bulma CSS - for the buttons, inputs, and general layout<br>Custom CSS - to get things just right<br><br><strong>Scripting</strong><br>Javascript - for loading the page<br>OMDb API @ <a href="http://www.omdbapi.com" target="_blank">www.omdbapi.com</a> - for the movie data<br>Axios - for retrieving list data and movie data<br>JQuery - for the functionality'})
                                }
                            ]),
                            3:nestElem([
                                mkDiv({class:'drawer border-bottom'}),
                                {
                                    1:mkHead({hType:'h5', class:'h5', inner:'Extra Details'}),
                                    2:mkP({class:'border-start border-end border-bottom dnone', isexpanded:'false', inner:'The lists automatically get updated via script run on my media server that updates github. I recently added some movie data to the list, thanks to OMDb API. Just a movie poster and a summary. You gotta enjoy the little things. I decided to make my own tabs instead of using something from Bulma. Again, simple but effective. In the end I am probably more about making something function properly over how pretty it is.'})
                                }
                            ])
                        }
                    ])
                }
            ])
        }
    ])
);