import "./style.scss"

const createP = (tag, clas, text, element2)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    element2.append(element)
}

const init = ()=>{
    const root = document.getElementById('root')
    createP('div', "container", '', root)
    const container = document.querySelector('.container')
    createP('div', "heroes-list-wrap", '', container)
    const pokemonList = document.querySelector('.heroes-list-wrap')
    createP('h2', 'heroes-list-title', "Heroes names", pokemonList)
    createP('div', 'heroes-list', '', pokemonList)
    
    createP('div', 'heroes-info-wrap', '', container)
    const pokemonInfo = document.querySelector('.heroes-info-wrap')
    createP('h1', 'title', 'Hero', pokemonInfo)
    createP('div', "heroes-title-wrap", '', pokemonInfo)
    const heroTitleWrap = document.querySelector('.heroes-title-wrap')
    createP('img', 'hero-img', null, heroTitleWrap)
    const heroImg = document.querySelector('.hero-img')
    heroImg.src = 'https://i.pinimg.com/originals/72/f6/1d/72f61d8d6eeae27c3b5366c0e49074d4.jpg'
    createP('p', 'quote', 'Цитата', heroTitleWrap)
    createP('div', "select-hero", '', pokemonInfo)
}

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
        console.log(res.data.results)
        const heroList = document.querySelector('.heroes-list')
        res.data.results.forEach(elem => createP('button', 'hero-item', `${elem.name}`, heroList))
        res.data.results.forEach((el, i) => {
            console.log(`${el.name} phrase: ${phrases[i].quote}`)
        });
    })

export {init}