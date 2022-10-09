let popup = document.getElementsByClassName('popup')[0]

console.log(popup.style)

const showPopup = () => {
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
}