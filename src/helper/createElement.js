const createElem = (tag, clas, text = null, element2, attr1 = null, attr2 = null)=>{
    let element = document.createElement(tag)
    element.className = clas
    if (text) element.textContent = text
    element2.append(element)
    if (attr1) element.setAttribute(attr1, attr2)
}
export {createElem}