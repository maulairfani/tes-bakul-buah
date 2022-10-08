let modal = document.getElementsByClassName('popup')[0]
let openModal = document.getElementsByClassName('open-modal')[0]
let closeModal = document.getElementsByClassName('close-modal')[0]


openModal.addEventListener('click', function () {
    modal.style.display = 'flex'
})

closeModal.addEventListener('click', function () {
    modal.style.display = 'none'
})