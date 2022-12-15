const accordionButtons = Array.from(document.getElementsByClassName('accordion-header'));

function textOpen(target) {
    console.log(target.firstElementChild)
    target.firstElementChild.classList.toggle('font-bold')
    target.firstElementChild.classList.toggle('collapsed')
    target.nextElementSibling.classList.toggle('show') 
}

accordionButtons.forEach(element => {
    element.addEventListener('click', (e) => textOpen(element))
});
    
