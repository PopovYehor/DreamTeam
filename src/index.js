
let url = 'http://gateway.marvel.com/v1/public/characters',
    ts = '1656951848714',
    apikey = '5d50797712e719c716a59c5134eb932d',
    hash = 'd5de46631595cfb130232aa870407d2b',
    api = `${url}?ts=${ts}&apikey=${apikey}&hash=${hash}`,
    api2 = "https://www.breakingbadapi.com/api/quotes",
    phrases
fetch(api2)
    .then(arg => arg.json())
    .then(res => {
        phrases = res
    })
fetch(api)
    .then(arg => arg.json())
    .then(res => {
        console.log(res)
        res.data.results.forEach((el, i) => {
            console.log(`${el.name} phrase: ${phrases[i].quote}`)
        });

    })

