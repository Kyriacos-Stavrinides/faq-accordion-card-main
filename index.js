function expand(target) {
    target.nextElementSibling.classList.toggle('visibility-hidden')
}

function rotate(target) {
    target.classList.toggle('rotate')
}

function headerChange(target) {
    target.previousElementSibling.classList.toggle('bold-font')
}

const arrowButtons = Array.from(document.querySelectorAll('img[src="./images/icon-arrow-down.svg"]'))
const h2s = Array.from(document.querySelectorAll('.question'))


arrowButtons.forEach(element => 
    element.addEventListener('click', () => {
        expand(element)
        rotate(element)
        headerChange(element)
    })
)

h2s.forEach(element => 
    element.addEventListener('click', () => {
        console.log
        expand(element)
        rotate(element)
        headerChange(element)
    })
)


