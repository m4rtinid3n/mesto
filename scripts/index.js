let buttonOpen = document.querySelector('.profile__open-popup');
let buttonClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let inputName = popup.querySelector('.popup__input_type_name');
let inputJob = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = popup.querySelector('.popup__content');

function popupOpen() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose();
}

buttonOpen.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);
formElement.addEventListener('submit', formSubmitHandler);