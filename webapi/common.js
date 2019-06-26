function my$(id) {
    return document.getElementById(id);
}

function setInnerText(element,content) {
    if(typeof element.innerText === 'string') {
        element.innerText = content;
    }else {
        element.textContent = content;
    }
}