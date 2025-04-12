const openLoginModal = document.getElementById('prog-name');
const modalOverlay = document.getElementById('modal-overlay');
const loginModal = document.getElementById('login-modal');

openLoginModal.addEventListener('click', () =>{
  modalOverlay.classList.add('show-modal');
  alert('Your entering Administrator Access! Click OK to log in.');
});

modalOverlay.addEventListener('click', (e)=>{
  if(!loginModal.contains(e.target)){
    modalOverlay.classList.remove('show-modal');
  }
});