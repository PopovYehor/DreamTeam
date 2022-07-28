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
    createP('div', "select-hero", '', pokemonInfo)
}

export {init}