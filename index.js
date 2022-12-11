function expand(target) {
    target.lastElementChild.classList.toggle('visibility-hidden')
}

function rotate(target) {
    target.children[1].classList.toggle('rotate')
}

function headerChange(target) {
    target.firstElementChild.classList.toggle('bold-font')
}

const arrowButtons = Array.from(document.querySelectorAll('.q_a'))


arrowButtons.forEach(element => {
    console.log(element),
    element.addEventListener('click', () => {
        expand(element)
        rotate(element)
        headerChange(element)
    })
})




