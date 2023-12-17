

const toggle = document.querySelector('#toggle');
const closeModal = document.querySelector('#close');
const openModal = document.querySelector('#open');
const modal = document.querySelector('#modal');


// Toggle navigation
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

// Show modal
openModal.addEventListener('click', () => {
    modal.classList.add('modal-show');
});

// Hide modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-show');
});

// Hide modal on outside click
window.addEventListener('click', (event) => {
    if(event.target.classList.contains('container-modal')){
        modal.classList.remove('modal-show');
    }
})