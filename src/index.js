import "./style/styles.scss"

const createP = (tag, clas, text, element2) => {
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
    return element
}

const init = () => {
    const root = document.getElementById('root')
    const container = createP('div', "container", '', root)
    const pokemonList = createP('div', "heroes-list-wrap", '', container)
    createP('h2', 'heroes-list-title', "Heroes names", pokemonList)
    createP('div', 'heroes-list', '', pokemonList)
    const pokemonInfo = createP('div', 'heroes-info-wrap', '', container)
    createP('h1', 'title', 'Hero', pokemonInfo)
    createP('div', "heroes-title-wrap", '', pokemonInfo)
    createP('div', "select-hero", '', pokemonInfo)
}
init()
const heroesList = document.querySelector('.heroes-list'),
    pokemonInfo = document.querySelector('.select-hero')
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
            let button = createP("button", "hero-item", `${el.name}`, heroesList)
            button.addEventListener("click", () => {
                document.querySelectorAll(".pokemon-title").forEach(el => el.remove())
                document.querySelectorAll(".search-item").forEach(el => el.remove())
                createP("p", "pokemon-title", el.name, pokemonInfo)
                createP("p", "search-item", `Phrase:  ${phrases[i].quote}`, pokemonInfo)
            })
        });

    })

