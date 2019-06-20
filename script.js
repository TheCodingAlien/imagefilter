const buttons = Array.from(document.getElementsByClassName('btn'))
const images = Array.from(document.getElementsByTagName('IMG'))

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.name
        images.forEach(image => {
            if (name === 'all') {
                return image.parentElement.classList.remove('hidden')
            }
            if (image.src.includes(name)) {
                return image.parentElement.classList.remove('hidden')
            }
            image.parentElement.classList.add('hidden')
        })
    })
})