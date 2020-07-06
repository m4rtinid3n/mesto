const buttonOpenProfile = document.querySelector('.profile__button');
const buttonCloseProfile = document.querySelector('.popup__close');
const buttonOpenElements = document.querySelector('.profile__add-button');
const buttonCloseElements = document.querySelector('.popup__close_elements');
const popupProfile = document.querySelector('.popup_profile');
const popupElement = document.querySelector('.popup_element');
const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputJob = popupProfile.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = popupProfile.querySelector('.popup-profiles');
const cardsList = document.querySelector('.elements');
const cardsTemplate = document.querySelector('.template-elements');
const formElements = popupElement.querySelector('.popup-elements');
const nameElement = popupElement.querySelector('.popup__input_type_name-element');
const linkElement = popupElement.querySelector('.popup__input_type_src-element');

function CloneCard(item) {
    const card = cardsTemplate.content.cloneNode(true);
    card.querySelector('.element__title').textContent = item.name;
    card.querySelector('.element__image').src = item.link;
    card.querySelector('.element__delete_button').addEventListener('click', deleteCard);
    cardsList.prepend(card);
}

function deleteCard(e) {
    const card = e.target.closest('.element');
    card.remove();
}

function addCard(card, container) {
    container.prepend(card);
  }

initialCards.forEach(function (item) {
    CloneCard(item);
});
  
function popupToggle(popup) {
    popup.classList.toggle('popup_opened');
}

function saveProfileInfo() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupToggle(popupProfile);
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupToggle(popupProfile);
} 

function cardFormSubmitHandler(evt) {
    evt.preventDefault();
    const name = nameElement.value;
    const link = linkElement.value;
    const cardItem = {name,link,}
    const card = CloneCard(cardItem);
    addCard(card, cardsList)
    togglePopup(popupElement)
    formElements.reset()
  }


buttonOpenProfile.addEventListener('click', saveProfileInfo);
buttonCloseProfile.addEventListener('click', () => popupToggle(popupProfile));
buttonOpenElements.addEventListener('click', () => popupToggle(popupElement));
buttonCloseElements.addEventListener('click', () => popupToggle(popupElement));
formElement.addEventListener('submit', formSubmitHandler);
formElements.addEventListener('submit', cardFormSubmitHandler);