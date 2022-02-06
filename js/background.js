const images = [
    "78255.jpg",
    "98913.jpg",
    "128727.jpg",
    "284466.jpg",
    "284467.jpg",
    "1089775.jpg",
    "1132054.jpg",
    "5418600.jpg"
]
const chosenbg = images[Math.floor(Math.random() * images.length)]


const bgImage = `url(img/${chosenbg})`
document.body.style.backgroundImage = bgImage
document.body.style.backgroundSize = cover
    // document.body.appendChild(bgImage)
    // perpend function add last-element.